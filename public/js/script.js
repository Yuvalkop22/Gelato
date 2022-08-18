let navbar = document.querySelector(".header .navbar")
let menuBtn = document.querySelector("#menu-btn")

menuBtn.onclick = () => {
	menuBtn.classList.toggle("fa-times")
	navbar.classList.toggle("active")
}

window.onscroll = () => {
	menuBtn.classList.remove("fa-times")
	navbar.classList.remove("active")
}

var swiper = new Swiper(".home-slider", {
	grabCursor: true,
	loop: true,
	centeredSlides: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
})

var swiper = new Swiper(".reviews-slider", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	grabCursor: true,
	loop: true,
	spaceBetween: 20,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
		},
	},
})
function check(){
	$.get('cartSessionParams',function(data,status){
		$.each(data, function(key,val) {
			console.log(data);
			$("#text1").text("Hello " + data[key]);
		}
		)});
}
function showData(){
	$("#users").css('visibility','visible');
	$("#btnShow").css('visibility','hidden');
	$.get('showData',function(data,status){
		for (let i=0; i< data.length; i++){
			var row = "<tr><td>" + data[i].fullname + "</td><td>" + data[i].email + "</td><td>" + data[i].admin + "</td></tr>";
			$("#userstable").append(row);
		}
	});
}
function showIceCreamsList(){
	$("#iceCreams").css('visibility','visible');
	$("#toMyCart").css('visibility','visible');
	$.get('/adminMenu/showIceCreamsList',function(data,status){
		for (let i=0; i< data.length; i++){
			var row = "<tr>"
						+"<td>" + data[i].name + "</td>"
						+"<td>" + data[i].flavor + "</td>"
						+"<td>" + data[i].quantity + "</td>"
						+"<td>" + data[i].price +"</td>"
						+"<td><input type='checkbox' id=+''" + i + "''" +  "</input>"
						+
					"</tr>";
			$("#iceCreamsTable").append(row);
		}
		console.log(row);
	});
}
function searchIceCreamsList1(){
	$("#iceCreams1").css('visibility','visible');
	$.get('/adminMenu/showIceCreamsList',function(data,status){
		for (let i=0; i< data.length; i++){
			var row = "<tr>"
					+"<td>" + data[i].name + "</td>"
					+"<td>" + data[i].flavor + "</td>"
					+"<td>" + data[i].quantity + "</td>"
					+"<td>" + data[i].price +"</td>" +
				"</tr>";
		$("#iceCreamsTable1").append(row);
		//console.log(row);
		}
	});
}

// 
function searchIceCreamsList2(){
	$("#iceCreams2").css('visibility','visible');
	$.get('/adminMenu/showIceCreamsList',function(data,status){
		let count = 0;
		str = window.location.search;
		if (typeof str === 'string'){
			var params = str.split("&");
			var iceCreamNameParams = params[1];
			var iceCreamNameSplit = iceCreamNameParams.split("=");
			var iceCreamName = iceCreamNameSplit[1];
			for (let i=0; i< data.length; i++){
				if (data[i].name === iceCreamName){
					var row = "<tr>"
					+"<td>" + data[i].name + "</td>"
					+"<td>" + data[i].flavor + "</td>"
					+"<td>" + data[i].quantity + "</td>"
					+"<td>" + data[i].price +"</td>" +
					"</tr>";
					$("#iceCreamsTable2").append(row);
					count++;
					//console.log(row);	
				}		
			}
			if (count === 0){
				var row = "<tr><td>Couldn't find anything</td></tr>"
				$("#iceCreamsTable2").append(row);

			}
		}
		
	});
}

function f(){
	var data = JSON.parse(localStorage.getItem("result"));
	console.log("data = " + data);
	$("#doc").text(data);
}
function redirectToIceCreamsMenu(){
	window.location.replace("/adminMenu/iceCreams");
}