import React from 'react';

const PDFViewer = ({ pdfUrl }) => {
    return (
        <iframe 
            src={pdfUrl} 
            style={{ width: '100%', height: '500px' }} 
            frameBorder="0"
            allowFullScreen
        ></iframe>
    );
};

export default PDFViewer;