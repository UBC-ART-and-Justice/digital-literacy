#!/bin/bash

# This script compresses PDF files in the 'input' folder and saves the compressed files in the 'output' folder.

# ==============================
# |     Helper functions       |
# ==============================

RESET="\033[0m"        # Reset to default color
BLACK="\033[0;30m"
RED="\033[0;31m"
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
BLUE="\033[0;34m"
MAGENTA="\033[0;35m"
CYAN="\033[0;36m"
WHITE="\033[0;37m"

# Log messages with custom colors
log() {
    local level="$1"
    local message="$2"
    
    case "$level" in
        info)
            color="$BLACK"
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

    # echo -e "$(date '+%Y-%m-%d %H:%M:%S') - ${color}$message${RESET}"
    echo -e "$(date '+%H:%M:%S') - ${color}$message${RESET}"
}

# Handle cleanup and exit on Ctrl+C
cleanup() {
    log "error" "Exiting script due to user interrupt."
    exit 1
}

# ==============================
# |     Main script logic      |
# ==============================

log "info" "Script started."

compress_pdfs() {
    input_folder="./input"
    output_folder="./output"

    if [ ! -d "$input_folder" ]; then
        log "error" "No input folder found, please create a folder named 'input' and place the PDFs you want to compress in it."
        exit 1
    fi

    if [ ! -d "$output_folder" ]; then
        mkdir -p "$output_folder"
        log "warn" "Output folder was missing, created $output_folder"
    fi

    for filename in "$input_folder"/*; do
        if [ -f "$filename" ]; then
            log "info" "Processing $filename"

            input_path="$filename"
            output_path="$output_folder/$(basename "${filename%.*}_compressed.pdf")"

            gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dBATCH -dQUIET -sOutputFile="$output_path" "$input_path"
            
            # Check if the compression was successful
            if [ $? -eq 0 ]; then
                log "success" "Successfully compressed $filename to $output_path"
            else
                log "error" "Failed to compress $filename"
            fi
        fi
    done

    log "tip" "Finished processing PDF files."
}

compress_pdfs
