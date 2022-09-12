// allows the user to edit background by scrolling
 window.addEventListener('scroll', ()=> {
    console.log(window.scrollY, document.body.scrollHeight, window.innerWidth, window.innerHeight, window.scrollY *(window.innerWidth/window.innerHeight));
    let boxElt = document.getElementById("carPhoto");
    boxElt.style.left =window.scrollY*(window.innerWidth/(document.body.clientHeight-window.innerHeight)) +'px';
  
//declare and initialize the lists of the cars and the songs
var carList = [
    "car1",
    "car2",
    "car3",
    "car4",
    "car5"
  ];
  
var songList = [
   "daynnight",
    "song1",
    "song2",
    "song3",
    
];
//declare and initialize the counters
  var counter = 0;
  var counter1=0;
  

//declaring the two functions

  function rotate() {
    //display the photo in the index currently called by the counter
    document.getElementById("carPhoto").src =
      "images/" + carList[counter] + ".png";
  
    if (counter >= carList.length - 1) {
      counter = 0;
    } else {
      counter = counter + 1;
    }
  }


  function play() {

    document.getElementById("music").src =
      "songs/" + songList[counter1] + ".mp3";
  
    if (counter1 >= songList.length - 1) {
      counter1 = 0;
    } else {
      counter1 = counter1 + 1;
    }
  }
  
  //The button for choosing the cars
  let button = document.getElementById('button');
  //attach the event listener
  button.addEventListener('click', rotate);
  console.log("hello");


  //The button for choosing the cars
  let btn = document.getElementById('btn');
  //attach the event listener
  btn.addEventListener('click', play);
  console.log("song");



})


