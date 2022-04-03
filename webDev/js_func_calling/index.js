const callStackTest = () => {
  let start;
  const firstToCall = () => {
    start = "hellow from firstToCall";
    console.log("i get called first");
    console.log(start);
    secondToCall();
    console.log("i get called last");
  };

  const secondToCall = () => {
    start = "hellow from secondToCall";
    console.log(start);
    console.log("i get called second");
    console.log("i get called third");
  };

  firstToCall();
};

//callStackTest();
const itemContainer = document.querySelector(".itemContainer");

class createItem {
  constructor(itemName, itemStatus, nthItem) {
    this.itemName = itemName;
    this.itemStatus = itemStatus;
    this.nthItem = nthItem;
  }
  getInfo() {
    console.log(
      ` Name: ${this.itemName} Status: ${this.itemStatus} number: ${this.nthItem}`
    );
  }
}

const userList = [];

class Users {
  constructor(userInputName, userInputAge, userInputBout) {
    const userName = document.querySelector("#userNameInput").value;
    const userAge = document.querySelector("#userAgeInput").value;
    const userBout = document.querySelector("#userMiniBout").value;
    this.Name = userName;
    this.Age = userAge;
    this.Bout = userBout;
  }
  getInfo() {
    console.log(` Name: ${this.Name} Status: ${this.Age} number: ${this.Bout}`);
  }

  noOfUser() {
    const numberOfUsers = document.querySelector(".userShowcase").children;
    return numberOfUsers.length ;
  }
}

document.querySelector("button").addEventListener("click", function () {
  this.preventDefault;
  const user = new Users();
  
  document.querySelector('.userShowcase h1 > span').innerHTML = user.noOfUser()

  document.querySelector(".userShowcase").innerHTML += `
      <div class="users">
        <div class="userInfo userName">Name: ${user.Name} </div>
        <div class="userInfo userAge">Age: ${user.Status}</div>
        <div class="userInfo userBio">Bio: ${user.Bout} </div>
      </div>
      `;
});
