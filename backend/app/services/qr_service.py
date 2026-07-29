import qrcode
import os


def generate_qr(passport_id):

    os.makedirs("generated/qr", exist_ok=True)

    url = f"http://localhost:5173/verify/{passport_id}"

    img = qrcode.make(url)

    filename = f"generated/qr/{passport_id}.png"

    img.save(filename)

    return filename