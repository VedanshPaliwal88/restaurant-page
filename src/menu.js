import generateFooter from "./footer";

export default function generateMenu() {
    let content = document.querySelector('#content');
    content.innerHTML = '';

    let itemNames =[
        'Appetizer', 'Ghostly Garlic Bread', 'Phantom Fries',
        'Main Course', 'Haunted Hamburger', 'Spectral Spaghetti',
        'Desserts', 'Lost Lava Cake', 'Forgotten Cheesecake',
    ]

    let itemDescs = [
        'Once beloved starters that set the stage for a great meal.',
        'Remnants of what used to be a customer favorite, now just a memory.',
        'Crispy fries that vanished with time.',
        'Mains that once graced our tables, now just a whisper in the wind.',
        `A juicy burger that people still talk about, though it's long gone.`,
        'Pasta that used to be the star of the menu, now a distant memory.',
        'Sweet endings that linger in the minds of those who dined here.',
        'Once oozing with flavor, now just a shadow.',
        'A creamy delight that faded away.'
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