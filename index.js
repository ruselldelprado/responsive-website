$(() => {

    // Always makes sure the links is visible in desktop view
    if (window.innerWidth > 700) {
        $("#links").show();
    }

    // Make sure that the menu links is hidden when resize to mobile 
    // Make sure that links does not disappear when the mobile button is toggle to hidden
    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            $("#links").show();
        } else {
            $("#links").hide();
            $(".fas").removeClass('fa-times').addClass('fa-bars');
        }
    })

    // Toggle Menu button when in mobile mode
    $("#menu-button").on("click", () => {
        $("#links").toggle();
        $(".fas").toggleClass("fa-bars fa-times");
    })


})