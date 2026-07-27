const characters = [
    {
        image: "characters/1.png",
        description: "A big yellow head :O"
    },
    {
        image: "characters/2.png",
        description: "A guy with a bomb head crazy!"
    },
    {
        image: "characters/3.png",
        description: "Music girl pink hair girl?"
    },
    {
        image: "characters/4.png",
        description: "Pet."
    },
    {
        image: "characters/5.png",
        description: "Defender shooter flying bot thing?"
    },
    {
        image: "characters/6.png",
        description: "A big head GREEN!"
    },
    {
        image: "characters/7.png",
        description: "I'm not sure who picked her name but she is reflective!"
    },
    {
        image: "characters/8.png",
        description: "Winter guy even tho it's CRAZY hot."
    },
    {
        image: "characters/9.png",
        description: "The most least real."
    },
    {
        image: "characters/10.png",
        description: "A gentleman ig?"
    },
    {
        image: "characters/11.png",
        description: "Just a fat dude."
    },
    {
        image: "characters/12.png",
        description: "The only thing you won't enjoy watching!"
    },
    {
        image: "characters/13.png",
        description: "The BLUE version of a BIG head!"
    },
    {
        image: "characters/14.png",
        description: "A weirdo with 4 arms."
    },
    {
        image: "characters/15.png",
        description: "A dummy without an arm."
    },
    {
        image: "characters/16.png",
        description: "A useless mouth."
    },
    {
        image: "characters/17.png",
        description: "An actually useful guy!"
    },
    {
        image: "characters/18.png",
        description: "Seriously don't mess with this guy..."
    },
    {
        image: "characters/19.png",
        description: "THE BIGGER THE BETTER THE RED!"
    },
    {
        image: "characters/20.png",
        description: "[REDACTED]"
    }
];


const characterCards = document.querySelectorAll(".character");

const popup = document.getElementById("characterPopup");
const popupImage = document.getElementById("characterImage");
const popupDescription = document.getElementById("characterDescription");


characterCards.forEach((card, index) => {

    card.addEventListener("click", () => {

        popupImage.src = characters[index].image;

        popupDescription.textContent = characters[index].description;

        popup.style.display = "flex";

    });

});


popup.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.style.display = "none";

    }

});
