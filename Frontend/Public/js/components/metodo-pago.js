document.addEventListener('DOMContentLoaded', function () {
  const contenedor = document.querySelector('#selector-pago-container'); 

  if (contenedor) {
    fetch('./views/metodo-pago.html') 
      .then(response => response.text())
      .then(data => {
        contenedor.innerHTML = data;
      })
      .catch(error => console.error('Error cargando metodo-pago:', error));
  }
});