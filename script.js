function execCmd(command) {
    document.execCommand(command, false, null);
}

function toggleCommand(button, command) {
    document.execCommand(command, false, null);
    button.classList.toggle("active");
}

function changeFontSize(size) {
    document.execCommand('fontSize', false, size);
}

function changeFont(font) {
    document.execCommand('fontName', false, font);
}

function toggleCase() {
    let selection = window.getSelection();
    if (!selection.rangeCount) return;
    let range = selection.getRangeAt(0);
    let text = range.toString();
    let newText = /[a-z]/.test(text) ? text.toUpperCase() : text.toLowerCase();
    let span = document.createElement("span");
    span.innerHTML = newText;
    range.deleteContents();
    range.insertNode(span);
}

function highlightEditor(editor) {
    editor.style.backgroundColor = "#3a3a3a";
    editor.style.border = "2px solid #007BFF";
}

function unhighlightEditor(editor) {
    editor.style.backgroundColor = "#2d2d2d";
    editor.style.border = "1px solid #444";
}

document.addEventListener('selectionchange', () => {
    const buttons = document.querySelectorAll('.toolbar button');
    buttons.forEach(button => {
        const command = button.getAttribute('onclick').match(/'(.*?)'/)[1];
        if (document.queryCommandState(command)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
});
