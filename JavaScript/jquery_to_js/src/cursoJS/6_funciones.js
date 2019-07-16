// ------------------ Funciones() 

function videoItemTemplate(src, title){
    return(
      `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${src}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${title}
        </h4>
      </div>`
    )
  }
  console.log(videoItemTemplate('images/bitcoin', 'bitcoin' ));