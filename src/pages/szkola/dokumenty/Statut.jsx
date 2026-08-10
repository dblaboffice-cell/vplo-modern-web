import PdfViewer from "./PdfViewer";

const Statut = () => {
    return (
        <PdfViewer
            title="Statut Liceum"
            file={`${import.meta.env.BASE_URL}dokumenty/statut.pdf`}
        />
    );
};

export default Statut;