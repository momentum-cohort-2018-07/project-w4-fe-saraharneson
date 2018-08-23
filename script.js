import request from 'superagent'
import 'shoelace-css/dist/shoelace.css'
import './styles.css'

// PARSE EXAMPLE
// request.get("https://itunes.apple.com/search?term=jack+johnson")
// .then(response => JSON.parse(response.text))
// .then(body => console.log(body.resultCount))

// https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

// artworkUrl100

// https://itunes.apple.com/search?term=old+97s&entity=song

document.getElementById('searchBandForm').addEventListener('submit', event => {
  event.preventDefault()

  let searchTerm =
        document.getElementById('searchField').value.replace(' ', '+').trim()

  request.get(`https://itunes.apple.com/search?term=${searchTerm}`)
    .then(response => JSON.parse(response.text))
    .then(body => console.log(body.results))
//   let results = body.results
})
