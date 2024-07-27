import interiorImg from './images/interior.jpg'   
export default function generateHome() {
    
    let content = document.querySelector('#content');
    content.innerHTML = '';

    let head1 = document.createElement('div');
    let restaurantName = document.createElement('span');
    let head2 = document.createElement('div');
    let head3 = document.createElement('div');
    let interior = new Image();


    head1.textContent = "Welcome to ";
    head1.classList.add('heading');

    restaurantName.textContent = "the Broken Bistro";
    restaurantName.classList.add('name');

    head1.appendChild(restaurantName);
    
    head2.textContent = "-Where the time stays still";
    head2.classList.add('heading');
    
    
    head3.textContent = "Experience the remnants of what was once a restaurant.";
    head3.classList.add('heading', 'catchphrase')
    
    interior.src = interiorImg;
    interior.alt = "interior";
    interior.classList.add('interior');

    content.appendChild(head1);
    content.appendChild(head2);
    content.appendChild(head3);
    content.appendChild(interior);
}