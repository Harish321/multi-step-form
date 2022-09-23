import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";

function PdfDownloader() {
  return (
    <div>
      <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
}

function MyDoc({ details }) {
  return (
    <Document>
      <Page></Page>
    </Document>
  );
}

export default PdfDownloader;
