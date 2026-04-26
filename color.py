from PIL import Image, ImageColor

img = Image.open('public/truck.png').convert('RGBA')
target_color = ImageColor.getcolor('#0f4c81', 'RGB')
gray = img.convert('LA')
result = Image.new('RGBA', img.size)

for x in range(img.width):
    for y in range(img.height):
        l, a = gray.getpixel((x, y))
        if a > 0:
            # We want to keep it bright if it's bright.
            # Screen or Overlay blending might be better, or just multiply if we want it colored.
            # Let's do a tint: map white to white, black to black, and midtones to blue.
            # But wait, a simple multiply is usually okay for icons.
            # Actually, let's map white to target color, or keep white as white?
            # A simple way to make it "blue":
            r = int(target_color[0] * (l / 255.0) + 255 * (1 - (l / 255.0)) * 0.2) 
            # This is getting complicated. Let's just do multiply.
            r = int(target_color[0] * l / 255.0)
            g = int(target_color[1] * l / 255.0)
            b = int(target_color[2] * l / 255.0)
            
            # If the image was very dark, it will be very dark blue. 
            # If it was a black silhouette, l will be 0, so it will be black.
            # Wait, if it's a silhouette (mostly black), multiplying will keep it black!
            # If it's a black icon, we should just replace non-transparent pixels with target_color.
            # Let's just mix the color: if a pixel has alpha, color it target_color but keep original luminosity to some extent.
            # Let's just use the target color directly for everything to make it a flat icon, but keep alpha!
            # Wait, if it's a detailed icon, losing details is bad.
            # Let's just map the dark pixels to target color, and keep light pixels light.
            r = target_color[0] + int((255 - target_color[0]) * (l / 255.0))
            g = target_color[1] + int((255 - target_color[1]) * (l / 255.0))
            b = target_color[2] + int((255 - target_color[2]) * (l / 255.0))
            
            # This makes black -> target_color, white -> white.
            # Perfect for black icons!
            result.putpixel((x, y), (r, g, b, a))

result.save('public/truck.png')
print("Done")
