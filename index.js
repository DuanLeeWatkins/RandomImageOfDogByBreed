'use strict';
function getDogImage(dogBreed) {
  const URL = 
  `https://dog.ceo/api/breed/${dogBreed}/images/random`

  fetch(URL)

    .then(response => {
      if(response.ok) return response.json()
      return response.json().then((e)=> Promise.reject(e))
      })
    .then(responseJson => displayResults(responseJson))
    .catch(error => {
      alert(error.message)
      });
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  
  let image = responseJson.message;
  //displays Dog breed image.
  
  let result = 
  $('.results-img').replaceWith(
    `<img src="${image}" class="results-img">`
  )
  //display the results section
   $('.results').removeClass('hidden')

  if (responseJson.status === 'error') {
    alert('Dog Breed is not found');
    $('.results').addClass('hidden');
    
  }
  
   
   
}


function watchForm() {
  $('form').submit(event => {
    console.log("App started")
    event.preventDefault();
    // capture user input here form event.
    let input = $('#dogBreed').val();
    getDogImage(input);
   
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});