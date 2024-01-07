//Class: category,blue print
//Sub Class:
//Object: example, instance

//Human->Male :
//OOP : object oriented programming
//Encapsulation: binding variables and functions together to build a blueprint

//Human Class
//Properties(variables):  Name,Gender,Age, Color,Eye Color,Hair Color, Height, Weight
//Functions(methods): move(),see(),sleep(),eat(), walk(), run(), speak(), think(), listen()
class Human{
    constructor(name,gender,age,skin_color,eye_color,hair_color,height,weight="5kg"){
        this.name = name
        this.gender = gender
        this.age = age
        this.skin_color = skin_color
        this.eye_color = eye_color
        this.hair_color = hair_color
        this.height = height
        this.weight = weight
        this.is_alive = true
    }


    breath(){
        let name = this.name
        setInterval(function(){
            console.log(name + ' is Breathing..')
        },500)
    }
    cry(){

    }
    walk(){

    }
    run(){

    }
    eat(){

    }
    think(){

    }
    speak(){

    }

}



//how to create javascript object

//name,gender,age,skin_color,eye_color,hair_color,height,weight
let niklesh = new Human('Niklesh Guleria','Male','21','Light','Black','Black','188cm','85Kg') //creating a object, constructor()
let himanshu = new Human('Himanshu Sharma','Male','22','Brown','Black','Black','180cm')
himanshu.name = 'Vansh'
himanshu.breath()

console.log(niklesh.age, himanshu.name)
