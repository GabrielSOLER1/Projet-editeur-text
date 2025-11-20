const importFile = document.getElementById("imp")

const exportFile = document.getElementById("exp")

function downloadTextFile() {
    const text = ""; // Replace with your text
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'exportedFile.txt';
    link.click();
}