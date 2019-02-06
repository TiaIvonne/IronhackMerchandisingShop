// function deleteItem(e){

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {
// function createQuantityInput()
// function getPriceByProduct()
// }

// function createQuantityInput(){
 
// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }



// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };

// Data base of products
const priceProduct = document.getElementsByClassName("price-span")
const quantityProduct = document.getElementsByClassName("quantity-product")
const subTotalProduct = document.getElementsByClassName("subtotal-product")


const priceProductNew = document.getElementsByClassName("price-span")[0].innerText
const quantityProductNew = quantityProduct.value;

document.getElementById("calcTotal").addEventListener("click",function(){
  var allRows = document.getElementsByClassName("row")
  var completeTotal = 0;

    for (let i = 0;i < allRows.length; i++ ){
    var quantity = allRows[i].getElementsByClassName("price").innerHTML
    var quantity = allRows[i].getElementsByClassName("quantity")[0].value

    var subTotalNode = allRows[i].getElementsByClassName("subtotal")[0]

    quantity =  parseInt(quantity)
    price = parseInt(price)
    var subTotal = quantity * price;
    subTotalNode.innerHTML = subTotal;

    completeTotal += subTotal;
    }
  document.getElementById("complete-total").innerHTML=completeTotal;


  

  // document.getElementById("add-item").addEventListener("click", function){
  //   var price = document.getElementById("new-item").value
  //   var name = document.getElementById("new-name").value
  //   addItem(name,price);
  // })

// });


   
<!-- <h3>add new item</h3> 
<div class ="new item">
<input placeholder ="price" id ="new-price" type="text">
<input placeholder ="name" id ="new-name" type="text">
<button id="add-item">Add item</button>
</div> -->







// const productCost = parseInt(document.getElementsByClassName("price-span")[0].textContent);
// const productQuantity = document.getElementsByClassName("quantity-input")[0].value;


//Declare a function which trigger button calc
//get a element from HTML and calculates a cost

document.getElementsByClassName("calcTotal").addEventListener("click",function(){
 
 
  const productCost = parseInt(document.getElementsByClassName("price-span")[0].textContent);
  const productQuantity = document.getElementsByClassName("quantity-input")[0].value;
  var total = productCost * productQuantity;
  console.log(total)

  document.getElementsByClassName("subTotal")[0].innerHTML = "$" + total;


  
});


//Declare a function for delete button
//get a wrap div class from HTML and delete entire section
document.getElementsByClassName("btn-delete").addEventListener("click", function(){
  var element = document.getElementsByClassName("product-section")[0];
  element.parentNode.removeChild(element);
});