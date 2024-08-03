// let color = {
//     red, blue, yellow, black, green, orange, pink, violet,
// };
// for (let index = 0; index < array.length; index++) {
//     const fondoColor = array[index];
    
// };

document.addEventListener("DOMContentLoaded", function() {
    const colorInput = document.getElementById("colorInput");
    const colorsIngles = ["red", "blue", "yellow", "black", "green", "orange", "pink", "violet"];
    const colorsEspaniol = ["rojo", "azul", "amarillo", "verde"];
    const colorMap = {
        rojo: "red",
        azul: "blue",
        amarillo: "yellow",
        verde: "green"
    };

    colorInput.addEventListener("keydown", function(event) {
        const inputColor = colorInput.value.trim().toLowerCase();

        if (event.key === "Enter") {
            for (let i = 0; i < colorsIngles.length; i++) {
                if (inputColor === colorsIngles[i]) {
                    document.body.style.backgroundColor = inputColor;
                    return;
                }
            }

            for (let i = 0; i < colorsEspaniol.length; i++) {
                if (inputColor === colorsEspaniol[i]) {
                    document.body.style.backgroundColor = colorMap[inputColor];
                    return;
                }
            }
        }

        if (event.key === "Backspace") {
            setTimeout(function() {
                if (colorInput.value === "") {
                    document.body.style.backgroundColor = "white";
                }
            }, 0);
        }
    });

    colorInput.addEventListener("input", function() {
        if (colorInput.value === "") {
            document.body.style.backgroundColor = "white";
        }
    });
});
