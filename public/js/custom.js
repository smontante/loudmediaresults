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
