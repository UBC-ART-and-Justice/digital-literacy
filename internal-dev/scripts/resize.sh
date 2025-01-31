#!/bin/sh

# ==============================
# |     Helper functions       |
# ==============================

RESET="\033[0m" # Reset to default color
BLACK="\033[0;30m"
NEAR_BLACK="\033[0;30;1m"
RED="\033[0;31m"
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
BLUE="\033[0;34m"
MAGENTA="\033[0;35m"
CYAN="\033[0;36m"
WHITE="\033[0;37m"

log() {
  local level="$1"
  local message="$2"

  case "$level" in
    info)
      color="$NEAR_BLACK"
      ;;
    tip)
      color="$MAGENTA"
      ;;
    debug)
      color="$CYAN"
      ;;
    success)
      color="$GREEN"
      ;;
    warn)
      color="$YELLOW"
      ;;
    error)
      color="$RED"
      ;;
    *)
      color="$RESET"
      ;;
  esac

  echo -e "${NEAR_BLACK}$(date '+%H:%M:%S') - ${color}$message${RESET}"
}

cleanup() {
  log "error" "Exiting script due to user interrupt."
  exit 1
}
trap 'cleanup' SIGINT

# ==============================
# |     Main script logic      |
# ==============================

THRESHOLD_WIDTH=1200
THRESHOLD_HEIGHT=800

if [ ! -d "input" ]; then
    log "error" "Input directory 'input' does not exist!"
    log "tip" "Create a directory 'input' at $(pwd), and place your images in it before running the script."
    exit 1
fi

if [ -d "output" ]; then
    if [ "$(ls -A output)" ]; then
        log "error" "Output directory is not empty. Please empty it first."
        log "tip" "Empty the 'output' directory at $(pwd) before running the script."
        exit 1
    fi
else
    mkdir output
fi

read -p "rename all files? (you will be asked to provide a base name) [y/n] " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "What should the files be called? (base name) " base_name
    rename="true"
    base_name="${base_name:-file}"
fi

# Initialize variables for total size tracking
total_input_size=0
total_output_size=0

# Counter for renaming files
count=1

# Process only image files from input directory
for file in input/*.{jpg,jpeg,png,gif,bmp}; do
    # Check if file exists and is a regular file
    if [ -f "$file" ]; then
        width=$(identify -format "%w" "$file")
        height=$(identify -format "%h" "$file")
        filename=$(basename "$file")
        extension="${filename##*.}"
        
        # Get input file size (using ls -l)
        input_size=$(ls -l "$file" | awk '{print $5}')
        total_input_size=$((total_input_size + input_size))
        
        # Create new filename
        if [ "$rename" = "true" ]; then
            new_filename="${base_name}-${count}.${extension}"
            count=$((count + 1))
        else
            # Clean the filename: lowercase, replace spaces and special chars with dash
            clean_name=$(echo "${filename%.*}" | tr '[:upper:]' '[:lower:]' | sed -e 's/[^a-z0-9]/-/g' -e 's/-\+/-/g' -e 's/^-\|-$//g')
            new_filename="${clean_name}.${extension}"
        fi

        if [ $width -gt $THRESHOLD_WIDTH ] || [ $height -gt $THRESHOLD_HEIGHT ]; then
            mogrify -strip -resize "${THRESHOLD_WIDTH}x${THRESHOLD_HEIGHT}>" -path output "$file"
            mv "output/$filename" "output/$new_filename"
            log "success" "Resized and stripped metadata from $filename to $new_filename"
        else
            cp "$file" "output/$new_filename"
            mogrify -strip "output/$new_filename"
            log "info" "Copied and stripped metadata from $filename to $new_filename"
        fi
        
        # Get output file size (using ls -l)
        output_size=$(ls -l "output/$new_filename" | awk '{print $5}')
        total_output_size=$((total_output_size + output_size))
    fi
done

# Calculate and display the total reduction
if [ $total_input_size -gt 0 ]; then
    reduction=$(( (total_input_size - total_output_size) * 100 / total_input_size ))
    input_mb=$(echo "scale=2; $total_input_size / 1048576" | bc)
    output_mb=$(echo "scale=2; $total_output_size / 1048576" | bc)
    log "tip" "Total size reduction: $reduction% (from ${input_mb}MB to ${output_mb}MB)"
fi