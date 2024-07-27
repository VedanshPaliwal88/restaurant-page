import generateFooter from "./footer";

export default function generateMenu() {
    let content = document.querySelector('#content');
    content.innerHTML = '';

    let itemNames =[
        'Appetizer', 'Moldy Mozzarella Sticks', 'Rusty Ranch Dip',
        'Main Course', 'Soggy Spaghetti', 'Battered Burger',
        'Desserts', 'Spoiled Sundae', 'Crumbling Cheesecake',
    ]

    let itemDescs = [
        'Starters that have long since been forgotten.',
        'Once crispy, now just a distant memory.',
        'A dip that no one should dare to try.',
        'Mains that have seen better days.',
        `Pasta that’s past its prime.`,
        'Once a favorite, now left to rot.',
        'Sweets that are anything but sweet now.',
        'Ice cream that’s seen better days.',
        'A dessert that’s falling apart.'
    ]

    let itemPrices = [
        0, 'Priceless', 'Vanished', 0, 'Forgotten', 'Eclipsed', 0, 'Timeless', 'Erased'
    ]

    for (let i = 0; i < itemNames.length; i++) {
        let isDish = itemPrices[i]

        let item = document.createElement('div');
        item.classList.add(isDish === 0 ? 'cuisine' : 'menuItem');

        let itemName = document.createElement('div');
        itemName.classList.add(isDish === 0 ? 'cuisineName' : 'dishName');
        itemName.textContent = itemNames[i];
        item.appendChild(itemName);

        if (isDish !== 0) {
            let dishPrice = document.createElement('div');
            dishPrice.classList.add('dishPrice');
            dishPrice.textContent = itemPrices[i];
            item.appendChild(dishPrice);
        }

        let itemDesc = document.createElement('div');
        itemDesc.classList.add(isDish === 0 ? 'cuisineDesc' : 'dishDesc')
        itemDesc.textContent = itemDescs[i];
        item.appendChild(itemDesc);
        
        content.appendChild(item);
    }
    generateFooter();
}