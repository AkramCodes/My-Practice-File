//OBJECT 
let phone = {
    brand:"Apple",
    model:"iPhone 11",
    ram:"4 GB",
    storage:"128GB",
    price:43000,
    color:"Silver Gray",
    weight:"200g",
    refreshRate:["120Hz","90Hz"],
    camera:{
        primary:"50MP",
        rear:"20MP"
    }
}


//JSON: JAVASCRIPT OBJECT NOTATION : TXT(string), .json

let jsonData  =  `
{
    "brand":"Apple JSON",
    "model":"iPhone 11",
    "ram":"4 GB",
    "storage":"128GB",
    "price":"43000",
    "color":"Silver Gray",
    "weight":"200g",
    "refreshRate":["120Hz","90Hz"],
    "camera":{
        "primary":"50MP",
        "rear":"20MP"
    }
}
`



//json

//PHP: json
//JS: json
//Python: json


//json to object: JSON.parse('')
//object to json: JSON.stringify(object)


//array("brand"=>"iphone","model"=>""):: json_encode(), json_decode()

let result =  JSON.parse(jsonData)

let result2 = JSON.stringify(phone)

console.log(result2)