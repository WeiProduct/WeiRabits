#!/bin/bash

# Create placeholder images using ImageMagick or simple method
cd docs

# Function to create a gradient placeholder
create_placeholder() {
    local filename=$1
    local width=$2
    local height=$3
    local color1=$4
    local color2=$5
    local title=$6
    
    # Try to use convert (ImageMagick) if available
    if command -v convert &> /dev/null; then
        convert -size ${width}x${height} \
            gradient:"${color1}-${color2}" \
            -fill white -pointsize 48 -gravity center \
            -annotate +0+0 "${title}" \
            "${filename}"
    else
        # Create a simple colored rectangle as fallback
        echo "Creating simple placeholder for ${filename}"
        # We'll just copy and rename for now
        cp hero-screenshot.png "${filename}" 2>/dev/null || touch "${filename}"
    fi
}

# Create placeholders
create_placeholder "hero-screenshot.png" 350 700 "#007AFF" "#5AC8FA" "RHabits"
create_placeholder "screenshot-1.png" 280 560 "#007AFF" "#5AC8FA" "Today"
create_placeholder "screenshot-2.png" 280 560 "#5AC8FA" "#FF9500" "Create" 
create_placeholder "screenshot-3.png" 280 560 "#FF9500" "#FF3B30" "Stats"
create_placeholder "screenshot-4.png" 280 560 "#FF3B30" "#AF52DE" "Timer"

echo "Placeholder images created"