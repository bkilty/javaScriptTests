var a = 10;
var home = {
    address:{
        street: "5411 Sunset Dr.",
        city: "Cheyenne",
        state: "Wyoming",
        zip: "82009"},
    doors:4,
    floors:3,
    baths:4,
    bedrooms:3,
    squareFt:2100,
    garage:{
        cars:2,
        attached: false}
    };

  
home.address.street = "4642 Crow St.";
home.baths +=1;
console.log(home.address);
console.log("the number of baths = " + home.baths);