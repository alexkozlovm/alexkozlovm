function loadContent(content, fileName) {
    fetch(fileName)
        .then(response => response.text())
        .then(data => {
            content = data;
            display(content);
        })
        .catch(error => console.error('Error loading content:', error));
}

function display (content){
    document.getElementById('index').innerHTML = content;
}
const index = document.getElementById('index')
loadContent(index, "src/elements/index.txt");