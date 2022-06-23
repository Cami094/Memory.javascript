
const section = document.querySelector ('section')
const card = document.querySelectorAll('.card');
let counter = 0
let cardPair = []

const getData = () => [
    {imgSrc:"./img/Django.png", name:"Django" },
    { imgSrc:"./img/jacky.png", name:"jacky"},
    { imgSrc:"./img/jhonny.png",name:"jhonny"},
    { imgSrc: "./img/kill bill.png", name: "kill bill"},
    { imgSrc:"./img/leo.png", name: "leo"},
    {imgSrc:"./img/nurse.png", name:"nurse"},
    {imgSrc:"./img/pulp.png", name:"pulp"},
    {imgSrc:"./img/tarantino.png", name:"tarantino"},
    {imgSrc:"./img/Django.png", name:"Django" },
    { imgSrc:"./img/jacky.png", name:"jacky"},
    { imgSrc:"./img/jhonny.png",name:"jhonny"},
    { imgSrc: "./img/kill bill.png", name: "kill bill"},
    { imgSrc:"./img/leo.png", name: "leo"},
    {imgSrc:"./img/nurse.png", name:"nurse"},
    {imgSrc:"./img/pulp.png", name:"pulp"},
    {imgSrc:"./img/tarantino.png", name:"tarantino"},
];



const random = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
return cardData

};


const carteGe = () => {
    const cardData = random ()
        cardData.forEach((item, index)=> {
        const card = document.createElement ("div");
        const fronte = document.createElement('img');
        const detras = document.createElement ('div');
        card.classList = 'card';
        fronte.classList = 'fronte';
        detras.classList = 'detras';   
    
        fronte.src = item.imgSrc;
      card.setAttribute('name', item.name);

        section.appendChild(card);
        card.appendChild(fronte);
        card.appendChild(detras);

     card.addEventListener('click', (e) =>{
         
        card.classList.toggle("toggleCard"); 
        checkCard(e)
     });

        });
    
};

const checkCard = (e) => {
    const clickedcard = e.target;
    clickedcard.classList.add('flipped');
    const flippcard = document.querySelectorAll('.flipped');


if (flippcard.length === 2){
    if (flippcard[0].getAttribute('name') === 
    flippcard[1].getAttribute('name'))
{
console.log("match");
flippcard.forEach(card => {
    card.classList.remove("flipped");
    card.style.pointerEvents = "none"
})
} else {
    console.log ("wrong");
    flippcard.forEach(card =>{
        card.classList.remove("flipped");
        card.classList.remove ("toggleCard");
        setTimeout(() => card.classList.remove ("toggleCard"),1000 );

    });
}
}
};



carteGe();
