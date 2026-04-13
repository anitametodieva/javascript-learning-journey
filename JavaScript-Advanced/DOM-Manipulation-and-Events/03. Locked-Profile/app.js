function lockedProfile() {
    document.querySelectorAll("button").forEach(btn => btn.addEventListener("click", onClick));

    function onClick(event){
        const btn = event.currentTarget;
        const profile = btn.parentElement;
        const radioBtn = Array.from(profile.querySelectorAll("input[type='radio']"))
        .filter(input => input.checked)[0];
        const profileState = radioBtn.value;
        const infoDiv = profile.querySelector("div");

        if(profileState === "lock"){
            return;
        }

        if(btn.textContent === "Show more"){
            infoDiv.style.display = "block";
            btn.textContent = "Hide it";
        } else {
            infoDiv.style.display = "none";
            btn.textContent = "Show more";
        }
    }
}