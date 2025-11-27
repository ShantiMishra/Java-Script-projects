const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".Btn");
const ratingEls = document.querySelectorAll(".rating");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
       removeActive();
       selectedRating = 
        event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
         
    }) 
})

btnEl.addEventListener("click", () => {
    if(selectedRating !== ""){
         containerEl.innerHTML = `
             <strong> Thank You!</strong>;
             <br>
             <br>
             <strong>Feedback: ${selectedRating} </strong>
             <p>We'll Use Your Feedbach to Improve Our Customer Support.</p> 
         `;
    }
})

function removeActive(){
     ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
     });
}