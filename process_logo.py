from PIL import Image, ImageDraw, ImageOps
import sys

def make_circle(img_path, out_path):
    try:
        # Open image and convert to RGBA
        img = Image.open(img_path).convert("RGBA")
        width, height = img.size
        
        # We want to make a perfect circle. Find the bounding box.
        size = min(width, height)
        left = (width - size) / 2
        top = (height - size) / 2
        right = (width + size) / 2
        bottom = (height + size) / 2
        
        # Crop to square first
        img = img.crop((left, top, right, bottom))
        
        # Create a transparent mask
        mask = Image.new("L", (size, size), 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, size, size), fill=255)
        
        # Apply the mask
        result = Image.new("RGBA", (size, size), (0,0,0,0))
        result.paste(img, (0, 0), mask)
        
        # Save as PNG
        result.save(out_path, format="PNG")
        print(f"Successfully saved to {out_path}")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    make_circle("public/image.png", "public/image_circle.png")
