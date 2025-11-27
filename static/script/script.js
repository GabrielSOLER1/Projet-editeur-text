// const importFile = document.getElementById("imp")


// const exportFile = document.getElementById("exp")


// function downloadTextFile() {
//     const text = ""; // Replace with your text
//     const blob = new Blob([text], { type: 'text/plain' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'exportedFile.txt';
//     link.click();
// }

const textarea = document.getElementById("text123");

function toggleStyle(style) {
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    let selected = textarea.value.substring(start, end);

    if (selected.length === 0) return;

    let before = textarea.value.substring(0, start);
    let after = textarea.value.substring(end);

    let wrappedStart = "";
    let wrappedEnd = "";

    if (style === "bold") {
        wrappedStart = "**";
        wrappedEnd = "**";
    }
    else if (style === "italic") {
        wrappedStart = "*";
        wrappedEnd = "*";
    }
    else if (style === "underline") {
        wrappedStart = "__";
        wrappedEnd = "__";
    }

    // Si déjà formaté → enlever l'effet
    if (selected.startsWith(wrappedStart) && selected.endsWith(wrappedEnd)) {
        let unwrapped = selected.slice(wrappedStart.length, selected.length - wrappedEnd.length);
        textarea.value = before + unwrapped + after;
    }
    // Sinon → appliquer l'effet
    else {
        textarea.value = before + wrappedStart + selected + wrappedEnd + after;
    }
}

// Boutons
document.getElementById("bold").addEventListener("click", () => toggleStyle("bold"));
document.getElementById("italic").addEventListener("click", () => toggleStyle("italic"));
document.getElementById("underline").addEventListener("click", () => toggleStyle("underline"));

// Taille du texte
document.getElementById("fontSize").addEventListener("change", (e) => {
    textarea.style.fontSize = e.target.value;
});