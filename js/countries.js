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
//in general system
/* const getHTML = country =>{
    return `
    <div class='country'>
       <h1>${country.name.common}</h1>
       <img src="${country.flags.png}" alt="...">
    </div>
     
    `
} */

//in destructuring system 1
/* const getHTML = country =>{
    const {name,flags} = country
    return `
    <div class='country'>
       <h1>${name.common}</h1>
       <img src="${flags.png}" alt="...">
    </div>
     
    `
} */
//system 2
const getHTML = ({name,flags,area,region}) =>{
    return `
    <div class='country'>
       <h1>${name.common}</h1>
       <p>Area : ${area}</p>
       <p>Subcontinent : ${region}</p>
       <img src="${flags.png}" alt="...">
    </div>
     
    `
}


loadAllCountries();