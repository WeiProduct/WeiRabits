#!/usr/bin/env python3
"""
Generate placeholder screenshots for RHabits landing page
"""

from PIL import Image, ImageDraw, ImageFont
import os


os.makedirs('docs', exist_ok=True)

def create_gradient(width, height, start_color, end_color):
    image = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(image)
    
    for y in range(height):
        r = int(start_color[0] + (end_color[0] - start_color[0]) * y / height)
        g = int(start_color[1] + (end_color[1] - start_color[1]) * y / height)
        b = int(start_color[2] + (end_color[2] - start_color[2]) * y / height)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    return image

def create_phone_screenshot(width, height, title, bg_start, bg_end):

    img = create_gradient(width, height, bg_start, bg_end)
    draw = ImageDraw.Draw(img)
    

    draw.rectangle([(0, 0), (width, 44)], fill=(255, 255, 255, 230))
    

    content_margin = 20
    content_top = 80
    draw.rounded_rectangle(
        [(content_margin, content_top), (width - content_margin, height - content_margin)],
        radius=20,
        fill=(255, 255, 255, 240)
    )
    

    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
        small_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 18)
    except:
        font = ImageFont.load_default()
        small_font = ImageFont.load_default()
    

    bbox = draw.textbbox((0, 0), title, font=font)
    text_width = bbox[2] - bbox[0]
    text_x = (width - text_width) // 2
    draw.text((text_x, content_top + 40), title, fill=(0, 0, 0), font=font)
    


    card_y = content_top + 120
    for i in range(3):
        card_margin = 40
        card_height = 80
        draw.rounded_rectangle(
            [(card_margin, card_y), (width - card_margin, card_y + card_height)],
            radius=15,
            fill=(245, 245, 250),
            outline=(230, 230, 235),
            width=1
        )
        

        circle_x = card_margin + 30
        circle_y = card_y + card_height // 2
        draw.ellipse(
            [(circle_x - 20, circle_y - 20), (circle_x + 20, circle_y + 20)],
            fill=(0, 122, 255) if i == 0 else (240, 240, 245),
            outline=(0, 122, 255) if i == 0 else (220, 220, 225),
            width=2
        )
        
        card_y += card_height + 20
    
    return img


screenshots = [
    {
        'name': 'hero-screenshot.png',
        'size': (350, 700),
        'title': 'Today\'s Habits',
        'bg_start': (0, 122, 255),
        'bg_end': (90, 200, 250)
    },
    {
        'name': 'screenshot-1.png',
        'size': (280, 560),
        'title': 'Daily Progress',
        'bg_start': (0, 122, 255),
        'bg_end': (90, 200, 250)
    },
    {
        'name': 'screenshot-2.png',
        'size': (280, 560),
        'title': 'Create Habit',
        'bg_start': (90, 200, 250),
        'bg_end': (255, 149, 0)
    },
    {
        'name': 'screenshot-3.png',
        'size': (280, 560),
        'title': 'Statistics',
        'bg_start': (255, 149, 0),
        'bg_end': (255, 59, 48)
    },
    {
        'name': 'screenshot-4.png',
        'size': (280, 560),
        'title': 'Pomodoro Timer',
        'bg_start': (255, 59, 48),
        'bg_end': (175, 82, 222)
    }
]

for screenshot in screenshots:
    img = create_phone_screenshot(
        screenshot['size'][0],
        screenshot['size'][1],
        screenshot['title'],
        screenshot['bg_start'],
        screenshot['bg_end']
    )
    img.save(f"docs/{screenshot['name']}")
    print(f"Created {screenshot['name']}")

print("All screenshots generated successfully!")