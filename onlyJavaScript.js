for (let i = 0; i < 8 ; i++) {
    let container = document.createElement("div");
    container.style.display = "flex";
    document.body.appendChild(container);
    for (let j = 4; j < 8; j++) {
        let box = document.createElement("div");
        if (i % 2 === 0) {
            box.style.height = "50px";
            box.style.width = "50px";
            box.style.backgroundColor = "white";
            box.style.border = "1px solid";
            container.appendChild(box);
        } else {
            box.style.height = "50px";
            box.style.width = "50px";
            box.style.backgroundColor = "black";
            box.style.border = "1px solid";
            container.appendChild(box);
        }
        box = document.createElement("div");
        if (i % 2 === 0) {
            box.style.height = "50px";
            box.style.width = "50px";
            box.style.backgroundColor = "black";
            box.style.border = "1px solid";
            container.appendChild(box);
        } else {
                      box.style.height = "50px";
            box.style.width = "50px";
            box.style.backgroundColor = "white";
            box.style.border = "1px solid";
            container.appendChild(box);
        }
  
    }

}
