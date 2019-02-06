//function
function deleteItem(e){
  var btn = e.currentTarget;
  var button = btn.parentNode;
  var container=button.parentNode;
  container.removeChild(button);
}

function getTotalPrice(){
  var items = document.getElementsByClassName("product-line");
  var totalPrice = 0;
  for(i=0; i < items.length; i++){
    totalProductPrice = 0;
    var item = items[i];
    var price = item.querySelector(".product-price").innerText;
    var units = item.querySelector('.product-units input[name="units"]').value;

    totalProductPrice += price*units;
    totalPrice += totalProductPrice;
    
    item.querySelector('.total-product-price span').innerText = totalProductPrice + "$";
  };
document.querySelector('.total-price h1').innerText = "totalPrice " + totalPrice + '$';
return totalPrice;
}


function createQuantityInput(item){
  var quantityDiv = document.createElement('div');
  quantityDiv.classList.add('product-units');
  var quantityLabel = document.createElement('label');
  quantityLabel.htmlFor = 'Units';
  quantityLabel.innerText = 'QTY';
  quantityLabel.value = document.getElementById('new-product-price').value;
  var quantityInput = document.createElement('input');
  quantityInput.name = 'units';
  quantityInput.type = 'text';
  
  quantityDiv.appendChild(quantityLabel);
  quantityDiv.appendChild(quantityInput);
  
  item.appendChild(quantityDiv);
  

  //<div class="total-product-price"><span>0$</span></div>
  var total = document.createElement('div');
  total.classList.add('total-product-price');
  var totalSpan = document.createElement('span');
  totalSpan.innerText = '0$';
  total.appendChild(totalSpan);

  item.appendChild(total);
}

function createDeleteButton(item){
  var deleteBtnDiv = document.createElement('div');
  var deleteBtn = document.createElement('button');
  deleteBtn.name = 'deleteButton';
  deleteBtn.classList.add('btn');
  deleteBtn.classList.add('btn-delete');
  deleteBtn.innerText = 'Delete';
  deleteBtnDiv.appendChild(deleteBtn);
  item.appendChild(deleteBtnDiv);
}


function createItemNode(){
  var container = document.querySelector('.product-line');
  
  var item = document.createElement('div');
  item.classList.add('product-line');
  
  return container.appendChild(item);
}


function createNewItemRow(item){
  //extract values from imput
  var itemName = document.getElementById('new-product-name').value;
  var itemPrice = document.getElementById('new-product-price').value;
  
 
  var itemNameDiv = document.createElement('div'); 
  var itemNameSpan = document.createElement('span');
  itemNameSpan.classList.add('product-name');
  itemNameSpan.innerText = itemName;
   
  itemNameDiv.appendChild(itemNameSpan);
  item.appendChild(itemNameDiv);

    
  var itemPriceDiv = document.createElement('div'); 
  var itemPriceSpan = document.createElement('span');
  itemPriceSpan.classList.add('product-price'); 
  itemPriceSpan.innerText = itemPrice;
  
  itemPriceDiv.appendChild(itemPriceSpan);
  item.appendChild(itemPriceDiv);
    
}

function createNewItem(){

  var newItem = createItemNode();
  
  createNewItemRow(newItem);

  createQuantityInput(newItem);

  createDeleteButton(newItem);

  console.log(newItem);

}






 
 window.onload = function(){
 
    var calculatePriceButton = document.getElementById('calc-prices');
    var createItemButton = document.getElementById('create');
   var deleteButtons = document.getElementsByClassName('btn-delete');
  
   calculatePriceButton.addEventListener('click', getTotalPrice); 
   
  createItemButton.addEventListener('click',createNewItem);
   
   
   for(var i = 0; i<deleteButtons.length ; i++){
     deleteButtons[i].addEventListener('click',deleteItem);
   }
 };






  





