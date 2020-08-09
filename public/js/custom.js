const contactNameInput = document.querySelector('#name');
const contactEmailInput = document.querySelector('#email');
const contactSubjectInput = document.querySelector('#subject')
const contactMessageInput = document.querySelector('#message');

const btn = document.querySelector('#submitBtn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const name = contactNameInput.value;
    const email = contactEmailInput.value;
    const subject = contactSubjectInput.value;
    const message = contactMessageInput.value;

    console.log('name:', name);
    console.log('email', email)
    console.log('subject:', subject);
    console.log('message:', message);

        contact = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

    console.log('contact:', contact);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact),
    }
    fetch('/contact', options);
    
    alert('Thank you, our team will contact you shortly!');

});

let covidApidata;

const url = 'https://api.covid19api.com/summary';
fetch(url) 
.then(data=>{return data.json()})
.then(res=>{

covidApidata = res;
console.log(res);

let search = (key, inputArray) => {
  for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].Country === key) {
          return inputArray[i];
      }
  }
}

let chinaResults = search('China', covidApidata.Countries);
let italyResults = search('Italy', covidApidata.Countries);
let usaResults = search('United States of America', covidApidata.Countries);
let spainResults = search('Spain', covidApidata.Countries);
let germanyResults = search('Germany', covidApidata.Countries);
let franceResults = search('France', covidApidata.Countries);
let iranResults = search('Iran', covidApidata.Countries);

countryData = [
  usaData = {
    country: usaResults.Country,
    total: usaResults.TotalConfirmed
  },
  italyData = {
    country: italyResults.Country,
    total: italyResults.TotalConfirmed
  },
  chinaData = {
    country: chinaResults.Country,
    total: chinaResults.TotalConfirmed
  },
  spainData = {
    country: spainResults.Country,
    total: spainResults.TotalConfirmed
  },
    germanyData = {
      country: germanyResults.Country,
      total: germanyResults.TotalConfirmed
  },
  franceData = {
    country: franceResults.Country,
    total: franceResults.TotalConfirmed
  }
];
  document.getElementById('usa').innerHTML = countryData[0].country + ' Covid Cases: ' + '<i style="color:#99D315" class="fas fa-chevron-up"></i>' + countryData[0].total;
  document.getElementById('italy').innerHTML = countryData[1].country + ' Covid Cases: ' + '<i style="color:#99D315" class="fas fa-chevron-up"></i>' + countryData[1].total;
  document.getElementById('china').innerHTML = countryData[2].country + ' Covid Cases: ' + '<i style="color:#99D315" class="fas fa-chevron-up"></i>' + countryData[2].total;
  document.getElementById('spain').innerHTML = countryData[3].country + ' Covid Cases: ' + '<i style="color:#99D315" class="fas fa-chevron-up"></i>' + countryData[3].total;
  document.getElementById('germany').innerHTML = countryData[4].country + ' Covid Cases: ' + '<i style="color:#99D315" class="fas fa-chevron-up"></i>' + countryData[4].total;
  document.getElementById('france').innerHTML = countryData[5].country + ' Covid Cases: ' + '<i style="color:#99D315" class="fas fa-chevron-up"></i>' + countryData[5].total;
})
.catch(error=>console.log(error));
