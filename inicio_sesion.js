document.getElementById('formularioInicioSesion').addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    const nombreUsuarioEntrada = document.getElementById('nombreUsuario').value;
    const contrasenaEntrada = document.getElementById('contrasena').value;

  
    const nombreUsuarioCorrecto = 'Mathias'; 
    const contrasenaCorrecta = '12345'; 

    if (nombreUsuarioEntrada === nombreUsuarioCorrecto && contrasenaEntrada === contrasenaCorrecta) {
        window.location.href = 'pagina_principal.html'; 
    } else {
        alert('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.'); 
    }
});