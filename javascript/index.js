var mobiles = [
	{
		name: "Apple iPhone 6s",
		photo: "6s.JPG",
		price: 6888
	}, {
		name: "Apple iPhone Xs",
		photo: "Xs_Max.JPG",
		price: 27000
	}, {
		name: "Huawei Mate 9",
		photo: "Mate9.JPG",
		price: 5999
	}, {
		name: "Huawei P10 Lite",
		photo: "P10.JPG",
		price: 5739
	}, {
		name: "Huawei Y7 Prime",
		photo: "Y7.JPG",
		price: 2999
	}, {
		name: "Samsung Galaxy S10",
		photo: "S10.JPG",
		price: 16499
	}
];
var labtops = [
	{
		name: "Dell Inspiron 13 7370",
		photo: "7370.JPG",
		price: 21199
	}, {
		name: "HP Pavilion 15-CS1001NE",
		photo: "cs1001.JPG",
		price: 21499
	}, {
		name: "Lenovo Yoga C930",
		photo: "C930.JPG",
		price: 31999
	}, {
		name: "Dell G3 17 3779",
		photo: "3779.JPG",
		price: 28000
	}, {
		name: "Lenovo Legion Y530",
		photo: "Y530.JPG",
		price: 26999
	}, {
		name: "HP Pavilion 15-CX0012NE",
		photo: "cs1001.JPG",
		price: 20499
	}
];
var tv = [{
	name: "LG 32 Inch",
	photo: "32.JPG",
	price: 3899
	}, {
	name: "LG 43 Inch",
	photo: "43.JPG",
	price: 5999
	}, {
	name: "Samsung 32 Inch",
	photo: "32s.JPG",
	price: 3499
	}, {
	name: "Samsung 55 Inch",
	photo: "55.JPG",
	price: 9999
	}, {
	name: "TORNADO 32 Inch",
	photo: "32t.JPG",
	price: 2599
	}, {
	name: "Toshiba 32 Inch",
	photo: "32tos.JPG",
	price: 3199
}];

function load_index() {
	let arr = ['mob', 'lab', 'tv'];
	let carry = [];
	for (let j in arr) {
		let mob = document.getElementById(arr[j]);
		if (j == 0) carry = mobiles;
		else if (j == 1) carry = labtops;
		if (j == 2) carry = tv;
		let temp = '';
		for (let i in carry) {
			temp += '<div class="item" style="font-size:.69em;margin-bottom: 0"> <div class="image"><a href="product.html?' + arr[j] + '=' + carry[i].name + '"><img src="images/' + carry[i].photo + '" width="100%" style="border-top-left-radius: 10px;border-top-right-radius: 10px;"></a></div><div style="width: 70%;float: left"><div class="text name">' + carry[i].name + '</div> <div class="text quan">' + carry[i].price + ' EGP</div></div><button class="buadd" onclick="add(\'' + carry[i].name + '\',\'' + arr[j] + '\')">+</button></div>';
		}
		mob.innerHTML = temp;
	}
}
let ex = '';

function add(name, kind) {
	String.prototype.splice = function (idx, rem, str) {
		return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
	};
	pos = ex.indexOf(kind);
	if (pos == -1) ex += kind + "{" + name + "}";
	else if (ex.indexOf(name) == -1) {
		ex = ex.splice(pos + kind.length + 1, 0, name + ",");
	}
	adjust();
}
function adjust(){
	document.getElementById("tocart").href = "add%20to%20cart.html?" + ex;
	let ak=document.getElementsByClassName("ak");
	for(let i in ak){
		ak[i].href="products.html?"+i+ex;
	}
}


