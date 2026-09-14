const searchImput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json()) 
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistname = document.getElementById('artist-name');
    const artistimage = document.getElementById('artist-img');

    result.array.forEach(element => {
        artistname.innerText = element.name;
        artistimage.src = element.urlImg;
        
    });
    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function(){
    const searchTerm = searchImput.value.toLoweCase();
    if (searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
})