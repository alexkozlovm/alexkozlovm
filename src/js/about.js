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
    document.getElementById('about').innerHTML = content;
}
const about = document.getElementById('about')
loadContent(about, "../elements/about.txt");