const cursor = document.getElementById("cursor");
const validHoverables = document.querySelectorAll("button, a, *.hoverable");

function onMouseMove(e) {
    const x = e["pageX"];
    const y = e["pageY"];

    cursor.style.left = `${x}px`;
    cursor.style.top  = `${y}px`;
}
document.body.addEventListener("mousemove", onMouseMove);

function onMouseLeave(e) {
    cursor.classList.add("cursor-hidden");
    document.getElementById("video").style.filter = "brightness(0.1) blur(5px)";
}
document.body.addEventListener("mouseleave", onMouseLeave);

function onMouseEnter(e) {
    cursor.classList.remove("cursor-hidden");
    document.getElementById("video").style.filter = "brightness(0.5) blur(5px)";
}
document.body.addEventListener("mouseenter", onMouseEnter);

function onContext(e) {
    e.preventDefault();
    return;
}
document.body.addEventListener("contextmenu", onContext);

function onClick(e) {
    cursor.classList.add("cursor-ripple");
    setTimeout(() => {
        cursor.classList.remove("cursor-ripple");
    }, 150);
}
document.body.addEventListener("click", onClick);

function onMouseDown(e) {
    cursor.classList.add("cursor-ripple");
}
document.body.addEventListener("mousedown", onMouseDown);

function onMouseUp(e) {
    cursor.classList.remove("cursor-ripple");
}
document.body.addEventListener("mouseup", onMouseUp);

validHoverables.forEach((elem) => {
    elem.addEventListener("mouseover", (e) => {
        cursor.classList.add("cursor-hover");
    });
    elem.addEventListener("mouseleave", (e) => {
        cursor.classList.remove("cursor-hover");
    })
});