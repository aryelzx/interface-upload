const dropArea = document.querySelector('.drag-files');

dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropArea.classList.add('dragover');
});

dropArea.addEventListener('dragleave', (e) => {
  e.preventDefault();
  dropArea.classList.remove('dragover');
});