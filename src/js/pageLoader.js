const index = document.getElementById('index');
const navbar = document.querySelector('nav');
const footer = document.querySelector('footer');
const about = document.getElementById('about');
const blog1 = document.getElementById('blog1Content');

function loadContent(content, fileName, element) {
    fetch(fileName)
        .then(response => response.text())
        .then(data => {
            content = data;
            if (element === "footer") {
                footer.innerHTML = content;
            }
            if (element === "navbar") {
                navbar.innerHTML = content;
            }
            if (element === "about") {
                about.innerHTML = content;
            }
            if (element === "index") {
                index.innerHTML = content;
            }
            if (element === "blog1") {
                blog1.innerHTML = content;
            }
        })
        .catch(error => console.error('Error loading content:', error));
}


loadContent(footer, "../../src/elements/footer.txt", 'footer');
loadContent(navbar, "../../src/elements/navbar.txt", 'navbar');
loadContent(index, "../../src/elements/index.txt", 'index');
loadContent(about, "../../src/elements/about.txt", 'about');
loadContent(about, "../../src/blog-posts/text-files/blog1.txt", 'blog1');
