(async function load() {
    async function getData(url) {
        const response = await fetch(url);
        const data = await response.json()
        return data;
    }

    const list = await getData('https://rickandmortyapi.com/api/character/?page=19');
    const $actionContainer = document.querySelector('.container')
    debugger

    function template(person){
        return(
            `<div class="card">
                <img src=${person.image}>
                <div class="info">
                     <h3><b>Name:</b> ${person.name}</h3>
                     <hr>
                     <p><b>Species:</b> ${person.species}</p>
                     <hr>
                     <p><b>Gender:</b> ${person.gender}</p>
                     <hr>
                     <p><b>Planet:</b> ${person.origin.name}</p>

                </div>
             </div>
            `
        )
    }

    list.results.forEach(person => {
        const HTMLString = template(person);
        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = HTMLString;
        $actionContainer.append(html.body.children[0]);
    })

})()

// Foreach()
// var array1 = ['a', 'b', 'c'];

// array1.forEach(function(element) {
//   console.log(element);
// });