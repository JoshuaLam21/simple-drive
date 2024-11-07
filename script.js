const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');
const fileList = document.getElementById('fileList');

let files = [];

// Load existing files from GitHub (JSON file)
fetch('files.json')
    .then(response => response.json())
    .then(data => {
        files = data;
        displayFiles();
    });

uploadButton.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (file) {
        files.push({ name: file.name, url: URL.createObjectURL(file) });
        displayFiles();
        alert('File uploaded (not really, just a demo)');
    }
});

function displayFiles() {
    fileList.innerHTML = '';
    files.forEach(file => {
        const link = document.createElement('a');
        link.href = file.url;
        link.download = file.name;
        link.textContent = file.name;
        fileList.appendChild(link);
        fileList.appendChild(document.createElement('br'));
    });
}