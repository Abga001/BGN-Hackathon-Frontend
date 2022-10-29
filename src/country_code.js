const CountryCodes = require('country-code-info');

export default function getCode(country_name){
    let country = CountryCodes.findCountry({name:country_name}).a2;
    return country.toLowerCase()
}

