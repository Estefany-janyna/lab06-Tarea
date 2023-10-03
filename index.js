// Función para determinar la cantidad de días hasta Navidad
// function daysUntilChristmas() {
//     const today = new Date();
//     const christmas = new Date(today.getFullYear(), 11, 25); // 11 representa diciembre
//     if (today > christmas) {
//       christmas.setFullYear(today.getFullYear() + 1);
//     }
//     const timeDiff = christmas - today;
//     const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
//     return daysDiff;
//   }
// console.log('---------------------------------------------')
// console.log('Los dias que faltan para navidad: ', daysUntilChristmas())
// console.log('---------------------------------------------')

  
  // Función para calcular la edad a partir de la fecha de nacimiento
//   function calculateAge(birthDate) {
//     const today = new Date();
//     const birth = new Date(birthDate);
//     let age = today.getFullYear() - birth.getFullYear();
//     const monthDiff = today.getMonth() - birth.getMonth();
  
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
//       age--;
//     }
//     return age;
//   }
//   const birthDate = '2002-08-20'; // Fecha de nacimiento en formato YYYY-MM-DD
//   const age = calculateAge(birthDate);
//   console.log(`La edad es ${age} años.`);
  
  
// Supongamos que tienes un campo de entrada para ingresar un número con el id 'numberInput' y un elemento HTML con el id 'resultMessage' para mostrar el resultado.

// index.js

// Esperar a que se cargue el DOM antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    const validationForm = document.getElementById('validationForm');
  
    validationForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Evitar que se envíe el formulario
  
      // Obtener los valores de los campos
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const birthdate = document.getElementById('birthdate').value;
  
      // Mostrar los valores en la consola
      console.log('Nombre:', name);
      console.log('Correo Electrónico:', email);
      console.log('Fecha de Nacimiento:', birthdate);
    });
  });
  
  