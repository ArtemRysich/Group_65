// 94a040c94bab4dcabf9130808222712
// https://uk.wikipedia.org/wiki/SOAP
// https://www.postman.com/downloads/
// https://uk.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D1%96%D0%B2_%D1%81%D1%82%D0%B0%D0%BD%D1%83_HTTP#4xx_%D0%9A%D0%BB%D1%96%D1%94%D0%BD%D1%82%D1%81%D1%8C%D0%BA%D0%B0_%D0%BF%D0%BE%D0%BC%D0%B8%D0%BB%D0%BA%D0%B0
// https://www.weatherapi.com/docs/
// https://api.privatbank.ua/#p24/exchange
// https://handlebarsjs.com/guide/#what-is-handlebars
// https://swapi.dev/
// https://www.udemy.com/

//  CRUD
// C - POST
// R - GET
// U - PUT PATCH
// D - DELETE


const form = document.querySelector('.js-weather');
const list = document.querySelector('.js-list')

form.addEventListener('submit', onSearch)

function onSearch(evt) {
    evt.preventDefault()
    const {
        query: {
            value: query
        },
        days: {
            value: days
        }
    } = evt.currentTarget.elements;

    if(!query){
        return alert('add value')
    }

    weatherAPI(query, days)
    .then(data => list.innerHTML = createMarkup(data.forecast.forecastday))
    .catch(err => list.innerHTML = createErrorMarkup())

}

function weatherAPI(query, days) {
    const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
    const API_KEY = '94a040c94bab4dcabf9130808222712';
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&days=${days}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }

            return resp.json()
        })
}

function createMarkup(arr) {
    return arr.map(({
            day: {
                condition: {
                    icon,
                    text
                },
                avgtemp_c
            },
            date
        }) =>
        `<li>
        <img src="${icon}" alt="${text}">
        <h3>${text}</h3>
        <h2>Дата ${date}</h2>
        <h4>Температура ${avgtemp_c}</h4>
        </li>`
    ).join('')
}

function createErrorMarkup(){
    return `<li><img src="https://www.shutterstock.com/image-vector/web-banner-error-400-bad-260nw-1157766460.jpg" alt="Bad request"></li>`
}