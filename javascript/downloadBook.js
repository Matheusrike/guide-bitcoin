document.querySelectorAll('.downloadBtn').forEach(button => {
    button.addEventListener('click', function () {
        const pdfUrl = this.getAttribute('data-pdf');
       
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = pdfUrl.split('/').pop();
       
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});