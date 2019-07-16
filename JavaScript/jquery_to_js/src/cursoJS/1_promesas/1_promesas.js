// -------------- Promesas::
const getUserAll = new Promise(function(todoBien, todoMal){
    // simulamos el retardo de una API:
    setTimeout(function(){
      // luego de 3 segundos
    //   todoMal('se acabó el tiempo! ... Api 1 no responde!');
    todoBien('Todo Bien!')
    }, 5000)
  })

const getUser = new Promise(function(todoBien, todoMal){
  // simulamos el retardo de una API:
  setTimeout(function(){
    // luego de 3 segundos
    // todoMal('se acabó el tiempo! ... Api 2 no responde!');
    todoBien('OK OK')
  }, 3000)
})

  
  // ----------- Arreglo de promesas:: sirve para manejar muchas promesas
Promise.all([
  getUser,
  getUserAll,
])
  .then(function(message){
      console.log(message);
      
  })
  .catch(function(message){
    console.log(message);
  })