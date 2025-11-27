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

const textarea = document.getElementById("text123");

// Fonction qui entoure le texte sélectionné avec une syntaxe Markdown simple
function applyStyle(style) {
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    let selected = textarea.value.substring(start, end);

    if (selected.length === 0) return;

    let before = textarea.value.substring(0, start);
    let after = textarea.value.substring(end);

    if (style === "bold") {
        textarea.value = before + "**" + selected + "**" + after;
    }
    else if (style === "italic") {
        textarea.value = before + "*" + selected + "*" + after;
    }
    else if (style === "underline") {
        textarea.value = before + "__" + selected + "__" + after;
    }
}

// Boutons de style
document.getElementById("bold").addEventListener("click", () => applyStyle("bold"));
document.getElementById("italic").addEventListener("click", () => applyStyle("italic"));
document.getElementById("underline").addEventListener("click", () => applyStyle("underline"));

// Changer la taille du texte
document.getElementById("fontSize").addEventListener("change", (e) => {
    textarea.style.fontSize = e.target.value;
});