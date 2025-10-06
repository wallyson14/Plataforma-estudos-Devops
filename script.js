function showModule(id) {
  const modules = document.querySelectorAll('.module');
  modules.forEach((mod) => mod.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function updateProgress() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const total = checkboxes.length;
  let completed = 0;

  checkboxes.forEach((box) => {
    if (box.checked) completed++;
  });

  const percent = Math.round((completed / total) * 100);
  document.getElementById('progress').style.width = percent + '%';
  document.getElementById('progress-text').textContent = percent + '%';
}

function saveProgress() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((box) => {
    localStorage.setItem(box.dataset.id, box.checked);
  });
}

function loadProgress() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((box) => {
    const saved = localStorage.getItem(box.dataset.id);
    if (saved === 'true') box.checked = true;
  });
  updateProgress();
}

document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((box) => {
    box.addEventListener('change', () => {
      saveProgress();
      updateProgress();
    });
  });
});
