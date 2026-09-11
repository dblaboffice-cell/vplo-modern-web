from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

OUTPUT = "output/pdf/podglad-wiadomosci-zgloszenie-rekrutacyjne.pdf"
FONT = "C:/Windows/Fonts/arial.ttf"
FONT_BOLD = "C:/Windows/Fonts/arialbd.ttf"

pdfmetrics.registerFont(TTFont("Arial", FONT))
pdfmetrics.registerFont(TTFont("Arial-Bold", FONT_BOLD))

styles = getSampleStyleSheet()
title = ParagraphStyle("Title", parent=styles["Title"], fontName="Arial-Bold", fontSize=19, leading=24, textColor=colors.HexColor("#102E63"), spaceAfter=6)
eyebrow = ParagraphStyle("Eyebrow", parent=styles["Normal"], fontName="Arial-Bold", fontSize=8, leading=10, textColor=colors.HexColor("#9A6B18"), spaceAfter=4)
normal = ParagraphStyle("NormalArial", parent=styles["Normal"], fontName="Arial", fontSize=9.4, leading=13, textColor=colors.HexColor("#253C61"))
label = ParagraphStyle("Label", parent=normal, fontName="Arial-Bold", fontSize=8, leading=10, textColor=colors.HexColor("#64748B"))
value = ParagraphStyle("Value", parent=normal, fontSize=9.2, leading=12)
note = ParagraphStyle("Note", parent=normal, fontSize=8.2, leading=11, textColor=colors.HexColor("#64748B"))

def cell(text, style=value):
    return Paragraph(text, style)

story = []
story.append(Paragraph("PODGLĄD WIADOMOŚCI E-MAIL", eyebrow))
story.append(Paragraph("Zgłoszenie rekrutacyjne", title))
story.append(Paragraph("Wzór wiadomości, która zostanie przekazana do szkoły po wypełnieniu formularza przez kandydata.", normal))
story.append(Spacer(1, 6 * mm))

meta = [
    [cell("DO", label), cell("dyrektor@vp-lo.krakow.pl")],
    [cell("TEMAT", label), cell("Zgłoszenie rekrutacyjne - imię i nazwisko kandydata")],
]
meta_table = Table(meta, colWidths=[32 * mm, 138 * mm])
meta_table.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F3F7FC")),
    ("BOX", (0, 0), (-1, -1), 0.7, colors.HexColor("#B9C8DA")),
    ("INNERGRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#D5DEEA")),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("LEFTPADDING", (0, 0), (-1, -1), 10),
    ("RIGHTPADDING", (0, 0), (-1, -1), 10),
    ("TOPPADDING", (0, 0), (-1, -1), 9),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
]))
story.append(meta_table)
story.append(Spacer(1, 7 * mm))
story.append(Paragraph("Nowe zgłoszenie rekrutacyjne", ParagraphStyle("Section", parent=normal, fontName="Arial-Bold", fontSize=11, leading=14, textColor=colors.HexColor("#102E63"), spaceAfter=7)))

rows = [
    ("Imię i nazwisko kandydata", "[wartość z formularza]"),
    ("Adres e-mail", "[wartość z formularza]"),
    ("Numer telefonu", "[wartość z formularza]"),
    ("Aktualna szkoła", "[wartość z formularza]"),
    ("Preferowany język obcy", "[wartość z formularza]"),
    ("Semestr rozpoczęcia nauki", "[wartość z formularza]"),
    ("Preferowane przedmioty rozszerzone", "[od 1 do 3 przedmiotów]"),
    ("Udział w konkursach lub olimpiadach", "Tak / Nie"),
    ("Zainteresowania", "[wartość z formularza - jeśli podano]"),
    ("Konkursy, olimpiady lub osiągnięcia", "[wartość z formularza - jeśli podano]"),
]
table_data = [[cell(key, label), cell(item)] for key, item in rows]
table = Table(table_data, colWidths=[67 * mm, 103 * mm], repeatRows=0)
table.setStyle(TableStyle([
    ("BOX", (0, 0), (-1, -1), 0.7, colors.HexColor("#B9C8DA")),
    ("INNERGRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#D5DEEA")),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#F3F7FC")),
    ("LEFTPADDING", (0, 0), (-1, -1), 10),
    ("RIGHTPADDING", (0, 0), (-1, -1), 10),
    ("TOPPADDING", (0, 0), (-1, -1), 7),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
]))
story.append(table)
story.append(Spacer(1, 6 * mm))
story.append(Paragraph("Potwierdzenia z formularza", ParagraphStyle("Consents", parent=normal, fontName="Arial-Bold", fontSize=10, leading=13, textColor=colors.HexColor("#102E63"), spaceAfter=4)))
story.append(Paragraph("- zgoda na przetwarzanie danych osobowych: Tak<br/>- zgoda na kontakt telefoniczny i mailowy: Tak<br/>- potwierdzenie prawdziwości danych: Tak", normal))
story.append(Spacer(1, 7 * mm))
story.append(Paragraph("To jest wzór formatu wiadomości. W aktualnej wersji strony formularz działa w trybie testowym i nie wysyła wiadomości e-mail.", note))

def footer(canvas, document):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#D5DEEA"))
    canvas.line(20 * mm, 15 * mm, 190 * mm, 15 * mm)
    canvas.setFont("Arial", 7.5)
    canvas.setFillColor(colors.HexColor("#64748B"))
    canvas.drawString(20 * mm, 10 * mm, "V Prywatne Liceum Ogólnokształcące w Krakowie im. Królowej Jadwigi")
    canvas.drawRightString(190 * mm, 10 * mm, f"Strona {document.page}")
    canvas.restoreState()

doc = SimpleDocTemplate(OUTPUT, pagesize=A4, leftMargin=20 * mm, rightMargin=20 * mm, topMargin=18 * mm, bottomMargin=22 * mm)
doc.build(story, onFirstPage=footer, onLaterPages=footer)
