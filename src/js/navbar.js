function loadContent(content, fileName) {
    fetch(fileName)
        .then(response => response.text())
        .then(data => {
            content = data;
            displayNavBar(content);
        })
        .catch(error => console.error('Error loading content:', error));
}

function displayNavBar (content){
    document.querySelector('nav').innerHTML = content;
}
const navbar = document.querySelector('nav')
loadContent(navbar, "src/elements/navbar.txt");