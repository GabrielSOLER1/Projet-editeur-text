const importFile = document.getElementById("imp")

const exportFile = document.getElementById("exp")

<<<<<<< Updated upstream
function downloadTextFile() {
    const text = ""; // Replace with your text
=======
// const exportFile = document.getElementById("exp")


const textarea = document.getElementById("text123");

textarea.addEventListener("input", () => {
  preview.innerHTML = marked.parse(textarea.value);
});

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

    
    if (selected.startsWith(wrappedStart) && selected.endsWith(wrappedEnd)) {
        let unwrapped = selected.slice(wrappedStart.length, selected.length - wrappedEnd.length);
        textarea.value = before + unwrapped + after;
    }
    
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

let textareaExp = document.getElementById("text123");

function downloadTextFile() {
    const text = textareaExp.value ; 
>>>>>>> Stashed changes
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'exportedFile.txt';
    link.click();
<<<<<<< Updated upstream
}
=======
}

document.getElementById("exp").addEventListener("click",() => downloadTextFile() );


document.getElementById("importTxt").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("text123").value = e.target.result;
    };
    reader.readAsText(file, "UTF-8");
});

const toggleBtn = document.getElementById("toggleMode");
    toggleBtn.addEventListener("click", () => {
    console.log("✅ Night Mode button clicked!");
    document.body.classList.toggle("night");
  });
>>>>>>> Stashed changes
