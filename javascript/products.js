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
	},{
		name: "Apple iPhone 7",
		photo: "7.jpg",
		price: 12199
	} ,{
		name: "Huawei P10 Lite",
		photo: "P10.JPG",
		price: 5739
	}, {
		name: "Huawei P30 Lite",
		photo: "P30.JPG",
		price: " 5000"
	},{
		name: "Huawei Y7 Prime",
		photo: "Y7.JPG",
		price: 2999
	}, {
		name: "Samsung Galaxy S10",
		photo: "S10.JPG",
		price: 16499
	},{
		name: " Huawei Y5 Lite",
		photo: "Y5.JPG",
		price: 1630
	},{
		name: "Samsung Galaxy Note9",
		photo: "Note9.JPG",
		price: 19999
	},{
		name: "Samsung Galaxy A9 2018",
		photo: "A9.JPG",
		price: 7499
	},{
		name: "Samsung Galaxy A70",
		photo: "A70.JPG",
		price: 7000
	},{
		name: "Samsung Galaxy Note 5",
		photo: "Note5.JPG",
		price: 6999
	},{
		name: "Samsung Galaxy A50",
		photo: "A50.JPG",
		price: 5599
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
	},{
		name: "Dell Inspiron 14 5482",
		photo: "5482.JPG",
		price: 16999
	}, {
		name: "Lenovo Yoga C930",
		photo: "C930.JPG",
		price: 31999
	}, {
		name: "Dell Inspiron 15 5577",
		photo: "5577.jpg",
		price: 21499
	},{
		name: "Dell G3 17 3779",
		photo: "3779.JPG",
		price: 28000
	},{
		name: "HP Pavilion 15-CX0012NE",
		photo: "cs1001.JPG",
		price: 20499
	},{
		name: "HP OMEN 15-DC0014NE",
		photo: "dc0014.JPG",
		price: 32998
	},{
		name: "HP Pavilion Power 15-CB009NE",
		photo: "cb009.JPG",
		price: 21899
	},{
		name: "Lenovo Legion Y530",
		photo: "Y530.JPG",
		price: 26999
	},{
		name: "Lenovo ThinkPad T480",
		photo: "T480.JPG",
		price: 30999
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
	},{
	name: "Tornado 43 Inch",
	photo: "43.JPG",
	price: 5349
	},{
	name: "Toshiba 55 Inch",
	photo: "55.JPG",
	price: 8299
	}
];

var ac = [{
		name: "Fresh 1.5 HP",
		photo: "1.5hP.JPG",
		price: 7950
	}, {
		name: "Samsung 2.25 HP",
		photo: "1.5HPs.JPG",
		price: 11649
	}, {
		name: "Fresh 2.5 HP",
		photo: "2.5hP.JPG",
		price: 10600
	}, {
		name: "Samsung 1.5 HP",
		photo: "1.5HPs.JPG",
		price: 8999
	  }, {
		name: "Sharp 2.25 HP",
		photo: "2.25hpsh.JPG",
		price: 11660
	  },{
		name: "Sharp 1.5 HP",
		photo: "1.5hpsh.JPG",
		price: 9349  
	  }, {
		name: "York 1.5 HP",
		photo: "1.5 HPy.JPG",
		price: 7999
	  },{
		  name: "York 5 HP",
		  photo: "5 HP.JPG",
		  price: 22500
	  }
];


function load_products(){
	let help=window.location+"";
	let kind=help.lastIndexOf('?')+1;
	let carry=[];
	if(help[kind]==0){
		carry=mobiles;
		kind='mob';
	}else if(help[kind]==1){
		carry=labtops;
		kind='lab';
	}else if(help[kind]==2){
		carry=tv;
		kind='tv';
	}else{
		carry=ac;
		kind='ac';
	}
	let items = document.getElementById("items");
	let temp = '';
	for (let i in carry) {
		temp += '<div class="item"><a href="product.html?'+kind+'='+carry[i].name+'"><img src="images/'+carry[i].photo+'" width="100%" style="border-top-left-radius: 10px;border-top-right-radius: 10px;"></a><div class="text name">'+carry[i].name+'</div><div class="text" style="display: flex;justify-content: space-around"><div>'+carry[i].price+' EGP</div><button class="but" onclick="add(\'' + carry[i].name + '\',\'' + kind + '\')" >+</button></div></div>';
	}	
	items.innerHTML = temp;
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


//add to cart functions
//var cartItems = [
//	{
//		name: "Apple iPhone 6s",
//		photo: "6s.JPG",
//		price: 6888,
//		kind:"mob",
//		quan:1
//	}, {
//		name: "Apple iPhone Xs",
//		photo: "Xs_Max.JPG",
//		price: 27000,
//		kind:"mob",
//		quan:1
//	}, {
//		name: "Dell Inspiron 13 7370",
//		photo: "7370.JPG",
//		price: 21199,
//		kind:"lab",
//		quan:1
//	}, {
//		name: "HP Pavilion 15-CS1001NE",
//		photo: "cs1001.JPG",
//		price: 21499,
//		kind:"lab",
//		quan:1
//	}, {
//		name: "LG 32 Inch",
//		photo: "32.JPG",
//		price: 3899,
//		kind:"tv",
//		quan:1
//	}, {
//		name: "LG 43 Inch",
//		photo: "43.JPG",
//		price: 5999,
//		kind:"tv",
//		quan:1
//	}, {
//		name: "Fresh 2.5 HP",
//		photo: "2.5hP.JPG",
//		price: 10600,
//		kind:"ac",
//		quan:1
//	}];
let cartItems=[];
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

function getitems(){
	let help=window.location+"";
	let items=help.substr(help.lastIndexOf('?')+1);
	let kinds=["mob","lab","tv","ac"];
	for(let i in kinds){
		
		let kind=items.indexOf(kinds[i]);		
		
		if(kind!=-1){
			
			kind+=kinds[i].length+1;
			let ar=items.slice(kind,items.indexOf("}",kind)).replace(/%20/gi, ' ');
			let arr=ar.split(",").map(String);
			
			let carry=[];
			if (i==0)carry=mobiles;
			else if(i==1)carry=labtops;
			else if(i==2)carry=tv;
			else carry=ac;
			
			for(let j in arr){
				let pos = carry.findIndex(function (element) {
					return element.name==arr[j];
				});
				cartItems.push(carry[pos]);
			}
		}
	}
	for(let i in cartItems){
		cartItems[i]["quan"]=1;
	}
}

function load_addtocart() {
	getitems();
	load_cart();
	load_totals();
}

function update(pos) {
	cartItems[pos].quan = parseInt(document.getElementById('q' + pos).value);
	load_totals();
}

function remove(pos) {
	cartItems.splice(pos, 1);
	load_cart();
	load_totals();
	if(cartItems.length==0){
		document.getElementById("items").innerHTML="<h2>press <a style='color:#EEFF00;' href='index.html'>here</a> to go to the main page</h2>";
	}
}
//---------------

