document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector("img");
    let isMouseDown = false;

    document.body.addEventListener("mousemove", function(event) {
        if (isMouseDown) {
            img.style.top = event.clientY + "px";
            img.style.left = event.clientX + "px";
        }
    });

    document.body.addEventListener("mousedown", function() {
        isMouseDown = true;
    });

    document.body.addEventListener("mouseup", function() {
        isMouseDown = false;
    });
});
