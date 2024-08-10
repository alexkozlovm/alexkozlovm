function blogPost(id, content) {
    this.id = id;
    this.content = content;
}

const blog1 = new blogPost("blog1", "")
const blog2 = new blogPost("blog2", "")

function loadContent(blog, fileName) {
    fetch(fileName)
        .then(response => response.text())
        .then(data => {
            blog.content = data;
            postBlog(blog);
        })
        .catch(error => console.error('Error loading content:', error));
}



function postBlog(blog) {
    const content = document.getElementById(blog.id+"Content");
    content.innerHTML = blog.content;
}

let blog = blog1

const mainElement = document.querySelector('main');
const blog1ContentElement = document.getElementById('blog1Content');

if (mainElement === blog1ContentElement) {
    blog = blog1;
} else {
    console.log("The <main> element is NOT equal to blog1Content.");
}

loadContent(blog, blog.id +".txt");
