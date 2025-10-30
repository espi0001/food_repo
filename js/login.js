import { USERS_BASE_URL } from './info.js';

import { showModal } from './modal.js';

document.querySelector('#frmLogin').addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`${USERS_BASE_URL}/users`)
    .then(respone => respone.json()) 
    .then(data => {
        console.log(data);
        const email = e.target.txtEmail.value.trim();
        const password = e.target.txtPassword.value.trim();

        let found = false;

        data.forEach(user => {
            if (!found) {
                if (user.email === email && user.password === password) {
                    sessionStorage.setItem('foodrepo-loggedinuser-email', email);
                    location.href = 'index.html';
                    
                    found = true
                }
            }
        });
        if (!found) {
            showModal('Validation error', 'Incorrect credentials.')
        }
    })
    .catch(error => console.log(error));
});

