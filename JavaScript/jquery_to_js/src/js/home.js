// console.log('hola mundo!');
// const noCambia = "Leonidas";

// let cambia = "@LeonidasEsteban"

// function cambiarNombre(nuevoNombre) {
//   cambia = nuevoNombre
// }

// const getUserAll = new Promise(function(todoBien, todoMal) {
//   // llamar a un api
//   setTimeout(function() {
//     // luego de 3 segundos
//     todoBien('se acabÃ³ el tiempo');
//   }, 5000)
// })

// const getUser = new Promise(function(todoBien, todoMal) {
//   // llamar a un api
//   setTimeout(function() {
//     // luego de 3 segundos
//     todoBien('se acabÃ³ el tiempo 3');
//   }, 3000)
// })

// getUser
//   .then(function() {
//     console.log('todo estÃ¡ bien en la vida')
//   })
//   .catch(function(message) {
//     console.log(message)
//   })

// Promise.race([
//   getUser,
//   getUserAll,
// ])
// .then(function(message) {
//   console.log(message);
// })
// .catch(function(message) {
//   console.log(message)
// })



// $.ajax('https://randomuser.me/api/sdfdsfdsfs', {
//   method: 'GET',
//   success: function(data) {
//     console.log(data)
//   },
//   error: function(error) {
//     console.log(error)
//   }
// })

// fetch('https://randomuser.me/api/dsfdsfsd')
//   .then(function (response) {
//     // console.log(response)
//     return response.json()
//   })
//   .then(function (user) {
//     console.log('user', user.results[0].name.first)
//   })
//   .catch(function() {
//     console.log('algo fallÃ³')
//   });


(async function load() {
  // await
  // action
  // terror
  // animation
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json()
    return data;
  }
  const $form = document.getElementById('form');
  const $home = document.getElementById('home');

  $form.addEventListener('submit', (event) => {
     event.preventDefault();
     $home.classList.add('search-active')
  } )
  
  const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action')
  const dramaList = await getData('https://yts.lt/api/v2/list_movies.json?genre=drama')
  const animationList = await getData('https://yts.lt/api/v2/list_movies.json?genre=animation')
  console.log(actionList, dramaList, animationList)
  function videoItemTemplate(movie) {
    return (
      `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    )
  }
  function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }
  function addEventClick($element) {
    $element.addEventListener('click', () => {
      // alert('click')
      showModal()
    })
  }
  function renderMovieList(list, $container) {
    // actionList.data.movies
    $container.children[0].remove(); // Borra el gif de "loader"
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      addEventClick(movieElement);
    })
  }
  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList.data.movies, $actionContainer);

  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList.data.movies, $dramaContainer);

  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList.data.movies, $animationContainer);


  const $featuringContainer = document.getElementById('#featuring');
  
  


  // const $home = $('.home .list #item');
  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

  const $modalTitle = $modal.querySelector('h1');
  const $modalImage = $modal.querySelector('img');
  const $modalDescription = $modal.querySelector('p');

  // Abrir ventana Modal
  function showModal(){
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
    // $modal.style.border = '1px solid red';
  }

  // Cerrar ventana modal con el boton
  $hideModal.addEventListener('click', hideModal);
  function hideModal(){
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }


})();