// JavaScript to toggle the display of the additional content
function toggleCauseDetails() {
    var causeDetails = document.getElementById("causeDetails");
    var learnMoreButton = document.getElementById("learnMoreBtn");

    if (causeDetails.classList.contains("hidden")) {
        causeDetails.classList.remove("hidden");
        causeDetails.classList.add("shown");
        learnMoreButton.innerText = "Less Info";
    } else {
        causeDetails.classList.remove("shown");
        causeDetails.classList.add("hidden");
        learnMoreButton.innerText = "Learn more";

        // Scroll back to the top of the section after hiding the content
        var sectionTop = document.querySelector(".py-5").getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, sectionTop);
    }
}

// JavaScript to toggle the display of the additional content for Pictures of Cleaning section
function toggleCleaningDetails() {
    var cleaningDetails = document.getElementById("cleaningDetails");
    var learnMoreCleaningButton = document.getElementById("learnMoreCleaningBtn");

    if (cleaningDetails.classList.contains("hidden")) {
        cleaningDetails.classList.remove("hidden");
        cleaningDetails.classList.add("shown");
        learnMoreCleaningButton.innerText = "Less Info";
    } else {
        cleaningDetails.classList.remove("shown");
        cleaningDetails.classList.add("hidden");
        learnMoreCleaningButton.innerText = "Learn more";
    }
}
