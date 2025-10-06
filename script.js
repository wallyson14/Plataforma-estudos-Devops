function showModule(id) {
  const modules = document.querySelectorAll('.module');
  modules.forEach((mod) => mod.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
