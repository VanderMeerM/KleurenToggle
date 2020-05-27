
const body = document.querySelector('body');
const menuButton = document.getElementById('hamburger');
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", function () {
     menu.classList.toggle('visible');
})

menuButton.addEventListener("mouseover", function () {
    menu.classList.toggle('visible');
})
   

const changeColor = event => {
    const color = event.target.innerHTML.split(' ')[0];
    document.getElementById("color").innerHTML = color;
    body.style.background = color;
    menu.classList.toggle('visible');
    document.querySelector(".text").style.color= "white";
}

const pressColor = () => {
    document.getElementById("color").innerHTML = color;
    body.style.background = color;
    menu.classList.toggle('visible');
    document.querySelector(".text").style.color= "white";
}
   
const grey = document.querySelector(".grey").
addEventListener("click", changeColor)

const red = document.querySelector(".red").
addEventListener("click", changeColor)

const orange = document.querySelector(".orange").
addEventListener("click", changeColor)

const purple = document.querySelector(".purple").
addEventListener("click", changeColor)

const green = document.querySelector(".green").
addEventListener("click", changeColor)


document.addEventListener("keydown", function (event) {
      if (event.keyCode === 49 || event.keyCode === 97) {
      color="grey";
    }

    else if (event.keyCode === 50 || event.keyCode === 98) {
        color="red";
    }

    else if (event.keyCode === 51 || event.keyCode === 99) {
        color="orange";
    }

    else if (event.keyCode === 52 || event.keyCode === 100) {
        color="purple";
    }

    else if (event.keyCode === 53 || event.keyCode === 101) {
        color="green";
    }

    pressColor()

})

