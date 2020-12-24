var cartItems = [
	{
		name: "Apple iPhone 6s",
		photo: "6s.JPG",
		price: 6888,
		kind:"mob",
		quan:1
	}, {
		name: "Apple iPhone Xs",
		photo: "Xs_Max.JPG",
		price: 27000,
		kind:"mob",
		quan:1
	}, {
		name: "Dell Inspiron 13 7370",
		photo: "7370.JPG",
		price: 21199,
		kind:"lab",
		quan:1
	}, {
		name: "HP Pavilion 15-CS1001NE",
		photo: "cs1001.JPG",
		price: 21499,
		kind:"lab",
		quan:1
	}, {
		name: "LG 32 Inch",
		photo: "32.JPG",
		price: 3899,
		kind:"tv",
		quan:1
	}, {
		name: "LG 43 Inch",
		photo: "43.JPG",
		price: 5999,
		kind:"tv",
		quan:1
	}, {
		name: "Fresh 2.5 HP",
		photo: "2.5hP.JPG",
		price: 10600,
		kind:"ac",
		quan:1
	}];
//add to cart functions
function load_cart() {
	let items = document.getElementById("items");
	let temp = '';
	for (let i in cartItems) {
		temp += '<div class="item"><div class="image"><a href="product.html?'+cartItems[i].kind+'='+cartItems[i].name+'"><img src="images/' + cartItems[i].photo + '" width="100%" style="z-index: 0;border-top-left-radius: 10px;border-top-right-radius: 10px;"></a><button class="delete" onclick="remove(' + i + ')" title="delete">-</button></div><div class="text name">' + cartItems[i].name + '</div> <div class="text quan">quantity&nbsp&nbsp&nbsp&nbsp    <input id="q' + i + '" type="number" min="1" value="1" onchange="update(' + i + ')"></div><div class="text quan"><span id="p' + i + '">' + cartItems[i].price + ' </span>&nbsp&nbspEGP</div></div>';
	}
	items.innerHTML = temp;
}

function load_totals() {
	let subtotal = document.getElementById("subTotal");
	let tax = document.getElementById("tax");
	let grand = document.getElementById("grand");
	let temp = 0;
	for (let i in cartItems) {
		temp += cartItems[i].quan * cartItems[i].price;
	}
	subtotal.innerHTML = temp;
	tax.innerHTML = Math.round(temp * .1);
	grand.innerHTML = Math.round(temp * 1.1);

}

function load_addtocart() {
	load_cart();
	load_totals();
}

function update(pos) {
	cartItems[pos].quan = parseInt(document.getElementById('q' + pos).value);
	load_totals();
}

function remove(pos) {
	cartItems.splice(pos, 1);
	load_addtocart();
	if(cartItems.length==0){
		document.getElementById("items").innerHTML="<h2>press <a style='color:#EEFF00;' href='index.html'>here</a> to go to the main page</h2>";
	}
}
//---------------
