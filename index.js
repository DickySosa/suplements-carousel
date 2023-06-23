/* Divisions of the website */
const introduction = document.querySelector('.introduction');
const protein = document.querySelector('.protein');
const creatine = document.querySelector('.creatine');
const omega = document.querySelector('.omega-3');
const multivitamin = document.querySelector('.multivitamin');
const caffeine = document.querySelector('.caffeine');
/* Buttons */
const previous = document.querySelector('.previous-button');
const next = document.querySelector('.next-button');

let index = 0;

previous.addEventListener('click', () => {
console.log(index)
showGei('previous')
})

next.addEventListener('click', () => {
console.log(index)
showGei('next')
})


     const displayList = [
        introduction,
        protein,
        creatine,
        omega,
        multivitamin,
        caffeine,
     ]

     displayList.forEach((element,index) => {
      if(index > 0){
        element.classList.add('inactive')};
     })

     displayList[0].classList.add('active');

     const showGei = (action) => {
        let currentElement = displayList[index];
        

        if (action === 'previous' && index === 0){
         return
        } 
        if (action === 'next' && index === displayList.length - 1){
         return
        } 

        if (action === 'next'){
            currentElement.classList.remove('active');
            currentElement.classList.add('inactive');

            let nextElement = displayList[index + 1];
            nextElement.classList.remove('inactive');
            nextElement.classList.add('active');
            index++;
        }

        if (action === 'previous'){
            currentElement.classList.remove('active');
            currentElement.classList.add('inactive');

            let previousElement = displayList[index - 1];
            previousElement.classList.remove('inactive');
            previousElement.classList.add('active');
            index--;
        }



     }

     

console.log('<-----Connected to server ----->')
