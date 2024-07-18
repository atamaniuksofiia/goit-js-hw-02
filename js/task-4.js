`use strict`

function getShippingCost(country){
    let message; 

    switch (country.toLowerCase()){
case `china`:
message = "Shipping to China will cost 100 credits";
return message;
break;
case `chile`:
message = "Shipping to Chile will cost 250 credits";
return message;
break;
case `australia`:
message = "Shipping to Australia will cost 170 credits";
return message;
break;
case `jamaica`:
message = "Shipping to Jamaica will cost 120 credits";
return message;
break;
default:
message = "Sorry, there is no delivery to your country";
return message;
break;
    }
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"