import os
import sys
import subprocess
import cv2
import numpy as np
from PIL import Image

def process_hero_assets():
    input_video = 'intro.mp4'
    if not os.path.exists(input_video):
        print(f"Error: {input_video} not found")
        sys.exit(1)

    os.makedirs('public/hero', exist_ok=True)
    os.makedirs('public/logos', exist_ok=True)

    cap = cv2.VideoCapture(input_video)
    fps = cap.get(cv2.CAP_PROP_FPS) or 30.0
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    print(f"Video Info: {width}x{height} @ {fps} fps, total frames: {total_frames}")

    # Extract a representative frame for portrait-bust.webp and og.jpg
    mid_frame_idx = total_frames // 3
    cap.set(cv2.CAP_PROP_POS_FRAMES, mid_frame_idx)
    ret, frame = cap.read()
    if ret:
        # Convert BGR to RGB
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        pil_img = Image.fromarray(frame_rgb)
        
        # Save portrait-bust.webp
        portrait_path = 'public/logos/portrait-bust.webp'
        pil_img.save(portrait_path, 'WEBP', quality=92)
        portrait_root_path = 'public/portrait-bust.webp'
        pil_img.save(portrait_root_path, 'WEBP', quality=92)
        print(f"Saved portrait images to {portrait_path} and {portrait_root_path}")

        # Create OpenGraph image (1200x630)
        og_canvas = Image.new('RGB', (1200, 630), color=(244, 242, 238)) # #f4f2ee paper color
        # Resize portrait for OG
        aspect = pil_img.width / pil_img.height
        new_h = 580
        new_w = int(new_h * aspect)
        resized_portrait = pil_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        og_canvas.paste(resized_portrait, (1200 - new_w - 40, (630 - new_h) // 2))
        
        og_path = 'public/og.jpg'
        og_canvas.save(og_path, 'JPEG', quality=90)
        print(f"Saved OG image to {og_path}")

    cap.release()

    # Process hero.mp4 and hero.webm using ffmpeg if available or imageio/subprocess
    hero_mp4 = 'public/hero/hero.mp4'
    hero_webm = 'public/hero/hero.webm'

    # Check imageio-ffmpeg for python-based ffmpeg binary
    try:
        import imageio_ffmpeg
        ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
        print(f"Using imageio-ffmpeg at: {ffmpeg_exe}")

        # Copy/convert video preserving original quality and audio
        cmd_mp4 = [
            ffmpeg_exe, '-y',
            '-i', input_video,
            '-c:v', 'libx264',
            '-preset', 'fast',
            '-crf', '20',
            '-c:a', 'aac',
            '-b:a', '128k',
            '-movflags', '+faststart',
            hero_mp4
        ]
        print("Exporting hero.mp4...")
        subprocess.run(cmd_mp4, check=True)

        cmd_webm = [
            ffmpeg_exe, '-y',
            '-i', input_video,
            '-c:v', 'libvpx-vp9',
            '-crf', '30',
            '-b:v', '0',
            '-c:a', 'libopus',
            '-b:a', '128k',
            hero_webm
        ]
        print("Exporting hero.webm...")
        subprocess.run(cmd_webm, check=True)

        print("Hero video assets built successfully!")

    except Exception as e:
        print(f"Warning during video conversion: {e}")
        # Fallback: copy intro.mp4 to public/hero/hero.mp4 if conversion fails
        import shutil
        shutil.copyfile(input_video, hero_mp4)
        print(f"Copied {input_video} to {hero_mp4}")

if __name__ == '__main__':
    process_hero_assets()
