// scripts.js
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Evitar el envío del formulario por defecto
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;

    // Validar nombre
    if (!validateName(firstName)) {
        alert('El nombre solo debe contener letras y espacios.');
        return;  // Detener la ejecución si falla la validación
    }

    // Validar apellidos
    if (!validateName(lastName)) {
        alert('El apellido solo debe contener letras y espacios.');
        return;  // Detener la ejecución si falla la validación
    }

    // Validar email
    if (!validateEmail(email)) {
        alert('El correo electrónico no es válido.\n\nEjemplo de correo valido: ejemplo@gmail.com');
        return;  // Detener la ejecución si falla la validación
    }

    // Validar contraseña
    if (!validatePassword(password)) {
        alert('La contraseña no cumple con los requisitos.\n\n1. Longitud Mínima de 8 Caracteres\n2. Contener al Menos una Letra\n3. Contener al Menos un Número\n4. Contener al Menos un Símbolo Especial (@$!%*?&)');
        return;  // Detener la ejecución si falla la validación
    }

    // Validar número de teléfono
    if (!validatePhone(phone)) {
        alert('El número de teléfono debe contener exactamente 10 dígitos.');
        return;  // Detener la ejecución si falla la validación
    }

    // Si todas las validaciones pasan
    alert('Registro exitoso.');
});

// Validación de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!validateEmail(email)) {
        alert('El correo electrónico no es válido.');
        return;
    }

    alert('Inicio de sesión exitoso.');
});

// Función para validar correos electrónicos
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para validar contraseñas
function validatePassword(password) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

// Función para validar nombres y apellidos (solo letras y espacios)
function validateName(name) {
    const regex = /^[a-zA-Z\s]+$/; // Solo letras y espacios
    return regex.test(name);
}

// Función para validar número de teléfono (solo 10 dígitos)
function validatePhone(phone) {
    const regex = /^\d{10}$/; // Exactamente 10 dígitos
    return regex.test(phone);
}

// Evitar que se pueda copiar y pegar en los campos de los formularios
const fields = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"]');
fields.forEach(field => {
    field.addEventListener('paste', function(e) {
        e.preventDefault();
        alert('No se permite pegar texto en este campo.');
    });
});
