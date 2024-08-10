function loadContent(content, fileName) {
    fetch(fileName)
        .then(response => response.text())
        .then(data => {
            content = data;
            displayFooter(content);
        })
        .catch(error => console.error('Error loading content:', error));
}

function displayFooter (content){
    document.querySelector('footer').innerHTML = content;
}
const footer = document.querySelector('footer')
loadContent(footer, "../../src/elements/footer.txt");