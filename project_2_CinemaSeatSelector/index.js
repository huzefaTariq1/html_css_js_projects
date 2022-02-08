// getting dom elements

const mainContainer=document.querySelector(".container");
const seats=document.querySelectorAll(".row .seat:not(.booked)")
const movieSelector=document.getElementById("MovieSelector")
let moviePrices=+movieSelector.value
const selectcount=document.getElementById("count");
const totalprice=document.getElementById("total");
console.log(moviePrices)


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
  let totalseat=selectedseats.length;
  selectcount.innerText=totalseat;
  let price=totalseat*moviePrices;
  totalprice.innerText=price;
  
}




// event listner for movie selector

movieSelector.addEventListener('change',(e)=>{
   moviePrices=+e.target.value
   console.log(moviePrices)
})




