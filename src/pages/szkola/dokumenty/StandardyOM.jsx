import PdfViewer from "./PdfViewer";

const StandardyOM = () => {
    return (
        <PdfViewer
            title="Standardy Ochrony Małoletnich"
            file={`${import.meta.env.BASE_URL}dokumenty/standardyOM.pdf`}
        />
    );
};

export default StandardyOM;