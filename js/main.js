console.log("main.js loaded");

// Variables
const bgColor = {
    r: 12,
    g: 50,
    b: 100,
    a: 10,

    toCSS: function () {
        let result = `rgb(${this.r},${this.g}, ${this.b}, ${this.a/10})`;

        return result;
    },

    toHex: function () {
        let result = "#";
    

        return result;
    }
}

const redSlider = document.querySelector("input.red");

//Event listeners
redSlider.addEventListener("change", (event) => {
    bgColor.r = event.target.value;
    console.log("changing red: " + bgColor.r)

    changeCircleColor();
});

const greenSlider = document.querySelector("input.green");

greenSlider.addEventListener("change", (event1) => {
    bgColor.g = event1.target.value;
    console.log("changing green: " + bgColor.g)

    changeCircleColor();
});

const blueSlider = document.querySelector("input.blue");

blueSlider.addEventListener("change", (event2) => {
    bgColor.b = event2.target.value;
    console.log("changing blue: " + bgColor.b)

    changeCircleColor();
});

const alphaSlider = document.querySelector("input.alpha");

alphaSlider.addEventListener("change", (event3) => {
    bgColor.a = event3.target.value;
    console.log("changing alpha: " + bgColor.a)

    changeCircleColor();
});
//Functions
function changeCircleColor() {
    const circleDiv = document.querySelector("div.circle");
    circleDiv.style.backgroundColor = bgColor.toCSS();

    const rValue = document.querySelector('.r-value');
    const gValue = document.querySelector('.g-value');
    const bValue = document.querySelector('.b-value');
    const aValue = document.querySelector('.a-value')

    rValue.textContent = bgColor.r;
    gValue.textContent = bgColor.g;
    bValue.textContent = bgColor.b;
    aValue.textContent = bgColor.a/10;

    const hexR = Number(bgColor.r).toString(16);
    const hexG = Number(bgColor.g).toString(16);
    const hexB = Number(bgColor.b).toString(16);
    const hexA = Number(bgColor.a).toString(16);
    console.log(hexR + hexG + hexB + hexA);

    const showHex = document.querySelector('.show-hex');
    showHex.innerHTML = '#' + hexR + hexG + hexB + hexA;
    
}

