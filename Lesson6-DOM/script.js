function myfunction() {
    var a = 4;
    document.getElementById("demo").innerHTML = a + " is the demo value";

    document.body.style.backgroundColor = "darkcyan";

    var demo = document.getElementById("demo");
    demo.style.color = "white";
    demo.style.fontSize = "2em";

    var button = document.querySelector("button");
    button.style.backgroundColor = "darkblue";
    button.style.color = "white";
    button.style.padding = "20px 40px"
    button.style.fontSize = "1.2em"
    button.style.border = "2px solid white"
    button.style.borderRadius = "14px"
    button.innerHTML = "Clicked!";
}
