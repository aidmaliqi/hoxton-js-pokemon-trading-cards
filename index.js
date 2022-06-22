/*Description
We're going to create a Pokemon Trading Cards show page. To achieve this, you'll use JS to dynamically create all the elements on the page!


- Make sure you check and understand the data that is given to you! 
- Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example in the templates folder
- Use the exact CSS classes you see in the example HTML to obtain the same style for each card
- The cards should be nested inside <ul class="cards"></ul>. Otherwise the styles will break.
- Use the official-artwork object key as the images for the cards. The images are all inside of the sprites key, in each pokemon object
- Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

Tips
- Use functions to your advantage. Break each card into smaller parts, and think how you can turn them into functions.
- Once you've got a card, think of a way to programmatically create all the others
- Make sure you understand well the data structure before starting to create the cards

Challenge
Add an extra section to each card that contains information about which games each pokemon appeared in.

Challenge 2
See if you can find a way to toggle between the different images of each card! (this is a hard one! You might want to use google...)*/



// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data);

function createCard (dataEl) {
    let liEl = document.createElement("li")
    liEl.className = 'card'

    let h2El = document.createElement('h2')
    h2El.className = 'card--title'
    h2El.textContent = dataEl.name

    let imgEl = document.createElement('img')
    imgEl.width = 256
    imgEl.className = 'card--img'
    imgEl.src = dataEl.sprites.other['official-artwork']['front_default']

    let ulEl = document.createElement('ul')
    ulEl.className = 'card--text'

    liEl.append(h2El , imgEl , ulEl)

    let mainUl = document.querySelector('.cards')
    mainUl.append(liEl)
    
    for (let iterator of dataEl.stats) {
        let liEl1 = document.createElement('li')
        liEl1.textContent = `${iterator.stat.name}: ${iterator.base_stat}`
        ulEl.appendChild(liEl1)
    }

}
for (let dataEl of data) {    
    createCard(dataEl)
    
}

/*function assignText (textOfLi) {
    let textLi = document.createElement('li')
    textLi.textContent = `HP: ${textOfLi.stats['base_stat']}`
    
    document.querySelector('.card--text').append(textLi)

}*/


/*for (const textOfLi of data) {
    assignText(textOfLi)
}*/