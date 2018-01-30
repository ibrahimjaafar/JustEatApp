/**
Just eat test
by Ibrahim Jaafar

*/
function add(outcode) {
	return new Promise((resolve, reject) => {
	if (!outcode) {
            return reject(Error('No outcode found'));
        }
	var uri = "https://public.je-apis.com/restaurants?q="+outcode.value;
	callURL(uri);
	
	});
}
function callURL(uri){
	//Clear the list for a new outcode
	document.getElementById("List").innerHTML = "";
	
	//Ajax call
	//Add user param to url  https://public.je-apis.com/restaurants?q=se19
	$.ajax({
    url: uri,
    headers: {
	'Accept-Tenant': 'uk',
	'Accept-Language': 'en-GB',
	'Authorization': '',//Add this
	'Host': 'public.je-apis.com'
	}})
	.done(function (data) {
	console.log(data);
	 data.Restaurants.map(x => 
	 { 
	 if (x.IsOpenNow === true){
		var FoodType = "";
		x.CuisineTypes.map(y =>{ 
		FoodType = FoodType + " " + y.Name;
		})
		//The output based on user param:
		//Name
		//Rating
		//Types of food for the restaurant

		var dt = document.createElement("ul");
		var dd = document.createElement("li");
		var dd_r  = document.createElement("li");
		var dd_n  = document.createElement("li");
		var ResName = document.createTextNode(x.Name);
		var ResRating = document.createTextNode(x.RatingStars);
		var ResFood = document.createTextNode(FoodType);
		//Add the appropriate classes
		dd_n.appendChild(ResName);
		dt.appendChild(dd_n);
		dd_r.appendChild(ResRating);
		dt.appendChild(dd_r);
		dd.appendChild(ResFood);
		dt.appendChild(dd);
		dd_n.className = "name";
		dd.className = "food";
		dd_r.className = "rating";
		document.getElementById("List").appendChild(dt);
	 }
	 }
	 )
	 
	 // console.log(data.Restaurants.map);
    })

   .fail(function (xhr) {
      console.log("400");
    });

}



