// --------------- AJAX con JQuery:

// $.ajax('https://randomuser.me/api/', {
//     method: 'GET', /*Metodo HTTP usado: GET, POST, etc.*/
  
//     success: function(data) { /*Función que se ejecuta cuando hemos recibido bien los datos*/
//     	console.log(data) 
//     },
    
//     error: function(error) { /* Función para el caso de un error */
//         console.log(error)
//   }
// })

// -------------- AJAX con vanillaJS: Sin usar Jquery.
fetch('https://randomuser.me/api/')
  .then(function (response) {
    return response.json()
  })
  .then(function (user) {
    console.log('user:', user.results[0].name.first)
  })
  .catch(function() {
    console.log('algo falló')
  });

