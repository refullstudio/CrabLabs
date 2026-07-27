const characters = [
    {
        image: "1.png",
        description: "A big yellow head :O"
    },
    {
        image: "2.png",
        description: "A guy with a bomb head crazy!"
    },
    {
        image: "3.png",
        description: "Music girl pink hair girl?"
    },
    {
        image: "4.png",
        description: "Pet."
    },
    {
        image: "5.png",
        description: "Defender shooter flying bot thing?"
    },
    {
        image: "6.png",
        description: "A big head GREEN!"
    },
    {
        image: "7.png",
        description: "I'm not sure who picked her name but she is reflective!"
    },
    {
        image: "8.png",
        description: "Winter guy even tho it's CRAZY hot."
    },
    {
        image: "9.png",
        description: "The most least real."
    },
    {
        image: "10.png",
        description: "A gentleman ig?"
    },
    {
        image: "11.png",
        description: "Just a fat dude."
    },
    {
        image: "12.png",
        description: "The only thing you won't enjoy watching!"
    },
    {
        image: "13.png",
        description: "The BLUE version of a BIG head!"
    },
    {
        image: "14.png",
        description: "A weirdo with 4 arms."
    },
    {
        image: "15.png",
        description: "A dummy without an arm."
    },
    {
        image: "16.png",
        description: "A useless mouth."
    },
    {
        image: "17.png",
        description: "An actually useful guy!"
    },
    {
        image: "18.png",
        description: "Seriously don't mess with this guy..."
    },
    {
        image: "19.png",
        description: "THE BIGGER THE BETTER THE RED!"
    },
    {
        image: "20.png",
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
