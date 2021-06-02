
  'use strict';



  let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  
  
  
  
  function randomVal(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let cont = document.getElementById('container');
  
  let cont1 = document.getElementById('container');
  let table = document.createElement('table');
  cont.appendChild(table);
  
  function getHeaderRow() {
      let headerRow = document.createElement('tr');
      table.appendChild(headerRow);
      let th = document.createElement('th');
      headerRow.appendChild(th);
      th.textContent = '6 am';
  }
  function tableHead(){

    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
  
    let empty = document.createElement('th');
    trEl.appendChild(empty);
  
    for (let i = 0; i < hours.length; i++){
      let thl = document.createElement('th');
      trEl.appendChild(thl);
      thl.textContent = hour[i];
    }
    let tht2 = document.createElement('th');
    trEl.appendChild(tht2);
    tht2.textContent = 'Daily Location Total';
  
  }
  tableHead();
  
  
  function Salmon(locationName, min, max, avg) {
      this.locationName = locationName;
      this.min = min;
      this.max = max;
      this.avg = avg;
      this.customersHourly = [];
      this.cookiesHourly = [];
      this.total = 0;
  
  
  }
  Salmon.prototype.calcRandomCookies = function () {
      for (let i = 0; i < hours.length; i++) {
          this.cookiesHourly.push(this.customersHourly[i] * avg)
          this.total += this.cookiesHourly[i];
      }
  
  }
  let seatlle = new Salmon('seatlle',25,65,6.3);
  let tokyo = new Salmon('tokyo',3,24,1.2);
  let dubai = new Salmon('dubai',11,38,3.7);
  let paris = new Salmon('paris',11,38,2.3);
  let lima = new Salmon('lima',2,16,4.6);
  function tableFooter (){

    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
  
    let thr1 = document.createElement('th');
    trEl.appendChild(thr1);
    thr1.textContent = 'Total';
  
    let total = 0;
  
    for (let i = 0; i < hours.length; i++) {
  
      let totalHourly = 0;
  
      for (let m = 0; m < arrayOfBranch.length; m++) {
  
        totalHourly = totalHourly + arrayOfBranch[m].numOfCookie[i];
  
      }
      let thft2 = document.createElement('th');
      trEl.appendChild(thft2);
      thft2.textContent = totalHourly;
      tot = tot + totalHourly;
    }
    let thf3 = document.createElement('th');
    trEl.appendChild(thf3);
    thf3.textContent = tot;
  
  }
  tableFooter();
  
  
  
  