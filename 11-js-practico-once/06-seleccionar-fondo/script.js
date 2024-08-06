// let color = {
//     red, blue, yellow, black, green, orange, pink, violet,
// };
// for (let index = 0; index < array.length; index++) {
//     const fondoColor = array[index];
    
// };

document.addEventListener("DOMContentLoaded", function() {
    const colorInput = document.getElementById("colorInput");
    const colorIngles = ["red", "blue", "yellow", "black", "green", "orange", "pink", "violet"];
    const colorEspaniol = ["rojo", "azul", "amarillo", "verde"];
    const colorMap = {
        rojo: "red",
        azul: "blue",
        amarillo: "yellow",
        verde: "green"
    };

    colorInput.addEventListener("keydown", function(event) {
        const inputColor = colorInput.value.trim().toLowerCase();

        if (event.key === "Enter") {
            for (let i = 0; i < colorIngles.length; i++) {
                if (inputColor === colorIngles[i]) {
                    document.body.style.backgroundColor = inputColor;
                    return;
                }
            }

            for (let i = 0; i < colorEspaniol.length; i++) {
                if (inputColor === colorEspaniol[i]) {
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
