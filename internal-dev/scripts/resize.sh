#!/bin/bash

THRESHOLD_WIDTH=1200
THRESHOLD_HEIGHT=800

# Replace all spaces in filenames with underscores
for file in *; do
  if [[ "$file" == *" "* ]]; then
    mv "$file" "${file// /_}"
    echo "Renamed '$file' to '${file// /_}'"
  fi
done

# Resize images that exceed the threshold
for file in $(find . -type f -name "*.jpg" -o -name "*.png"); do
  width=$(identify -format "%w" "$file")
  height=$(identify -format "%h" "$file")

  if [ $width -gt $THRESHOLD_WIDTH ] || [ $height -gt $THRESHOLD_HEIGHT ]; then
    mogrify -resize "${THRESHOLD_WIDTH}x${THRESHOLD_HEIGHT}>" "$file"
    echo "Resized $file"
  else
    echo "Skipped $file"
  fi
done