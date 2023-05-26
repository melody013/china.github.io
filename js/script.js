const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const bg = document.querySelector('.general');
const title = document.querySelector('h1');
const textCard = document.querySelector('p');
const colorTitle = '#FFA500';

card1.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/pekin.jpg')";
    title.innerText = 'Pekín';
    textCard.innerText = 'Pekín, la enorme capital de China, tiene una historia que se remonta a 3 milenios. Aun así, es conocida tanto por su arquitectura moderna como por sus sitios antiguos, como el complejo de la Ciudad Prohibida. ';
});
card2.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/restaurante chino.jfif')";
    title.innerText = 'Restaurante Chino gran China';
    textCard.innerText = ' Ofrece platos típicos de la cocina china, con gran variedad de sabores y de ingredientes, del mar y la tierra. Producto de tradiciones y recetas milenarias'
})
card3.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/p1.jfif')";
    title.innerText = 'Xian';
    textCard.innerText = 'Es una gran ciudad y capital de la provincia Shaanxi, en China central. Fue conocida como Changan (Paz Eterna) y marca el extremo oriental de la Ruta de la Seda, además de haber albergado las casas reales de las dinastías Zhou, Qin, Han y Tang.';
})
card4.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/p2.jpg')";
    title.innerText = 'Suzhou';

    textCard.innerText = 'Es la ciudad al oeste de Shanghái, es conocida por sus canales, puentes y jardines clásicos. El Jardín del Administrador Humilde data del año 1513 y cuenta con puentes en zigzag que conectan piscinas e islas.';
})

/* MENU MOBILE */

const menuMobile = document.querySelector('.menu-mobile');
const links = document.querySelector('.links');
const linksItens = document.querySelectorAll('.links a');

menuMobile.addEventListener('click', () => {
    links.classList.toggle('active');
});

/* FECHA O MENU AO CLICAR NO LINK */
linksItens.forEach((linksItem) => {
    linksItem.addEventListener('click', () => {
        links.classList.toggle('active');
    })
})