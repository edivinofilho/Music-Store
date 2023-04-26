const changeTheme = () => {
    const button = document.querySelector('.header__dark-mode');
    const html = document.querySelector('html');
    const buttonImage = document.querySelector('.header__dark-mode > img')
    const modePreference = JSON.parse(localStorage.getItem('dark__mode'));

    if(modePreference) {
        buttonImage.src = './src/assets/img/sun.png';
        buttonImage.alt = 'sun image';
        html.classList.add('dark__mode');

    } else { 
        buttonImage.src = './src/assets/img/moon.png';
        buttonImage.alt = 'moon image';
        html.classList.remove('dark__mode');
    }
    
    button.addEventListener('click', () => {
        html.classList.toggle('dark__mode');

        if(html.classList.contains('dark__mode')){
            localStorage.setItem('dark__mode', true);
            buttonImage.src = './src/assets/img/sun.png';
            buttonImage.alt = 'sun image';

        } else {
            localStorage.setItem('dark__mode', false);
            buttonImage.src = './src/assets/img/moon.png';
            buttonImage.alt = 'moon image';
            
        }
    })
}