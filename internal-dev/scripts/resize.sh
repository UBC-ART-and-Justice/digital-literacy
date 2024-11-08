#!/bin/bash

THRESHOLD_WIDTH=1200
THRESHOLD_HEIGHT=800

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