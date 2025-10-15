export default function downloadFile(filePath: string, fileName: string): void {
  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName;
  link.style.display = 'none';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
