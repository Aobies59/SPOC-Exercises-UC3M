const book = {
    title: "Homo Deus: A brief history of tomorrow",
    author: "Yuval Noah Harari",
    pages: 496,
    frontpageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Homo_Deus_-_A_Brief_History_of_Tomorrow.jpg"
}

var container = document.createElement("div");
container.style.width = "100dvw";
container.style.height = "100dvh";
container.style.display = "flex";
container.style.flexFlow = "row nowrap";

var img = document.createElement("img");
img.src = book.frontpageUrl;
container.appendChild(img);

var div = document.createElement("div");
container.appendChild(div);

var p_title = document.createElement("p");
p_title.innerHTML = "<b>Title:</b>: Homo Deus: A brief history of twomorrow";
div.appendChild(p_title);

var p_author = document.createElement("p");
p_author.innerHTML = "<b>Author:</b>: Yuval Noah Harari";
div.appendChild(p_author);

var p_pages = document.createElement("p");
p_pages.innerHTML = "<b>Pages:</b>: 496";
div.appendChild(p_pages);

document.body.appendChild(container);