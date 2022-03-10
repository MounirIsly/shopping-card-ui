var count = 0;
const itemQty = document.getElementById('number');
itemQty.innerHTML = count;
const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');
buttonPlus.addEventListener('click', ()=>{
    count++;
    itemQty.innerHTML = count;
    var price = 150;
    const unitPrice = document.querySelector('.unit-price');
    unitPrice.innerHTML = price;
    const totalPrice = document.querySelector('.total-price');
    let total = price * count;
    totalPrice.innerHTML = total;
})
buttonMinus.addEventListener('click', ()=>{
    count--;
    if(count <= 0) {
        count = 0;
    }
    itemQty.innerHTML = count;
    var price = 150;
    const unitPrice = document.querySelector('.unit-price');
    unitPrice.innerHTML = price;
    const totalPrice = document.querySelector('.total-price');
    let total = price * count;
    totalPrice.innerHTML = total
})
const listItems = document.getElementById('items')
const deleteItem = document.querySelector('.delete');
deleteItem.addEventListener('click', ()=>{
     listItems.style.display = 'none';
     document.write('<h2 style="color: red; text-align: center">There are no items</h2>')
})

