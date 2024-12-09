const users = [];

// Cambiar a modo nocturno/claro
document.getElementById('modoNocturno').addEventListener('click', function() {
  document.body.classList.toggle('night-mode');
  this.textContent = document.body.classList.contains('night-mode') ? '☀️' : '🌙';
});

// Función para registrar usuario
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  // Recoger los valores ingresados
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
  const sexo = document.getElementById('sexo').value;
  const usuario = document.getElementById('usuario').value;
  const email = document.getElementById('email').value;

  // Crear un arreglo para los campos faltantes
  let camposFaltantes = [];

  // Verificar si cada campo está vacío y agregarlo al arreglo de campos faltantes
  if (!nombre) camposFaltantes.push('Nombre');
  if (!apellido) camposFaltantes.push('Apellido');
  if (!fechaNacimiento) camposFaltantes.push('Fecha de Nacimiento');
  if (!sexo) camposFaltantes.push('Sexo');
  if (!usuario) camposFaltantes.push('Usuario');
  if (!email) camposFaltantes.push('Email');

  // Si hay campos faltantes, mostrar alerta y no continuar
  if (camposFaltantes.length > 0) {
    alert('Por favor, completa los siguientes campos: ' + camposFaltantes.join(', '));
    return; // No continuar si hay campos vacíos
  }

  // Agregar el usuario al array de usuarios
  users.push({ nombre, apellido, fechaNacimiento, sexo, usuario, email });

  // Mostrar los datos registrados en la pantalla de confirmación
  document.getElementById('conf-nombre').textContent = nombre;
  document.getElementById('conf-apellido').textContent = apellido;
  document.getElementById('conf-fecha').textContent = fechaNacimiento;
  document.getElementById('conf-sexo').textContent = sexo;
  document.getElementById('conf-usuario').textContent = usuario;
  document.getElementById('conf-email').textContent = email;

  // Cambiar a la pantalla de confirmación
  document.getElementById('register-screen').style.display = 'none';
  document.getElementById('confirmation-screen').style.display = 'block';
});

// Botón para ir a la pantalla de inicio de sesión
document.getElementById('goToLogin').addEventListener('click', function() {
  document.getElementById('confirmation-screen').style.display = 'none';
  document.getElementById('login-screen').style.display = 'block';
});

// Botón para borrar todos los usuarios registrados
document.getElementById('deleteUsers').addEventListener('click', function() {
  if (confirm('¿Estás seguro de que deseas borrar todos los usuarios registrados?')) {
    users.length = 0; // Vaciar el array de usuarios
    document.querySelector('#userTable tbody').innerHTML = ''; // Limpiar la tabla de la pantalla de usuarios
    alert('Todos los usuarios han sido borrados.');
  }
});

// Botón para restablecer todo
document.getElementById('resetForm').addEventListener('click', function() {
  document.getElementById('registrationForm').reset(); // Restablecer el formulario
});
