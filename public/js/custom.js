const nameInputValue = document.querySelector('#nameInput');
const phoneInputValue = document.querySelector('#phoneInput');
const emailInputValue = document.querySelector('#emailInput')
const addressInputValue = document.querySelector('#addressInput');
const purchaseInputValue = document.querySelector('#purchaseInput');
const creditScoreInputValue = document.querySelector('#crediScoreInput');
const experienceInputValue = document.querySelector('#experienceInput');
const btn = document.querySelector('#submitBtn');

btn.addEventListener('click', (e) => {

    e.preventDefault();
    let lead = {};
    const name = nameInputValue.value;
    const phone = phoneInputValue.value;
    const email = emailInputValue.value;
    const address = addressInputValue.value;
    const purchase = purchaseInputValue.value;
    
    lead = {
      name: name,
      phone: phone,
      email: email, 
      address: address,
      purchase: purchase,
      //score: score
      // experience: experience
    };

    console.log('lead:', lead);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lead),
    }
    fetch('/lead', options);
});

