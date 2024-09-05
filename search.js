const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const durationInput = document.getElementById('duration-filter');
const explicitInput = document.getElementById('explicit-filter');
const clearButton = document.getElementById('clear-filters');
const resultsContainer = document.getElementById('results-container');
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  const maxDuration = durationInput.value;
    const explicit = document.getElementById('explicit-filter').value;
  const apiUrl = `https://itunes.apple.com/search?term=${searchTerm}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const filteredResults = data.results.filter(result => {
            if (explicit === 'Explicit' && result.trackExplicitness !== 'explicit') {
              return false;
            }
            else if (explicit === 'Cleaned' && result.trackExplicitness === 'explicit') {
              return false;
            }
            const duration = parseFloat(result.trackTimeMillis) / 1000 / 60;
            if (duration > maxDuration) {
              return false;
            }
            return true;
          });
      resultsContainer.innerHTML = '';
      for(let i=0;i<Math.min(10, filteredResults.length);i++) {
        const result=filteredResults[i];
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        const img = document.createElement('img');

        img.src = result.artworkUrl100;
        img.alt = 'Album Poster';
        img.style.width = '150px'; 
        img.style.height = '150px'; 

        const resultDetails = document.createElement('div');
        resultDetails.classList.add('result-details');

        const h3 = document.createElement('h3');
        h3.innerText = result.trackName;
        h3.style.fontSize = '24px'; 

        const p1 = document.createElement('p');
        p1.innerText = result.artistName;
        p1.style.fontSize = '18px'; 

        const p2 = document.createElement('p');
        p2.innerText = result.collectionName;
        p2.style.fontSize = '16px'; 

        const audio = document.createElement('audio'); 
        audio.src = result.previewUrl; 
        audio.controls = true;
        audio.currentTime = 0; 
        audio.duration = 30; 

        resultDetails.appendChild(h3);
        resultDetails.appendChild(p1);
        resultDetails.appendChild(p2);

        resultItem.appendChild(img);
        resultItem.appendChild(audio); 
        resultItem.appendChild(resultDetails);

       
        resultsContainer.appendChild(resultItem);
      }});
    }
);

clearButton.addEventListener('click', () => {
  searchInput.value = '';
  durationInput.value = '';
  explicitInput.checked = false;
  resultsContainer.innerHTML = '';
});

