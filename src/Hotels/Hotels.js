fetch("https://hotels-com-free.p.rapidapi.com/pde/property-details/v1/hotels.com/106346?rooms=1&checkIn=2021-01-27&checkOut=2021-01-28&locale=en_US&currency=USD&include=neighborhood", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d8a62226a4msha4cd89954f88eacp126c96jsn0c5270d151e6",
		"x-rapidapi-host": "hotels-com-free.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.then(data => {
	Render(data);
})
.catch(err => {
	console.error(err);
});

function Render(data){
	let main = documnet.getElementById('main');
	let child = main.createElement('div');
	child.innerHTML = data;
	main.appendChild(child);
	
}