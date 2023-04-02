let menu_list = document.getElementById('Menu-list')
let orders_list = document.getElementById('orders-list')
let sum = document.getElementById('sum')
let items_count=document.getElementById('items-count')

const renderMenuItem=(product)=>{
    return`
       <div class="food-card" data-product='${JSON.stringify(product)}' onclick="onClickCard(event)">
    <img class="food-img" src="${product.img}">
    <div>
        <div>${product.title}</div>
        <div>${product.price} som</div>
    </div>
</div> 
    `
}
const renderOrderItem=(orderItem)=>{
    return`
       <li class="order-item">
        <div>${orderItem.title}</div>
        <span>${orderItem.count}</span>
        <span>${orderItem.price} </span>
        <span onclick="onDelete(event)" data-order='${JSON.stringify(orderItem)}'class="delete-btn">🗑</span>     
</li> 
    `
}

const renderMenuList =(List)=>{
    let items =[]
    List.map((item,index)=>{
        items.push( renderMenuItem(item))
    });
    menu_list.innerHTML=items.join('')
}
const renderOrders =(List)=>{
    let items =[]
    order_basket.map((item,index)=>{
        items.push( renderOrderItem(item))
    });

    orders_list.innerHTML=items.join('')   
}
const onClickCard=(event)=>{
let card = JSON.parse(event.currentTarget.dataset.product) 
let currentIndex = order_basket.findIndex((el)=>el.id == card.id)

if(currentIndex == -1){
    order_basket.push({
        ...card,
        count:1
    })
}else{
    order_basket[currentIndex].count++
    order_basket[currentIndex].price += card.price
}
onSolve()
gotItem()
renderOrders(order_basket)
}
const onDelete=(event)=>{
    let current_order = JSON.parse(event.currentTarget.dataset.order)
    let currentIndex =order_basket.findIndex(el=> el.id == current_order.id)
    let item_price = menu_items.find(el=>el.id == current_order.id).price
    if(current_order.count > 1){
        order_basket[currentIndex].count--
        order_basket[currentIndex].price -= item_price
    }else {
        order_basket.splice(currentIndex,1 )
        renderOrders(order_basket)
    }

    onSolve()
    gotItem()
    renderOrders(order_basket)

 }
const onSolve=()=>{
    sum.innerHTML = order_basket.reduce((it,{
        price
    }) => it + price,0)
    
}
const gotItem = () => {
    items_count.innerHTML = order_basket.reduce((it, {
        count
    }) => it + count, 0)
}
 const onClear =(e)={
   
 }
//  const clear = (event) => {
//     let can = document.getElementById("orders-list");
//     let sum = document.getElementById("sum");
//     sum.innerHTML = 0;
//     let all = document.getElementById("items-count");
//     items_count.innerHTML = 0;
//     console.log(can);
//     can.remove();
//   };
  
//   btn.addEventListener("click", clear);
renderMenuList(menu_items);
// const onDelete=(event)=>{
//     let order = JSON.parse(event.currentTarget.dataset.product) 
// let currentIndex = order_basket.findIndex(el=>el.id == order.id)
//     order_basket.splice(currentIndex,1);
//     renderOrders(order_basket)
//     onSolve()
//     gotItem() 
// };

// const close = document.getElementsByClassName('.delete-btn');
// for(let i = 0; i<close.length; i++){
//     close[i].addEventListener('click',()=>{
//         close[i].parentElement.style.opacity=0
//     })
// }
// order_basket.value="";
// const onDelete=(event)=>{
//     let order = JSON.parse(event.currentTarget.dataset.order);
//     let currentIndex = orders_basket.findIndex((el)=>el.id == order.id)
   
//     if(order.count > 1){
//         orders_basket[currentIndex].count --
//         orders_basket[currentIndex].price -= items_count
       
        
//     }else{
//         orders_basket.splice(currentIndex,1);
//         renderOrders(order_basket)
//     }
//     onSolve()
//     gotItem()
//     renderOrders(order_basket)
// }




