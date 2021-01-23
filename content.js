document.body.addEventListener("animationstart", function(event){
    if (event.target.id === "spinnerContainer" && window.location.pathname === "/watch"){
        try {
            document.querySelector("#comments").style.display = "none";
            console.log("removed");
        } catch (e) {
            console.log("not yet there");
        }
    }
})
