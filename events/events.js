const button = document.getElementById("the-button");

button.addEventListener("click", () => {
  const root = document.getElementById("root");

  const p = document.createElement("p");

  p.textContent = "Hello!";

  root.appendChild(p);
});

// // **************************************************

// // Utilizing the event data
document.addEventListener("mousemove", (event) => {
  // console.log(event);

  const p = document.getElementById("mouse-position");

  p.textContent = event.x + ", " + event.y;
});

// // ************

// Do anything you like!
let keypresses = [];

function easterEgg(event) {
  // store the pressed key
  keypresses.push(event.key);

  // if the wrong combination is pressed
  if (keypresses.join("") !== "flash".substring(0, keypresses.length)) {
    // then reset the stored keypresses
    keypresses = [];
  } else if (keypresses.join("") === "flash") {
    // if the stored keypresses are exactly right
    document.removeEventListener("keypress", easterEgg);

    let count = 0;
    let colours = ["red", "blue", "yellow", "green"];
    window.setInterval(() => {
      document.body.style.backgroundColor = colours[count % colours.length];
      count += 1;
    }, 750);
  }
}

document.addEventListener("keypress", easterEgg);
