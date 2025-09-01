document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const output = document.getElementById('output');
    if (fileInput.files.length === 0) {
        output.textContent = 'Please select a file to upload.';
        output.style.color = 'red';
        return;
    }
    const file = fileInput.files[0];
    output.textContent = `File "${file.name}" selected. (Demo: No actual upload)`;
    output.style.color = '#0078d7';
});
