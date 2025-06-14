document.addEventListener('DOMContentLoaded', function() {
    const paramsURL = new URLSearchParams(window.location.search);
    const productoSeleccionado = paramsURL.get('producto');

    if (productoSeleccionado) {
        document.getElementById('seleccionProducto').value = decodeURIComponent(productoSeleccionado);
    }
});

document.getElementById('formularioCompra').addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    const producto = document.getElementById('seleccionProducto').value;
    const cantidad = document.getElementById('cantidad').value;

    if (producto && cantidad > 0) {
       
        alert(`Compraste ${cantidad} unidades de ${producto}.`);
    } else {
        alert('Por favor, selecciona un producto y una cantidad válida.');
    }
});