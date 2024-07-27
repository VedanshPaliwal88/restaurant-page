import generateFooter from './footer';

export default function generateAbout() {
    let content = document.querySelector("#content");
    content.innerHTML = '';
    let about = document.createElement('div');
    about.classList.add('about');
    let aboutTitle = document.createElement('div');
    aboutTitle.textContent = "About Us";
    aboutTitle.classList.add('aboutTitle');

    let aboutHeadings = ['Our Story: ', 'Our Downfall: ', 'Our Warning: '];
    let aboutTexts = [
        'The Broken Bistro opened its doors in 1990s, serving many happy customers before falling into disrepair. Today, it stands as a grim reminder of what once was – a place best avoided by those seeking a meal.',
        'The rise and fall of The Broken Bistro is a story of neglect and decay. Once a popular spot, now it’s just a forgotten corner, left to the elements and time.',
        'The Broken Bistro is not for the faint of heart. Visit if you must, but beware – there’s nothing appetizing left to find here.'
    ]

    for (let i = 0; i < aboutHeadings.length; i++) {
        let aboutHeading = document.createElement('span');
        aboutHeading.classList.add('aboutHeading');
        aboutHeading.textContent = aboutHeadings[i];

        let aboutText = document.createElement('p');
        aboutText.classList.add('aboutText');
        aboutText.textContent = aboutTexts[i];

        about.appendChild(aboutHeading);
        about.appendChild(aboutText);
    }
    content.appendChild(about);
    generateFooter();
}