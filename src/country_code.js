const CountryCodes = require('country-code-info');

export default function getCode(country_name){
    let country = CountryCodes.findCountry({name:country_name});
    if(country == null){
        return ''
    }
    return country.a2.toLowerCase()
}

