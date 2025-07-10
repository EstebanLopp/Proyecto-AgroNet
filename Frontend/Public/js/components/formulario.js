document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedor-componente');

  if (contenedor) {
    fetch('./views/formulario.html')
      .then(res => res.text())
      .then(html => {
        contenedor.innerHTML = html;
      })
      .catch(err => console.error('Error al cargar el formulario:', err));
  }
});