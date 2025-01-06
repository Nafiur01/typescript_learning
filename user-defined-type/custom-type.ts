type User = {userName:string,userId:number};
let users: User[];
users=[];


let user1: User;
user1 = {userName:"Nafiur",userId:101};
users.push(user1);

let user2: User;
user2 = {userName:"Anisul",userId:105};
users.push(user2);

let user3: User;
user3 = {userName:"Roton",userId:109};
users.push(user3);

console.log(users);

type RequestType = "GET" | "POST";
let request1: RequestType;
request1 = "GET"


function requestHandler(requestType:RequestType){
    console.log(requestType);
}

requestHandler("POST");