import os
from pathlib import Path
from PIL import Image

PUBLIC_DIR = Path(__file__).parent.parent / "public"
EXTENSIONS = {".png", ".jpg", ".jpeg"}
QUALITY = 80

def convert():
    files = [
        p for p in PUBLIC_DIR.rglob("*")
        if p.suffix.lower() in EXTENSIONS
    ]

    if not files:
        print("No images found to convert.")
        return

    print(f"Found {len(files)} image(s) to convert:\n")

    for file in files:
        out_path = file.with_suffix(".webp")
        original_kb = file.stat().st_size / 1024

        img = Image.open(file)
        img.save(out_path, "WEBP", quality=QUALITY)

        new_kb = out_path.stat().st_size / 1024
        savings = ((file.stat().st_size - out_path.stat().st_size) / file.stat().st_size) * 100

        print(f"  {file.name} ({original_kb:.1f}KB) -> {out_path.name} ({new_kb:.1f}KB) [{savings:.1f}% smaller]")

    print("\nDone. Update your code to reference .webp files, then delete the originals.")

if __name__ == "__main__":
    convert()
