from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
)
from reportlab.lib.styles import getSampleStyleSheet
import os


def generate_passport_pdf(passport):

    os.makedirs("generated", exist_ok=True)

    filename = f"generated/{passport['passportId']}.pdf"

    doc = SimpleDocTemplate(filename)

    styles = getSampleStyleSheet()

    story = []

    story.append(
        Paragraph(
            "<b>Government of India</b>",
            styles["Title"]
        )
    )

    story.append(
        Paragraph(
            "National AI Trust Passport",
            styles["Heading1"]
        )
    )

    story.append(Spacer(1,20))

    fields = [

        ("Passport ID", passport["passportId"]),
        ("Model", passport["modelName"]),
        ("Organization", passport["organization"]),
        ("Version", passport["version"]),
        ("Issue Date", passport["issueDate"]),
        ("Trust Score", str(passport["trustScore"])),
        ("Risk", passport["risk"]),
        ("Status", passport["status"]),

    ]

    for label, value in fields:

        story.append(
            Paragraph(
                f"<b>{label}:</b> {value}",
                styles["BodyText"]
            )
        )

    story.append(Spacer(1,20))

    story.append(
        Paragraph(
            "<b>Trust Scores</b>",
            styles["Heading2"]
        )
    )

    for key, value in passport["scores"].items():

        story.append(
            Paragraph(
                f"{key.title()} : {value}",
                styles["BodyText"]
            )
        )

    story.append(Spacer(1,20))

    story.append(
        Paragraph(
            "<b>AI Summary</b>",
            styles["Heading2"]
        )
    )

    story.append(
        Paragraph(
            passport["summary"],
            styles["BodyText"]
        )
    )

    doc.build(story)

    return filename