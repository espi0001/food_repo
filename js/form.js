// We are listening to the submit of the form
// We have an arrow fuction =>
// e means event
document.querySelector('#frmContact').addEventListener('submit', (e) => {
    e.preventDefault(); // when it sends the form "stay there"


    // we need to grab the values that are being sendt
    const fullName = e.target.txtFullName.value; // the faster way - it gathers the value of the event 
    const email = e.target.txtEmail.value; 
    const phoneNumber = e.target.txtPhoneNumber.value; 
    const comments = e.target.txtComments.value; 

    const dialog = document.querySelector('#mdlContact');

    dialog.querySelector('#form-full-name').innerText = fullName;
    dialog.querySelector('#form-email').innerText = email;
    dialog.querySelector('#form-phone-number').innerText = phoneNumber;
    dialog.querySelector('#form-comments').innerText = comments;

    dialog.showModal();
    
    e.target.reset();


    dialog.querySelector('button.close').addEventListener('click', (e) => {

        e.preventDefault();

        dialog.close();
    });
    
});  