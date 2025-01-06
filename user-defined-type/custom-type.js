var users;
users = [];
var user1;
user1 = { userName: "Nafiur", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "Anisul", userId: 105 };
users.push(user2);
var user3;
user3 = { userName: "Roton", userId: 109 };
users.push(user3);
console.log(users);
var request1;
request1 = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("POST");
