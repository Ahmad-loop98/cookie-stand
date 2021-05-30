'use strict'
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const seatlle = {
    min:65,
    max:23,
    avg:6.3,
    location,
    let total:0,

};

console.log(seatlle,min);
console.log(seatlle,max);
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) +min;

    
}

hourlySales :function () {
    for (let i=0;i<hours.length;i++){
        let numOfCookies= Math.floor(seattle.randomCust() *seattle.avg);
        seattle.hourlySales.push(numOfCookies);
        seattle.total += numOfCookies;
    }
    },

    render :function(){
let list =document.createElement('container');
container.appendChild(list);

    }
seatlle.render();