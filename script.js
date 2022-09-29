

  AOS.init();
  const resDiv = document.querySelector('#rand_advice');
  const resBtn = document.querySelector('#new_advice');


  resBtn.addEventListener('click', () => {
    getAdvice();
    getQuote();
    getKanyeQuote();
    getDadJoke() ;
    userAdvice()
  });

  window.onload = () => {
  const fetched = document.querySelectorAll(".fetched")
  for (let i=0;i<fetched.length;i++){
    fetched[i].innerHTML=" ";}
  getAdvice();
  getQuote();
  
  };

//random advice Api fetch
  function getAdvice() {

    fetch('https://api.adviceslip.com/advice')
    
    .then(response => {
      return response.json(); })
    .then(adviceData => {
      const Adviceobj = adviceData.slip;
      resDiv.innerHTML = `<p>${Adviceobj.advice}</p>`; })
    .catch(error => {
      console.log(error);
    });
  }

//random Api fetch using random 
  function getQuote() {
      fetch("https://type.fit/api/quotes")
      .then(function(response) {
      return response.json();
      })
      .then(function(data) {
      console.log(data);
      console.log(data[200]);
      let randomNumber = Math.floor(Math.random()*data.length);

      let headingElement = document.getElementById('quote');
      headingElement.innerHTML = data[randomNumber].text ;

      let nameElement = document.getElementById('author');
      nameElement.innerHTML = data[randomNumber].author;
      });

  }
//Kanye quote Api fetch
  function getKanyeQuote() {
      fetch("https://api.kanye.rest/")
      
      .then(function(response) {
          return response.json();
          })
          .then(function(data) {
          console.log(data);

          let nameElement = document.getElementById('Kanye_quote');
          nameElement.innerHTML = data.quote+', The OG kanye';
      })


  }
//Dad joke Api fetch
  function getDadJoke() {
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5b996519d0msh09a09569519f2d2p1f5a05jsn22f98dbdce5e',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
      }
    };
    
    fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
      .then(function(response) {
          return response.json();
          })
          .then(function(data) {
          console.log(data);
          let nameElement = document.getElementById('Joke_setup');
          nameElement.innerHTML = data.body[0].setup;

          let headingElement = document.getElementById('Joke_punchline');
          headingElement.innerHTML = data.body[0].punchline;     

      })
      .catch(err => console.error(err));
  }


//user advice input  
      var form = document.getElementById('sheetdb-form');
      form.addEventListener("submit", e => {
      e.preventDefault();
      fetch(form.action, {
          method : "POST",
          body: new FormData(document.getElementById("sheetdb-form")),})
      .then(
          response => response.json())
      .then((html) => {
      
      alert('success') });
      });
//P5 visualisation
      function setup() {
        createCanvas(600, 600);
        noStroke();
      }
      function draw() {
        background(36);
        ellipse(mouseX, 18, 100, 100);    // Top circle
        ellipse(mouseX+ 20, 200, 100, 100); // Middle circle
        ellipse(mouseX-25, 500, 100, 100); // Bottom circle
      }


// !-- using sheetsdb -->

// use to create an api for you google sheets https://sheetdb.io/

function userAdvice() {
  var apiUrl = 'https://sheetdb.io/api/v1/mtex3tmnj0lbn'; //add you api here
  fetch(apiUrl)
  .then(resp => resp.json())
  .then(data => {

      let randomNumber1 = Math.floor(Math.random()*data.length);
      info=Object.values(data[randomNumber1])
      console.log(info)
      let nameElement = document.getElementById('name');
        nameElement.innerHTML = info[0];
      let headingElement = document.getElementById('country');
        headingElement.innerHTML = info[1]+",";
      let pElement = document.getElementById('message');
        pElement.innerHTML = info[2];
  })
}























/////////////
// fetch('https://api.adviceslip.com/advice')
// 	.then(response => response.json())
// 	.then(response => console.log(response))
	
//     .then(data => {

//     console.log(data);
//     let headingElement = document.getElementById('quote');
//     headingElement.innerHTML = data.slip.advice ;

//         // let SetupJoke = data.body[0].setup;
//         // let Punchline = data.body[0].punchline;
//         // console.log(data);
//         // console.log(SetupJoke);
//         // console.log(Punchline);
//         //console.log(body[2]);
      

//         // let randomNumber = Math.floor(Math.random()*jokeArray.length);

//         // let nameElement = document.getElementById('a-joke');
//         // nameElement.innerHTML = jokeArray[randomNumber].name;
//     })
//     .catch(err => console.error(err));










// window.addEventListener('load', function () {
//     console.log('page is loaded');
//     //https://pokeapi.co/api/v2/pokemon?limit=151&offset=0
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
//     .then(response => response.json())
//     .then(data => {
//         let pokemonArray = data.results;
//         let randomNumber = Math.floor(Math.random()*pokemonArray.length);

//         let nameElement = document.getElementById('pokemon-name');
//         nameElement.innerHTML = pokemonArray[randomNumber].name;
//     })

//     let button = document.getElementById('pokemon-button');
//     button.addEventListener('click', function() {
//         let inputText = document.getElementById("pokemon-input").value;

//         let API_URL = "https://pokeapi.co/api/v2/pokemon/" +  inputText;
//         fetch(API_URL)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);

//             //populating the info
//             let headingElement = document.getElementById('p-name');
//             headingElement.innerHTML = data.name;

//             let weightElement = document.getElementById('p-weight');
//             weightElement.innerHTML = data.weight;

//             let imageElement = document.getElementById('p-img');
//             imageElement.src = data.sprites.front_default;

//             let typeElement = document.getElementById('p-type');
//             let types = data.types;
//             console.log(data.types); //moltres
//             for(let i=0; i< data.types.length;i++) {
//                 let elt = document.createElement('p');
//                 elt.innerHTML = data.types[i].type.name;
//                 typeElement.appendChild(elt);
//             }


//         })
//         .catch(err => {
//             console.log("error is: " + err);
//             let headingElement = document.getElementById('p-name');
//             headingElement.innerHTML = "Could not find pokemon! try again.";

//             let weightElement = document.getElementById('p-weight');
//             weightElement.innerHTML = "";

//             let imageElement = document.getElementById('p-img');
//             imageElement.src = "";
//         })

//     })

// })

