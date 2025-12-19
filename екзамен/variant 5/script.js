const data = {
    ukraine: ["Kyiv", "Lviv", "Odesa"],
    poland: ["Warsaw", "Krakow", "Gdansk"],
    usa: ["New York", "Los Angeles", "Chicago"]
};

const country = document.getElementById("country");
const cities = document.getElementById("cities");
const result = document.getElementById("result");

function updateResult() {
    const countryText = country.options[country.selectedIndex].text;
    const cityText = cities.value || "—";

    if (country.value) {
        result.textContent = countryText + ", " + cityText;
    }
}

country.addEventListener("change", () => {
    cities.innerHTML = '<option value="">-- Оберіть місто --</option>';

    data[country.value].forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        cities.appendChild(option);
    });

    updateResult();
});

cities.addEventListener("change", updateResult);
