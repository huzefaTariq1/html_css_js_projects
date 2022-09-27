// getting dom elements

const mainContainer=document.querySelector(".container");
const seats=document.querySelectorAll(".row .seat:not(.booked)")
const movieSelector=document.getElementById("MovieSelector")
let moviePrices=+movieSelector.value
const selectcount=document.getElementById("count");
const totalprice=document.getElementById("total");

//geeting data from browser local storage
populateUi();

function populateUi(){
   const selectedSeatIndexs=JSON.parse(localStorage.getItem('selectedSeatsIndex'))
   console.log(selectedSeatIndexs)
}

// event listner for seat selection 

mainContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains("seat")
    && (!e.target.classList.contains("booked"))){
      // add event which add new class to selected seat by toogle

      e.target.classList.toggle("selected")
      updateCount()
    }
})


const updateCount=(a)=>{
  const selectedseats=document.querySelectorAll(".row .seat.selected")
  //assigning indexes to seat
    const selectedSeatIndexs=[...selectedseats].map((seat)=>{return[...seats].indexOf(seat)})
   //sending seatsIndexes to browser local storage
    localStorage.setItem("selectedSeatsIndex",JSON.stringify(selectedSeatIndexs))
  let totalseat=selectedseats.length;
  selectcount.innerText=totalseat;
  let price=totalseat*moviePrices;
  totalprice.innerText=price;
  
}





// event listner for movie selector

movieSelector.addEventListener('change',(e)=>{
   moviePrices=+e.target.value;
   console.log(e.target.selectedIndex)
   updateCount();

})




