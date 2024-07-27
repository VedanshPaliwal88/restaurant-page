export default function generateFooter() {
    let content = document.querySelector('#content');
    let footer = document.createElement('footer');
    footer.classList.add('footer');

    let left = document.createElement('div');
    left.classList.add('left');
    left.textContent = "Have any questions or want to make a reservation? Reach out to us!";

    let addressBox = document.createElement('div');
    let addressText = document.createElement('div');
    let address = document.createElement('div');
    
    addressBox.classList.add('address');
    addressText.classList.add('text');
    
    addressText.textContent = "Visit us:";
    address.textContent = "Nowhere road, nowhere city, nowhere.";
    
    addressBox.appendChild(addressText);
    addressBox.appendChild(address);
    
    let phoneBox = document.createElement('div');
    let phoneText = document.createElement('div');
    let phone  = document.createElement('div');

    phoneBox.classList.add('phone');
    phoneText.classList.add('text');
    
    phoneText.textContent = "Call us: ";
    phone.textContent = "+11234567890";
    
    phoneBox.appendChild(phoneText);
    phoneBox.appendChild(phone);

    let emailBox = document.createElement('div');
    let emailText = document.createElement('div');
    let email = document.createElement('div');
    
    emailBox.classList.add('email');
    emailText.classList.add('text');
    
    emailText.textContent = "Email us:";
    email.textContent = "broken@bistro.com";
    
    emailBox.appendChild(emailText);
    emailBox.appendChild(email);

    footer.appendChild(left);
    footer.appendChild(addressBox);
    footer.appendChild(phoneBox);
    footer.appendChild(emailBox);

    content.append(footer);
    }