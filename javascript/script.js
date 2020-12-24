var mobiles = [
	{
		photo: "_pic1.jpg",
		name: "Xiaomi A4",
		price: 2000
    }, {
		photo: "_pic2.jpg",
		name: "Xiaomi A3",
		price: 4000
    }, {
		photo: "_pic3.jpg",
		name: "Xiaomi A5",
		price: 3000
    }, {
		photo: "_pic4.jpg",
		name: "Xiaomi A6",
		price: 6000
    }
];

var cartItems = [{
	photo: "_pic1.jpg",
	name: "Xiaomi A4",
	price: 2000,
	quan: 1
}];


function load_cart() {
	let items = document.getElementById("items");
	let temp = '';
	for (let i in cartItems) {
		temp += '<div class="item"><div class="image"><img src="images/' + cartItems[i].photo + '" width="100%" style="z-index: 0;border-top-left-radius: 10px;border-top-right-radius: 10px;"><button class="delete" onclick="remove(' + i + ')" title="delete"></button></div><div class="text name">' + cartItems[i].name + '</div> <div class="text quan">quantity&nbsp&nbsp&nbsp&nbsp    <input id="q' + i + '" type="number" min="1" value="1" onchange="update(' + i + ')"></div><div class="text quan"><span id="p' + i + '">' + cartItems[i].price + ' </span>&nbsp&nbspEGP</div></div>';
	}
	items.innerHTML = temp;
}

function updateTotals() {
	let subtotal = document.getElementById("subTotal");
	let tax = document.getElementById("tax");
	let grand = document.getElementById("grand");
	let temp = 0;
	for (let i in cartItems) {
		temp += cartItems[i].quan * cartItems[i].price;
	}
	subtotal.innerHTML = temp;
	tax.innerHTML = temp * .1;
	grand.innerHTML = Math.round(temp * 1.1);
}

function remove(pos) {
	cartItems.splice(pos, 1);
	load_cart();
	updateTotals();
}

function addToCart() {
	alert("sad");
	load_cart();
	updateTotals();
}

function load_mobiles() {

	let main = document.getElementById("mob");
	let temp = '';
	for (let i in mobiles) {
		temp += '<div class="item" style="width: 20%;margin-bottom: 0"> <div class="image"><img src="images/' + mobiles[i].photo + '" width="100%" style="border-top-left-radius: 10px;border-top-right-radius: 10px;"></div><div style="width: 70%;float: left"><div class="text name">'++'</div> <div class="text quan"><span id="p' + i + '">' + mobiles[i].price + '</span>EGP</div></div><button class="buadd" onclick="addItem(m' + i + ')"></button></div>'
	}
	main.innerHTML = temp;
}

function loadIndex() {
	load_mobiles();
	//    load_labtops();
}



function addItem(item_and_pos) {
	let item = item_and_pos[0];
	let pos = parseInt(item_and_pos[1]);
	if (item == 'm') {
		//problem here 
		cartItems.push({
			photo: mobiles[0].photo,
			name: mobiles[0].name,
			price: mobiles[0].price,
			quan: 1
		});
		alert("added");
	}
}
