$(() => {

    // Make sure that the menu links is hidden when resize to mobile 
    // Make sure that links does not disappear when the mobile button is toggle to hidden
    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            $("#links").show();
        } else {
            $("#links").hide();
        }
    })

    // Toggle Menu button when in mobile mode
    $("#menu").on("click", () => {
        $("#links").toggle();
    })


})