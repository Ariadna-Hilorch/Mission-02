
//changing pictures after clicking on them
//changing elements in the DOM
const dayBeach = document.getElementById("day-beach");
const nightBeach = document.getElementById("night-beach");


//waiting for an event to execute a function
dayBeach.addEventListener("click", () => {
    dayBeach.style.display = "none";
    nightBeach.style.display = "block";
});

nightBeach.addEventListener("click", () => {
    nightBeach.style.display = "none";
    dayBeach.style.display = "block";
});







//-----Beach packing list-----
 
const itemInputEl = document.getElementById("item");
const quantityInputEl = document.getElementById("quantity");
const packingListDisplayEl = document.getElementById("packing-list-display");
 

//using a variable to hold the list
const packingList = [];
// "sunscreen", "sunglasses", "cooler", "beers", "chairs", "towels", "speaker"
/* [
{item: "sunscreen", quantity: 1},
{item: "towels", quantity: 4},
{item: "cooler", quantity: 1},
{item: "beers", quantity: 12}
   ]
*/


 
//adding an item to the list
function addItem (event) {
   event.preventDefault();//preventing a page reload
   console.log(itemInputEl.value);
   console.log(quantityInputEl.value);


 
//push method for insert value into an array
// i can see below the list of items im packing 
   packingList.push({
     item: itemInputEl.value,
     quantity: quantityInputEl.value,
 });
 
     console.log(packingList);
   //after add to the list, i want to display
   displayListItems();
}
 
 
 
//displaying the list
function displayListItems () {
 //clear the display every time i add something to the list
 packingListDisplayEl.innerHTML = "";
 
 
//every time button clicked, will display all the elements from packing list
//for...of... for loop through the array
  for (const itemEl of packingList){
     packingListDisplayEl.innerHTML =
     packingListDisplayEl.innerHTML +
     `${itemEl.item} x ${itemEl.quantity} <span onclick="deleteItem(${packingList.indexOf(itemEl)})">&#10060</span><br/>`;
     
     console.log(packingList.indexOf(itemEl))//to get the index number after the deleted item
  }
 
 console.log(packingList[0].item, packingList[0].quantity);
}
 

 
//remove item from the list when clicking on the red icon
function deleteItem (itemToDelete) {
 console.log("Delete this item");
 
 //use splice for deleting an item in the packing list
 packingList.splice(itemToDelete,1)
 console.log(packingList);
 
 //call the display function to display the updated packing list
 displayListItems()
}











// -----Packing Basket-----


const packingBasketEl = document.getElementById("packing-basket");
const itemsStillToPackEl = document.getElementById("items-still-to-pack-display");

//array of items inside the packing basket
const packingBasket = ["sunglasses", "towels", "speaker", "beers", "cooler", "sunscreen", "chairs"];



function addToBasket(event) {
    event.preventDefault();//to prevent my console for disappearing


    console.log("Button clicked");
    console.log(packingBasketEl.value)
    console.log(typeof packingBasketEl.value)


    //split to divide a string into a list => it returns an array
    //map over each item in the array and trims any whitespace
    const basketInput = packingBasketEl.value.toLowerCase();
    const basket = basketInput.split(",").map(item => item.trim());

    console.log(packingBasketEl.value.toLowerCase().split(","))//i use the comma in the string otherwise each letter will be divided

    if (basket.length === 0) {
        itemsStillToPackEl.innerHTML = "Please enter items to pack.";
        return;//return to stop execution when there are no more items to pack
    }

    //filter method to create a new array (itemsStillToPack)
    //includes method to check if the item from packingBasket is not included in the basket array
    const itemsStillToPack = packingBasket.filter(item => !basket.includes(item.toLowerCase()));

   

    //if itemStillToPack array is empty, then display a success message
    if (itemsStillToPack.length === 0) {
        itemsStillToPackEl.innerHTML = "YOU ARE READY TO GO TO THE BEACH!";
    } else {
        itemsStillToPackEl.innerHTML = "You still need to pack the following items: " + itemsStillToPack.join(", ");
        //array.join will return a new string
    }
}


  
   

