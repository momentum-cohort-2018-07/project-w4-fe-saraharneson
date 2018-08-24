import request from 'superagent'
import 'shoelace-css/dist/shoelace.css'
import './styles.css'

document.getElementById('searchBandForm')
  .addEventListener('submit', event => {
    event.preventDefault()

    let searchTerm =
      document.getElementById('searchField').value.replace(' ', '+').trim()

    request.get(`https://itunes.apple.com/search?term=${searchTerm}`)
      .then(response => JSON.parse(response.text))
      .then(body => {
        console.log(body.results)
        let results = body.results
        let resultsDisplayed = document.getElementById('resultsDisplayed')
        for (let result of results) {
          resultsDisplayed.appendChild(
            makeSongPacket(result)
          )
        }
      })
  })

function makeSongPacket (result) {
  let songDiv = document.createElement('div')
  songDiv.classList.add('col-4', 'songPacket')

  let songName = document.createElement('div')
  songName.classList.add('song')
  songName.innerText = result.trackName
  songDiv.appendChild(songName)

  let bandName = document.createElement('div')
  bandName.classList.add('band')
  bandName.innerText = result.artistName
  songDiv.appendChild(bandName)

  let bandArt = document.createElement('div')
  bandArt.classList.add('art')
  bandArt.innerHTML = `<img src=${result.artworkUrl100}>`
  songDiv.appendChild(bandArt)

  return songDiv
}
