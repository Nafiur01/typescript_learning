abstract class User{
    userName:string;
    age:number;


    constructor(username:string,age:number){
        this.userName = username;
        this.age = age;
    }

    abstract display():void{};
}

// let user1 = new User("Nafiur",25);
// user1.display();

class Student extends User{
    studentId:number;

    constructor(username:string,age:number,studentid:number){
        super(username,age);
        this.studentId = studentid;

    }

}

// let student1 = new Student('nafiur',23,7909);
// student1.display()

let user1 = new User("nafiur",25);