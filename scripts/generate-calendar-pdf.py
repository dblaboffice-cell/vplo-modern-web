from html import escape
from pathlib import Path

from docx import Document
from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public" / "dokumenty" / "Kalendarz_roku_szkolnego_2026-2027_edytowalny.docx"
OUTPUT = ROOT / "public" / "dokumenty" / "kalendarz-roku-szkolnego-2026-2027.pdf"

NAVY = colors.HexColor("#002B59")
GOLD = colors.HexColor("#C7A243")
TEXT = colors.HexColor("#263747")
MUTED = colors.HexColor("#5C6878")
LINE = colors.HexColor("#D7DEEA")
PALE_BLUE = colors.HexColor("#F3F6FA")
PALE_GOLD = colors.HexColor("#FBF7EA")

pdfmetrics.registerFont(TTFont("Calendar", r"C:\Windows\Fonts\arial.ttf"))
pdfmetrics.registerFont(TTFont("CalendarBold", r"C:\Windows\Fonts\arialbd.ttf"))

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="CalendarTitle", fontName="CalendarBold", fontSize=21, leading=25, textColor=NAVY, spaceAfter=5))
styles.add(ParagraphStyle(name="Lead", fontName="Calendar", fontSize=10.5, leading=14, textColor=MUTED, spaceAfter=14))
styles.add(ParagraphStyle(name="Section", fontName="CalendarBold", fontSize=14, leading=18, textColor=NAVY, spaceBefore=7, spaceAfter=7))
styles.add(ParagraphStyle(name="Subsection", fontName="CalendarBold", fontSize=10.5, leading=14, textColor=NAVY, spaceBefore=3, spaceAfter=5))
styles.add(ParagraphStyle(name="Body", fontName="Calendar", fontSize=9.3, leading=12, textColor=TEXT))
styles.add(ParagraphStyle(name="BodyBold", fontName="CalendarBold", fontSize=9.3, leading=12, textColor=NAVY))
styles.add(ParagraphStyle(name="ProjectCell", fontName="CalendarBold", fontSize=9.3, leading=12, textColor=NAVY))
styles.add(ParagraphStyle(name="TableHeader", fontName="CalendarBold", fontSize=9.2, leading=12, textColor=colors.white))
styles.add(ParagraphStyle(name="Note", fontName="Calendar", fontSize=8.2, leading=10.5, textColor=MUTED))


def p(text, style="Body"):
    value = escape(text.replace("\xa0", " ")).replace("\n", "<br/>")
    return Paragraph(value, styles[style])


def project_cell(text):
    event, label = text.rsplit("\n", 1)
    value = (
        f"{escape(event)}<br/>"
        f"<font name='Calendar' size='8.1' color='#977019'>{escape(label)}</font>"
    )
    return Paragraph(value, styles["ProjectCell"])


def read_tables():
    if not SOURCE.exists():
        raise FileNotFoundError(f"Source Word file was not found: {SOURCE}")
    document = Document(SOURCE)
    return [[[cell.text.strip() for cell in row.cells] for row in table.rows] for table in document.tables]


def render_table(rows, widths, project_rows=()):
    headers, body = rows[0], rows[1:]
    data = [[p(item, "TableHeader") for item in headers]]
    for row in body:
        values = []
        for index, item in enumerate(row):
            if index == 0 and "PROJEKT EDUKACYJNY" in item:
                values.append(project_cell(item))
            else:
                values.append(p(item, "Body"))
        data.append(values)
    table = Table(data, colWidths=widths, repeatRows=1, hAlign="LEFT")
    commands = [
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("GRID", (0, 0), (-1, -1), 0.45, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]
    for row_index in range(1, len(data)):
        fill = PALE_GOLD if row_index in project_rows else (PALE_BLUE if row_index % 2 == 0 else colors.white)
        commands.append(("BACKGROUND", (0, row_index), (-1, row_index), fill))
    for row_index in project_rows:
        commands.append(("LINEBEFORE", (0, row_index), (0, row_index), 3, GOLD))
    table.setStyle(TableStyle(commands))
    return table


def header_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(NAVY)
    canvas.setLineWidth(2)
    canvas.line(doc.leftMargin, A4[1] - 15 * mm, A4[0] - doc.rightMargin, A4[1] - 15 * mm)
    canvas.setFont("CalendarBold", 8.5)
    canvas.setFillColor(NAVY)
    canvas.drawString(doc.leftMargin, A4[1] - 11 * mm, "V Prywatne Liceum Ogólnokształcące w Krakowie im. Królowej Jadwigi")
    canvas.setFont("Calendar", 8)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(A4[0] - doc.rightMargin, 12 * mm, f"Rok szkolny 2026-2027 | Strona {doc.page}")
    canvas.restoreState()


def section(title):
    return Paragraph(title, styles["Section"])


def main():
    tables = read_tables()
    if len(tables) != 7:
        raise ValueError("The calendar Word file must contain seven tables.")
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, leftMargin=17 * mm, rightMargin=17 * mm, topMargin=24 * mm, bottomMargin=20 * mm)
    usable = A4[0] - doc.leftMargin - doc.rightMargin
    story = [
        Paragraph("Kalendarz roku szkolnego 2026-2027", styles["CalendarTitle"]),
        Paragraph("Najważniejsze informacje dotyczące organizacji roku szkolnego.", styles["Lead"]),
        section("Semestralny podział roku szkolnego"),
        render_table(tables[0], [usable * 0.28, usable * 0.22, usable * 0.50]),
        Spacer(1, 10),
        section("Terminy klasyfikacji"),
        Paragraph("Semestr I", styles["Subsection"]),
        render_table(tables[1], [usable * 0.70, usable * 0.30]),
        Spacer(1, 9),
        Paragraph("Semestr II", styles["Subsection"]),
        render_table(tables[2], [usable * 0.29, usable * 0.21, usable * 0.29, usable * 0.21]),
        PageBreak(),
        Spacer(1, 32 * mm),
        section("Najważniejsze terminy - Semestr I"),
        render_table(tables[3], [usable * 0.65, usable * 0.35], project_rows=(6,)),
        Spacer(1, 12),
        section("Zebrania i konsultacje z rodzicami - Semestr I"),
        render_table(tables[4], [usable * 0.58, usable * 0.42]),
        PageBreak(),
        Spacer(1, 32 * mm),
        Paragraph("Kalendarz roku szkolnego 2026-2027", styles["CalendarTitle"]),
        section("Najważniejsze terminy - Semestr II"),
        render_table(tables[5], [usable * 0.65, usable * 0.35], project_rows=(2, 8)),
        Spacer(1, 12),
        section("Zebrania i konsultacje z rodzicami - Semestr II"),
        render_table(tables[6], [usable * 0.58, usable * 0.42]),
        Spacer(1, 12),
        Paragraph("Terminy mają charakter informacyjny. Aktualne komunikaty szkoły są rozstrzygające.", styles["Note"]),
    ]
    doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)
    print(f"PDF updated: {OUTPUT}")


if __name__ == "__main__":
    main()
