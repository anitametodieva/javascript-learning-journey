function attachEvents() {

    const BASE_URL = "http://localhost:3030/jsonstore/forecaster/";
    const userInputLocationRef = document.getElementById("location");
    const forecastContainer = document.getElementById("forecast");

    document.getElementById("submit").addEventListener("click", onSubmit);

    const upcoming = document.getElementById("upcoming");
    const currentRef = document.getElementById("current");

    const endpoints = {
        location: "locations",
        today: (code) => `today/${code}`,
        upcoming: (code) => `upcoming/${code}`
    };

    const symbolEnum = {
        "Sunny": "&#x2600",
        "Partly sunny": "&#x26C5",
        "Overcast": "&#x2601",
        "Rain": "&#x2614",
        "Degrees": "&#176"
    };

    async function onSubmit(event) {

        event.preventDefault();

        try {

            const response = await fetch(BASE_URL + endpoints.location);
            const data = await response.json();

            forecastContainer.style.display = "block";

            currentRef.innerHTML = '<div class="label">Current conditions</div>';
            upcoming.innerHTML = '<div class="label">Three-day forecast</div>';

            const userLocation = data.find(x => x.name === userInputLocationRef.value);

            if (!userLocation) {
                throw new Error("Invalid location");
            }

            fillToday(userLocation.code);
            fillNextDay(userLocation.code);

        } catch (error) {

            forecastContainer.style.display = "block";
            forecastContainer.textContent = "Error";

        }

    }

    async function fillNextDay(code) {

        const response = await fetch(BASE_URL + endpoints.upcoming(code));
        const data = await response.json();

        createNextDay(data);
    }

    async function fillToday(code) {

        const response = await fetch(BASE_URL + endpoints.today(code));
        const data = await response.json();

        createTodayInfo(data);
    }

    function createNextDay(data) {

        const container = document.createElement("div");
        container.classList.add("forecast-info");

        data.forecast.forEach(day => {

            const span = document.createElement("span");
            span.classList.add("upcoming");

            span.innerHTML = `
            <span class="symbol">${symbolEnum[day.condition]}</span>
            <span class="forecast-data">${day.low}${symbolEnum.Degrees}/${day.high}${symbolEnum.Degrees}</span>
            <span class="forecast-data">${day.condition}</span>
            `;

            container.appendChild(span);

        });

        upcoming.appendChild(container);
    }

    function createTodayInfo(data) {

        const forecast = data.forecast;

        const container = document.createElement("div");
        container.classList.add("forecasts");

        container.innerHTML = `
        <span class="condition symbol">${symbolEnum[forecast.condition]}</span>
        <span class="condition">
            <span class="forecast-data">${data.name}</span>
            <span class="forecast-data">${forecast.low}${symbolEnum["Degrees"]}/${forecast.high}${symbolEnum["Degrees"]}</span>
            <span class="forecast-data">${forecast.condition}</span>
        </span>
        `;

        currentRef.appendChild(container);
    }

}

attachEvents();