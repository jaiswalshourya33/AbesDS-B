const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerText = "Shourya Jaiswal";  // ✅ fixed typo
    div.appendChild(h1);

    const id = document.getElementById("container");
    id.appendChild(div);
    