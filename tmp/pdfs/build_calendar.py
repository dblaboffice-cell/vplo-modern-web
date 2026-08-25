from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUTPUT = "public/dokumenty/kalendarz-roku-szkolnego-2026-2027.pdf"

NAVY = colors.HexColor("#002B59")
GOLD = colors.HexColor("#C7A243")
TEXT = colors.HexColor("#263747")
MUTED = colors.HexColor("#5C6878")
LINE = colors.HexColor("#D7DEEA")
PALE_BLUE = colors.HexColor("#F3F6FA")
PALE_GOLD = colors.HexColor("#FBF7EA")

pdfmetrics.registerFont(TTFont("VPLO", r"C:\Windows\Fonts\arial.ttf"))
pdfmetrics.registerFont(TTFont("VPLOBold", r"C:\Windows\Fonts\arialbd.ttf"))

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="DocTitle", fontName="VPLOBold", fontSize=21, leading=25,
    textColor=NAVY, spaceAfter=5,
))
styles.add(ParagraphStyle(
    name="DocLead", fontName="VPLO", fontSize=10.5, leading=15,
    textColor=MUTED, spaceAfter=16,
))
styles.add(ParagraphStyle(
    name="Section", fontName="VPLOBold", fontSize=14, leading=18,
    textColor=NAVY, spaceBefore=8, spaceAfter=8,
))
styles.add(ParagraphStyle(
    name="Body", fontName="VPLO", fontSize=9.4, leading=12.5,
    textColor=TEXT,
))
styles.add(ParagraphStyle(
    name="BodyBold", fontName="VPLOBold", fontSize=9.4, leading=12.5,
    textColor=NAVY,
))
styles.add(ParagraphStyle(
    name="Note", fontName="VPLO", fontSize=8.1, leading=10.5,
    textColor=MUTED,
))
styles.add(ParagraphStyle(
    name="TableHeader", fontName="VPLOBold", fontSize=9.3, leading=12,
    textColor=colors.white,
))
styles.add(ParagraphStyle(
    name="Footer", fontName="VPLO", fontSize=7.8, textColor=MUTED,
    alignment=TA_LEFT,
))


def P(text, style="Body"):
    return Paragraph(text, styles[style])


def section(title):
    return Paragraph(title, styles["Section"])


def standard_table(headers, rows, widths, project_rows=()):
    data = [[P(header, "TableHeader") for header in headers]]
    for row in rows:
        data.append([cell if hasattr(cell, "wrap") else P(cell) for cell in row])
    table = Table(data, colWidths=widths, repeatRows=1, hAlign="LEFT")
    commands = [
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("GRID", (0, 0), (-1, -1), 0.45, LINE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, PALE_BLUE]),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]
    for row_index in project_rows:
        commands.extend([
            ("BACKGROUND", (0, row_index), (-1, row_index), PALE_GOLD),
            ("LINEBEFORE", (0, row_index), (0, row_index), 3, GOLD),
        ])
    table.setStyle(TableStyle(commands))
    return table


