const wrapper = document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn");
const searchInp = wrapper.querySelector("input");
const options = wrapper.querySelector(".options");

let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola",
            "Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba",
            "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh",
            "Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan",
            "Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga",
            "Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan",
            "Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates",
            "United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam",
            "Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchedVal = searchInp.value.toLowerCase();

    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr ? arr : `<p>Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});

