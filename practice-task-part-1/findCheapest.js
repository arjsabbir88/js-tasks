const phones=[
    {name:'Samsung', Price: 20000, camera:'12mp',color:'black'},
    {name:'Xoami', Price: 18000, camera:'12mp',color:'black'},
    {name:'Oppo', Price: 30000, camera:'12mp',color:'black'},
    {name:'iphone', Price: 100000, camera:'12mp',color:'black'},
    {name:'Walton', Price: 31000, camera:'12mp',color:'black'},
    {name:'HTC', Price: 27000, camera:'12mp',color:'black'},
]

function getCheapestPhone(phones){
let min = phones[0];

for(const phone of phones){
    if(min.Price>phone.Price){
        min=phone;
    }

}
return min;


}

const cheapestOne = getCheapestPhone(phones);
console.log(cheapestOne);