def classification_card(title, items, width):
    rows = [[P(title, "BodyBold"), ""]]
    for name, date, *note in items:
        label = P(name + (f"<br/><font size=8 color='#5C6878'>{note[0]}</font>" if note else ""), "BodyBold")
        rows.append([label, P(date, "Body")])
    table = Table(rows, colWidths=[width * 0.68, width * 0.32], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("SPAN", (0, 0), (1, 0)),
        ("BACKGROUND", (0, 0), (-1, -1), PALE_BLUE),
        ("BOX", (0, 0), (-1, -1), 0.55, LINE),
        ("LINEBELOW", (0, 1), (-1, -2), 0.45, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (1, 1), (1, -1), "RIGHT"),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    return table


def page_header(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(NAVY)
    canvas.setLineWidth(2)
    canvas.line(doc.leftMargin, A4[1] - 15 * mm, A4[0] - doc.rightMargin, A4[1] - 15 * mm)
    canvas.setFont("VPLOBold", 8.5)
    canvas.setFillColor(NAVY)
    canvas.drawString(doc.leftMargin, A4[1] - 11 * mm, "V Prywatne Liceum Ogólnokształcące w Krakowie im. Królowej Jadwigi")
    canvas.setFont("VPLO", 8)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(A4[0] - doc.rightMargin, 12 * mm, f"Rok szkolny 2026-2027 | Strona {doc.page}")
    canvas.restoreState()


def project_name(name):
    return f"<b>{name}</b><br/><font size=8 color='#977019'>PROJEKT EDUKACYJNY</font>"


def main():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=A4,
        leftMargin=17 * mm,
        rightMargin=17 * mm,
        topMargin=24 * mm,
        bottomMargin=20 * mm,
        title="Kalendarz roku szkolnego 2026-2027",
        author="V Prywatne Liceum Ogólnokształcące w Krakowie",
    )
    usable = A4[0] - doc.leftMargin - doc.rightMargin
    story = [
        Paragraph("Kalendarz roku szkolnego 2026-2027", styles["DocTitle"]),
        Paragraph("Najważniejsze informacje dotyczące organizacji roku szkolnego.", styles["DocLead"]),
        section("Semestralny podział roku szkolnego"),
        standard_table(
            ["Grupa", "Semestr", "Termin"],
            [
                ["Klasy I-III", "Semestr I", "1 września 2026 - 31 stycznia 2027"],
                ["Klasy I-III", "Semestr II", "1 lutego 2027 - 25 czerwca 2027"],
                ["Klasa IV", "Semestr I", "1 września 2026 - 31 grudnia 2026"],
                ["Klasa IV", "Semestr II", "1 stycznia 2027 - 30 kwietnia 2027"],
            ],
            [usable * 0.28, usable * 0.22, usable * 0.50],
        ),
        Spacer(1, 12),
        section("Terminy klasyfikacji"),
        Paragraph("Semestr I", styles["BodyBold"]),
        Spacer(1, 5),
        classification_card("Klasy I-IV", [
            ("Wystawianie ocen za I semestr", "14 grudnia 2026", "W przypadku ocen z historii dla maturzystów należy wystawić zagrożenia i oceny proponowane najpóźniej do 30 listopada."),
            ("Rada Pedagogiczna", "17 grudnia 2026"),
        ], usable),
        Spacer(1, 12),
        Paragraph("Semestr II", styles["BodyBold"]),
        Spacer(1, 5),
        Table([[classification_card("Klasy I-III", [
            ("Zagrożenia i oceny przewidywane", "31 maja 2027"),
            ("Oceny klasyfikacyjne", "18 czerwca 2027"),
            ("Rada Pedagogiczna", "21 czerwca 2027"),
        ], usable * 0.48), classification_card("Klasy IV", [
            ("Zagrożenia i oceny przewidywane", "2 kwietnia 2027"),
            ("Oceny klasyfikacyjne", "23 kwietnia 2027"),
            ("Rada Pedagogiczna", "26 kwietnia 2027"),
        ], usable * 0.48)]], colWidths=[usable * 0.48, usable * 0.48], hAlign="LEFT"),
        PageBreak(),
        Spacer(1, 32 * mm),
        section("Najważniejsze terminy - Semestr I"),
        standard_table(
            ["Wydarzenie", "Termin"],
            [
                ["Rozpoczęcie Roku Szkolnego", "1 września 2026 (wt)"],
                ["Narodowe Czytanie - Dziady", "4 września 2026 (pt)"],
                ["Dzień Edukacji Narodowej<br/><font size=8 color='#5C6878'>dzień dyrektorski</font>", "14 października 2026 (śr)"],
                ["Dzień Patronki Szkoły", "16 października 2026 (pt)"],
                ["Dzień Niepodległości i przerwa jesienna<br/><font size=8 color='#5C6878'>12 i 13 listopada - dni dyrektorskie</font>", "11-15 listopada 2026 (śr-nd)"],
                [project_name("65. Sesja Naukowa"), "20 grudnia 2026"],
                ["Szkolne kolędowanie i wigilia klasowe", "18 grudnia 2026 (pt)"],
                ["Przerwa świąteczna<br/><font size=8 color='#5C6878'>21 i 22 grudnia - dni dyrektorskie</font>", "21 grudnia 2026 - 1 stycznia 2027"],
                ["Trzech Króli<br/><font size=8 color='#5C6878'>dzień wolny</font>", "6 stycznia 2027 (śr)"],
            ],
            [usable * 0.65, usable * 0.35],
            project_rows=(6,),
        ),
        Spacer(1, 16),
        section("Zebrania i konsultacje z rodzicami - Semestr I"),
        standard_table(
            ["Spotkanie", "Termin"],
            [
                ["Zebranie z rodzicami klas I-IV", "7-11 września 2026 (wybrany dzień)"],
                ["Zebranie z rodzicami klas I-IV", "11-15 stycznia 2027 (wybrany dzień)"],
        ],
        [usable * 0.58, usable * 0.42],
        ),
        PageBreak(),
        Spacer(1, 32 * mm),
        Paragraph("Kalendarz roku szkolnego 2026-2027", styles["DocTitle"]),
        section("Najważniejsze terminy - Semestr II"),
        standard_table(
            ["Wydarzenie", "Termin"],
            [
                ["Ferie zimowe<br/><font size=8 color='#5C6878'>województwo małopolskie</font>", "15-28 lutego 2027"],
                [project_name("Dzień Języka Angielskiego"), "20 marca 2027"],
                ["Przerwa wielkanocna", "25-30 marca 2027"],
                ["Zakończenie Roku Maturzystów", "30 kwietnia 2027"],
                ["Konstytucja 3 maja", "3 maja 2027 (pon)"],
                ["Dni dyrektorskie na czas matur", "4-7 maja 2027 (wt-pt)"],
                ["Boże Ciało<br/><font size=8 color='#5C6878'>28 maja - dzień dyrektorski</font>", "27-28 maja 2027 (czw-pt)"],
                [project_name("66. Sesja Naukowa"), "20 czerwca 2027"],
                ["Zakończenie Roku Szkolnego", "25 czerwca 2027"],
                ["Ferie letnie", "26 czerwca - 31 sierpnia 2027"],
            ],
            [usable * 0.65, usable * 0.35],
            project_rows=(2, 8),
        ),
        Spacer(1, 16),
        section("Zebrania i konsultacje z rodzicami - Semestr II"),
        standard_table(
            ["Spotkanie", "Termin"],
            [
                ["Konsultacje z rodzicami maturzystów", "1-3 kwietnia 2027 (wybrany dzień)"],
                ["Zebranie z rodzicami uczniów klas I-III", "31 maja - 4 czerwca 2027 (wybrany dzień)"],
            ],
            [usable * 0.58, usable * 0.42],
        ),
        Spacer(1, 14),
        Paragraph("Terminy mają charakter informacyjny. Aktualne komunikaty szkoły są rozstrzygające.", styles["Note"]),
    ]
    doc.build(story, onFirstPage=page_header, onLaterPages=page_header)


if __name__ == "__main__":
    main()
