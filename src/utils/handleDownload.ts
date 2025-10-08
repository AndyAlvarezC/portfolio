
const handleDownload = (): void => {
    const link = document.createElement("a");
    link.href = "/CV_Andy_Álvarez_Criado.pdf";
    link.download = "CV_Andy_Álvarez_Criado.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default handleDownload