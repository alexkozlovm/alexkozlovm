function blogPost(name, tags, date, readTime) {
this.name = name;
this.tags = tags;
this.date = date;
this.readTime = readTime;
}

const blog1 = new blogPost(
    "My Coding Journey so far (Part 1)",
    ["Learn to Code", "Web development", "Front end", "Freecodecamp"],
    "Jan 24, 2024",
    "4"
)


function postBlog(blogName, blogNameString) {

    const title = document.getElementById(blogNameString + "Title");
    const tags = document.getElementById(blogNameString + "Tags");
    const dateAndReadTime = document.getElementById("blog1Date-ReadTime");

    title.innerHTML = blogName.name;

    let tagsResult = "";
    for (let index = 0; index < 1; index++) {
        const element = blogName.tags[index];
        blogName.tags.forEach(element => {
            tagsResult += element + ", ";
        });
    }
    tags.innerHTML = tagsResult

    dateAndReadTime.innerHTML = blogName.date + " | " + blogName.readTime + " mins"
}
postBlog(blog1, "blog1");