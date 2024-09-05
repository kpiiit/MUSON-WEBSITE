
const columns=document.getElementsByClassName('column');
for(let i=0;i<columns.length;i++){
columns[i].addEventListener('mouseover',function(){
  this.style.backgroundColor='gray';});

  columns[i].addEventListener('mouseout',function(){
    this.style.backgroundColor='#000000';});}
const text = "Honey Singh"; 
let i = 0; 
const delay = 100; 

function type() {
  const element = document.getElementById("Typewriter"); 
  const currentText = text.substring(0, i + 1); 
  element.innerHTML = currentText; 
  i++; 

  if (i >= text.length) {
    clearInterval(intervalId);
  }
}


const intervalId = setInterval(type, delay); 

var image = document.getElementById('spotlight-image');
var transitionDuration = '0.2s'; 
var easingFunction = 'ease-in-out'; 

window.addEventListener('load', function() {
    image.classList.add('grow','zoom-in');
    image.style.transition = 'all ' + transitionDuration + ' ' + easingFunction;
    setTimeout(function() {
      image.classList.remove('grow','zoom-in');
    }, parseInt(transitionDuration) * 1000 + 1000);
});
  
var reviews = []; 

function submitReview() {
    var name = document.getElementById("name").value;
    var review = document.getElementById("review").value;
    var rating = document.querySelector('input[name="rating"]:checked').value;
    var reviewdry = {name: name, review: review, rating: rating}; 
    reviews.push(reviewdry); 
    var table = document.getElementById("reviews-table");
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var reviewCell = row.insertCell(1);
    var ratingCell = row.insertCell(2);
    nameCell.innerHTML = name;
    reviewCell.innerHTML = review;
    ratingCell.innerHTML = rating + " stars";
}

function countdown() {
    const now = new Date().getTime();
    const targetDate = new Date("2023-06-30T00:00:00").getTime();
    const remainingTime = targetDate - now;
  
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }
  
  setInterval(countdown, 1000);
  
  