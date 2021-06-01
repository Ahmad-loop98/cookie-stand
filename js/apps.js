'use strict';


let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];




function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  let cont = document.getElementById('container');
 
const seattle = {
    locationName:'Seattle',
    minNumOfCust:23,
    maxNumOfCust:65,
    avgPerSale:6.3,
    customersHourly:[],
    cookiesHourly:[],
    total:0,
    randomNumOfCust:function(){
          for(let i = 0; i< hours.length;i++){
               
                this.customersHourly.push(randomVal(this.minNumOfCust,this.maxNumOfCust));
             
          }  
    },
    randomNumOfCookies:function(){
        for(let i = 0 ; i < hours.length; i++){
            this.cookiesHourly.push(this.customersHourly[i] * Math.ceil(this.avgPerSale));
                  
            this.total += this.cookiesHourly[i];
                            
        }
    },
    render:function(){
        let cityName = document.createElement('h2');
        cont.appendChild(cityName);
        cityName.textContent = this.locationName;

        let unOrderedList = document.createElement('ul');   
        cont.appendChild(unOrderedList);

        for(let i = 0 ; i < hours.length; i++){
            let listItems = document.createElement('li');
            unOrderedList.appendChild(listItems);
            listItems.textContent = `${hours[i]} : ${this.cookiesHourly[i]} cookies`;
        }

        let dailyTotal = document.createElement('li');
        unOrderedList.appendChild(dailyTotal);
        dailyTotal.textContent = `Total : ${this.total} cookies`;
    }


};

seattle.randomNumOfCust();
seattle.randomNumOfCookies();
seattle.render();


const tokyo = {
    locationName:'Tokyo',
    minNumOfCust:3,
    maxNumOfCust:24,
    avgPerSale:1.2,
    customersHourly:[],
    cookiesHourly:[],
    total:0,
    calcRandomNumOfCust:function(){
          for(let i = 0; i< hours.length;i++){
              
                this.customersHourly.push(randomVal(this.minNumOfCust,this.maxNumOfCust));
             
          }  
    },
    calcRandomNumOfCookies:function(){
        for(let i = 0 ; i < hours.length; i++){
            this.cookiesHourly.push(this.customersHourly[i] * Math.ceil(this.avgPerSale));
                  
            this.total = this.total + this.cookiesHourly[i];
                          
        }
    },
    render:function(){
        let locationName = document.createElement('h2');
        cont.appendChild(locationName);
        locationName.textContent = this.locationName;

        let unOrderedList = document.createElement('ul');   
        cont.appendChild(unOrderedList);

        for(let i = 0 ; i < hours.length; i++){
            let listItems = document.createElement('li');
            unOrderedList.appendChild(listItems);
            listItems.textContent = `${hours[i]} : ${this.cookiesHourly[i]} cookies`;
        }

        let dailyTotal = document.createElement('li');
        unOrderedList.appendChild(dailyTotal);
        dailyTotal.textContent = `Total : ${this.total} cookies`;
    }


};

tokyo.calcRandomNumOfCust();
tokyo.calcRandomNumOfCookies();
tokyo.render();

const dubai = {
    locationName:'dubai',
    minNumOfCust:3,
    maxNumOfCust:24,
    avgPerSale:1.2,
    customersHourly:[],
    cookiesHourly:[],
    total:0,
    calcRandomNumOfCust:function(){
          for(let i = 0; i< hours.length;i++){
              
                this.customersHourly.push(randomVal(this.minNumOfCust,this.maxNumOfCust));
             
          }  
    },
    calcRandomNumOfCookies:function(){
        for(let i = 0 ; i < hours.length; i++){
            this.cookiesHourly.push(this.customersHourly[i] * Math.ceil(this.avgPerSale));
                  
            this.total = this.total + this.cookiesHourly[i];
                          
        }
    },
    render:function(){
        let locationName = document.createElement('h2');
        cont.appendChild(locationName);
        locationName.textContent = this.locationName;

        let unOrderedList = document.createElement('ul');   
        cont.appendChild(unOrderedList);

        for(let i = 0 ; i < hours.length; i++){
            let listItems = document.createElement('li');
            unOrderedList.appendChild(listItems);
            listItems.textContent = `${hours[i]} : ${this.cookiesHourly[i]} cookies`;
        }

        let dailyTotal = document.createElement('li');
        unOrderedList.appendChild(dailyTotal);
        dailyTotal.textContent = `Total : ${this.total} cookies`;
    }


};

dubai.calcRandomNumOfCust();
dubai.calcRandomNumOfCookies();
dubai.render();

const paris = {
    locationName:'paris',
    minNumOfCust:3,
    maxNumOfCust:24,
    avgPerSale:1.2,
    customersHourly:[],
    cookiesHourly:[],
    total:0,
    calcRandomNumOfCust:function(){
          for(let i = 0; i< hours.length;i++){
              
                this.customersHourly.push(randomVal(this.minNumOfCust,this.maxNumOfCust));
             
          }  
    },
    calcRandomNumOfCookies:function(){
        for(let i = 0 ; i < hours.length; i++){
            this.cookiesHourly.push(this.customersHourly[i] * Math.ceil(this.avgPerSale));
                  
            this.total = this.total + this.cookiesHourly[i];
                          
        }
    },
    render:function(){
        let locationName = document.createElement('h2');
        cont.appendChild(locationName);
        locationName.textContent = this.locationName;

        let unOrderedList = document.createElement('ul');   
        cont.appendChild(unOrderedList);

        for(let i = 0 ; i < hours.length; i++){
            let listItems = document.createElement('li');
            unOrderedList.appendChild(listItems);
            listItems.textContent = `${hours[i]} : ${this.cookiesHourly[i]} cookies`;
        }

        let dailyTotal = document.createElement('li');
        unOrderedList.appendChild(dailyTotal);
        dailyTotal.textContent = `Total : ${this.total} cookies`;
    }


};

paris.calcRandomNumOfCust();
paris.calcRandomNumOfCookies();
paris.render();

const lima = {
    locationName:'lima',
    minNumOfCust:3,
    maxNumOfCust:24,
    avgPerSale:1.2,
    customersHourly:[],
    cookiesHourly:[],
    total:0,
    calcRandomNumOfCust:function(){
          for(let i = 0; i< hours.length;i++){
              
                this.customersHourly.push(randomVal(this.minNumOfCust,this.maxNumOfCust));
             
          }  
    },
    calcRandomNumOfCookies:function(){
        for(let i = 0 ; i < hours.length; i++){
            this.cookiesHourly.push(this.customersHourly[i] * Math.ceil(this.avgPerSale));
                  
            this.total = this.total + this.cookiesHourly[i];
                          
        }
    },
    render:function(){
        let locationName = document.createElement('h2');
        cont.appendChild(locationName);
        locationName.textContent = this.locationName;

        let unOrderedList = document.createElement('ul');   
        cont.appendChild(unOrderedList);

        for(let i = 0 ; i < hours.length; i++){
            let listItems = document.createElement('li');
            unOrderedList.appendChild(listItems);
            listItems.textContent = `${hours[i]} : ${this.cookiesHourly[i]} cookies`;
        }

        let dailyTotal = document.createElement('li');
        unOrderedList.appendChild(dailyTotal);
        dailyTotal.textContent = `Total : ${this.total} cookies`;
    }


};

lima.calcRandomNumOfCust();
lima.calcRandomNumOfCookies();
lima.render();