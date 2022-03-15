const loadAllCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const countriesContainer = countries.map(country => getHTML(country));
    const container =document.getElementById('countries');
    container.innerHTML = countriesContainer.join(' ');

}
const getHTML = country =>{
    return `
    <div class='country'>
       <h1>${country.name.common}</h1>
       <img src="${country.flags.png}" alt="...">
    </div>
     
    `
}


loadAllCountries();