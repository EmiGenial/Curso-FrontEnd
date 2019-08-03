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
            `
              <img src="${person.image}">
            `
        )
    }

    list.results.forEach(person => {
        const HTMLString = template(person);
        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = HTMLString;
        // $actionContainer.append(html.body.children);
        console.log(person.image)
        console.log(person.name)
        console.log(person.species)
        console.log(person.gender)
        console.log(person.origin.name)
        console.log(person.status)
    })

})()

// Foreach()
// var array1 = ['a', 'b', 'c'];

// array1.forEach(function(element) {
//   console.log(element);
// });