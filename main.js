const navEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuBurger=document.querySelector('.menu');
const mobilMenu=document.querySelector('.mobile-menu');
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart');
const ShoppingCartContainer=document.querySelector('#ShoppingCartContainer');
const cardsContainer=document.querySelector('.cards-container');
const productDetailContainer=document.querySelector('#productDetail')
const productDetailCloseIcon=document.querySelector(".product-detail-close")



navEmail.addEventListener('click',toggleDesktopMenu)
menuBurger.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoShoppingCartContainer);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside)
function toggleDesktopMenu(){
    const isShoppingCartContainerClosed=ShoppingCartContainer.classList.contains('inactive');   
    if(!isShoppingCartContainerClosed){
        ShoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isShoppingCartContainerClosed=ShoppingCartContainer.classList.contains('inactive');   
    if(!isShoppingCartContainerClosed){
        ShoppingCartContainer.classList.add('inactive')
    }
    closeProductDetailAside();
    mobilMenu.classList.toggle('inactive')
}





function toggleCarritoShoppingCartContainer(){
    //esta variable captura el estado del mobilMenu
    //si contiene la clase inactive esta cerrado
    //si no la contiene esta abierto.
    const ismobilMenuClosed=mobilMenu.classList.contains('inactive');  
    //Aqui se esta preguntando si el ShoppingCartContainer esta abierto, como en nuesta
    //variable lo estmos guardando cerrado con ! lo estamos poniendo al inverso
    if(!ismobilMenuClosed){
        mobilMenu.classList.add('inactive');
    }
    //DesktopMenu
    const isDesktopmenuClose=desktopMenu.classList.contains('inactive');
    if(!isDesktopmenuClose){
        desktopMenu.classList.add('inactive');
    }
    //Product detail
    const isProductDetailClose=productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClose){
        productDetailContainer.classList.add('inactive')
    }


    ShoppingCartContainer.classList.toggle('inactive')
}
//Product detail open function
function openProductDetailAside(){
    ShoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive');



}

 function  closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
 }


const productList=[];
productList.push({
name: 'Bike',
price: 120,
Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({
    name: 'Computadora',
    price: 220,
    Image:'https://images.unsplash.com/photo-1527443195645-1133f7f28990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

    });

productList.push({
        name: 'Nintendo Switch',
        price: 225,
        Image:'https://images.unsplash.com/photo-1615680022647-99c397cbcaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmludGVuZG8lMjBzd2l0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'

        });

productList.push({
    name:'te verde',
    price:20,
    Image:'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGUlMjB2ZXJkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
})

function renderProducts(productList){

for(product of productList){
    const productCard= document.createElement('div');
    productCard.classList.add('product-card');

    const ProductImg=document.createElement('img');
    ProductImg.setAttribute('src',product.Image);
    ProductImg.addEventListener('click',openProductDetailAside)

    const productInfo= document.createElement('div');
    productInfo.classList.add('product-info');



    const producInfoDiv= document.createElement('div');

    const productName=document.createElement('p');
    productName.innerText=product.name;
    const productPrice=document.createElement('p');
    productPrice.innerText='$'+ product.price;

    producInfoDiv.appendChild(productName);
    producInfoDiv.appendChild(productPrice);

    const ProductInfoFigure=document.createElement('figure');
    const productImgCart=document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    ProductInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(producInfoDiv);
    productInfo.appendChild(ProductInfoFigure);

    productCard.appendChild(ProductImg);
    productCard.appendChild(productInfo);


    cardsContainer.appendChild(productCard);
}

}
renderProducts(productList)