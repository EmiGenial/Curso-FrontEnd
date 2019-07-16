(async function load() {
    async function getData(url) {
       const response = await fetch(url);
       const data = await response.json();
       return data;
    };
  
    // Consumimos apis mediante funciones asincronas:
    const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action');
    // const dramaList = await getData('https://yts.lt/api/v2/list_movies.json?genre=drama');
    // const animationList = await getData('https://yts.lt/api/v2/list_movies.json?genre=animation');
    // console.log(actionList, dramaList, animationList);
    // console.log("El programa async sigue !");
    
    // Generamos un template con datos dinamicos traidos de la api.
    function videoItemTemplate(movie){
      return(
        `
          <div class="PlaylistItem-image">
            <img src="${movie.medium_cover_image}">
            <h4 class="PlaylistItem-title"> 
            ${movie.title}
          </h4>
          </div>
        
        `
      )
    }
    function addEventClick($element) {
      $element.addEventListener('click', () => {
        alert('click')
        // showModal()
      })
    }
    const $actionContainer = document.querySelector('.action-container');
    // const $actionContainer = document.getElementsByClassName('.action');
    actionList.data.movies.forEach((movie) => {
        const HTMLString = videoItemTemplate(movie);
        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = HTMLString;
        $actionContainer.append(html.body.children[0]);
        addEventClick(html)
        // console.log(HTMLString);
    })
})();
