const filterByRange = (array) => {
    const inputRange = document.querySelector('.slider');

    let price = document.querySelector('.section-filter-by-price__price-range');

    inputRange.addEventListener('input', () => {
        const percentageColor = inputRange.value;
        const color = 'linear-gradient(90deg, var(--color-brand-1)' +  percentageColor + '%, var(--color-grey-3)' + percentageColor +'%)';

        inputRange.style.background = color;

        price.innerText = `Até R$ ${inputRange.value},00`;

        const filteredProduct = array.filter(product => product.price <= inputRange.value)

        createCards(filteredProduct);
        
    })
}

const filterCardsByTag = (array, array2) => {
    const buttons = document.querySelectorAll('.tags__tag')
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('selected'));

            button.classList.add('selected');

            if(button.innerText === 'Todos'){
                createCards(products);
            } else {
                let index = array2.indexOf(button.innerText)
                const product = array.filter(element => {
                    if(element.category === index){
                        return element;
                    }

                })
                createCards(product);
            }
        })
    })

}
