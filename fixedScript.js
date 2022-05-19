for (let i = 0; i < 8 ; i++) {
  let container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);
  for (let j = 4; j < 8; j++) {
    let box = document.createElement("div");
    if (i % 2 === 0) {
      box.className = "white";
      container.appendChild(box);
    } else {
      box.className = "black";
      container.appendChild(box);
      }
      box = document.createElement("div");
      if (i % 2 === 0) {
        box.className = "black";
        container.appendChild(box);
        } else {
        box.className = "white";
        container.appendChild(box);
    }
  
  }
}
