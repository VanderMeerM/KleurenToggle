
const body = document.querySelector('html');
const menuKnop = document.getElementById('hamburger');

menuKnop.addEventListener("click", function () {
    const menu = document.querySelector("#menu");
    menu.classList.toggle('visible');

})

/* Bonusopdracht: mouseover 
 
Met mouseover werkt het op zich wel, alleen verdwijnt het menu dan ook, zodra je de knop verlaat. 
In de praktijk kun je hierdoor geen kleur selecteren. 
Daar ik dat niet heb kunnen oplossen, heb ik het bij de klik gelaten en de code hieronder uitgecommentarieerd. 
Ik dacht het met hoveren over de body (waartussen de id's hamburger en menu zitten) op te lossen, maar helaas werkte dat niet. 

menuKnop.addEventListener("mouseover", function() {
    const menu = document.querySelector("#menu");
    menu.classList.toggle('hidden',false);
    menu.classList.toggle('visible',true);
})

 menuKnop.addEventListener("mouseout", function() {
    const menu = document.querySelector("#menu");
    menu.classList.toggle('visible',false);
    menu.classList.toggle('hidden',true);
           
})
*/

// Bonusopdrachten: de achtergrondkleur wordt op de achtergrond aangegeven en de balken zijn gekleurd. 

const grey = document.querySelector(".greyBackground");
grey.addEventListener("click", function () {
    document.getElementById("kleur").innerHTML = 'grijs';
    body.style.background = 'grey';
    menu.classList.toggle('visible', false);
    menu.classList.toggle('hidden', true);

})

const red = document.querySelector(".redBackground");
red.addEventListener("click", function () {
    document.getElementById("kleur").innerHTML = 'rood';
    body.style.background = 'red';
    menu.classList.toggle('visible', false);
    menu.classList.toggle('hidden', true);


})

const orange = document.querySelector(".orangeBackground");
orange.addEventListener("click", function () {
    document.getElementById("kleur").innerHTML = 'oranje';
    body.style.background = 'orange';
    menu.classList.toggle('visible', false);
    menu.classList.toggle('hidden', true);

})

const purple = document.querySelector(".purpleBackground");
purple.addEventListener("click", function () {
    document.getElementById("kleur").innerHTML = 'paars';
    body.style.background = 'purple';
    menu.classList.toggle('visible', false);
    menu.classList.toggle('hidden', true);

})

const green = document.querySelector(".greenBackground");
green.addEventListener("click", function () {
    document.getElementById("kleur").innerHTML = 'groen';
    body.style.background = 'green';
    menu.classList.toggle('visible', false);
    menu.classList.toggle('hidden', true);

})

// Bonusopdracht: achtergrondkleur verandert met druk op toets 1-5 

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 49 || event.keyCode === 97) {
        document.getElementById("kleur").innerHTML = 'grijs';
        body.style.background = 'gray';
        menu.classList.toggle('visible', false);
        menu.classList.toggle('hidden', true);
    }

    else if (event.keyCode === 50 || event.keyCode === 98) {
        document.getElementById("kleur").innerHTML = 'rood';
        body.style.background = 'red';
        menu.classList.toggle('visible', false);
        menu.classList.toggle('hidden', true);
    }

    else if (event.keyCode === 51 || event.keyCode === 99) {
        document.getElementById("kleur").innerHTML = 'oranje';
        body.style.background = 'orange';
        menu.classList.toggle('visible', false);
        menu.classList.toggle('hidden', true);
    }

    else if (event.keyCode === 52 || event.keyCode === 100) {
        document.getElementById("kleur").innerHTML = 'paars';
        body.style.background = 'purple';
        menu.classList.toggle('visible', false);
        menu.classList.toggle('hidden', true);
    }

    else if (event.keyCode === 53 || event.keyCode === 101) {
        document.getElementById("kleur").innerHTML = 'groen';
        body.style.background = 'green';
        /* body.classList.toggle('greyBackground', false);
         body.classList.toggle('redBackground', false);
         body.classList.toggle('orangeBackground', false);
         body.classList.toggle('purpleBackground', false);
         body.classList.toggle('greenBackground', true); */
        menu.classList.toggle('visible', false);
        menu.classList.toggle('hidden', true);
    }
}
)



