const PdfViewer = ({ title, file }) => {
    return (
        <section className="pdf-page page-wrap container">
            <div className="pdf-page-header">
                <span>Dokumenty</span>
                <h1>{title}</h1>
            </div>

            <div className="pdf-viewer">
                <iframe
                    src={file}
                    title={title}
                />
            </div>

            <div className="pdf-actions">
                <a
                    href={file}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Otwórz dokument w nowej karcie
                </a>
            </div>
        </section>
    );
};

export default PdfViewer;