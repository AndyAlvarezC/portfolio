
const handleDownload = (): void => {
    const link = document.createElement("a");
    link.href = "/CV-Andy-Álvarez-Criado.pdf";
    link.download = "CV-Andy-Álvarez-Criado.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default handleDownload