const createTags = (array) => {
    const tagsContainer = document.querySelector('.tags__container');

    tagsContainer.innerHTML = '';

    array.forEach(element => {
        const tag = document.createElement('li');

        tag.innerText = element;
        tag.classList.add('tags__tag');
        tagsContainer.appendChild(tag)
    });

    filterCardsByTag(products, categories);
} 

const createCards = (array) => {
    const cardsContainer = document.querySelector('.cards__container');

    cardsContainer.innerHTML = '';

    array.forEach(element => {
        const card = document.createElement('li');
        card.classList.add('cards__card');

        const image = document.createElement('img');
        image.src = element.img;   
        image.alt = element.band;
        image.classList.add('cards_img');

        const description = document.createElement('div');
        description.classList.add('cards__description');

        const bandNameYearContainer = document.createElement('span');

        const bandName = document.createElement('small');
        bandName.classList.add('cards__band-name');
        bandName.innerText = element.band;

        const year = document.createElement('small');
        year.classList.add('cards__year');
        year.innerText = element.year;

        const title = document.createElement('h2');
        title.innerText = element.title;

        const priceAndButtonContainer = document.createElement('div');
        priceAndButtonContainer.classList.add('cards__price');

        const price = document.createElement('p');
        price.innerText = `R$ ${element.price.toFixed(2).replace('.', ',')}`;

        const button = document.createElement('button');
        button.innerText = 'Comprar';


        priceAndButtonContainer.append(price, button);

        bandNameYearContainer.append(bandName, year);
        
        description.append(bandNameYearContainer, title, priceAndButtonContainer);

        card.append(image, description);

        return cardsContainer.appendChild(card);
    })

} 

createTags(categories);
createCards(products);
filterByRange(products);
changeTheme();