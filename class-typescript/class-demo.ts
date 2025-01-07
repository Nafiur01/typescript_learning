class User{
    userName:string;
    age:number;


    constructor(username:string,age:number){
        this.userName = username;
        this.age = age;
    }

    display():void{
        console.log(`Your username is ${this.userName} and your age is ${this.age}`);
    };
}

let user1 = new User("Nafiur",25);
user1.display();