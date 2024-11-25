let usercount = 0;
let cmpcount = 0;
let a, b;
let userscore = document.querySelector("#user_score");
let compscore = document.querySelector("#comp_score");
let userwin = true;
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let gencmpchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const idx = Math.floor(Math.random() * 3);
  return options[idx];
};

let choices = document.querySelectorAll(".img");

const playgame = (userchoice) => {
  const cmpchoice = gencmpchoice();
  console.log("user choice is ", userchoice);
  console.log("computer choice is ", cmpchoice);
  // draw block
  if (userchoice == cmpchoice) {
    userwin = "draw";
    a = userchoice;
    console.log(`Draw by ${a}`);
  } // first block
  else if (userchoice == "rock") {
    if (cmpchoice == "paper") {
      a = userchoice;
      b = cmpchoice;
      console.log("computer wins");
      cmpcount++;
      userwin = false;
    } else if (cmpchoice == "scissor") {
      console.log("user wins");
      a = userchoice;
      b = cmpchoice;
      usercount++;
      userwin = true;
    }
  }
  // second block
  else if (userchoice == "paper") {
    if (cmpchoice == "scissor") {
      a = userchoice;
      b = cmpchoice;
      console.log("computer wins");
      cmpcount++;
      userwin = false;
    } else if (cmpchoice == "rock") {
      a = userchoice;
      b = cmpchoice;
      console.log("user wins");
      usercount++;
      userwin = true;
    }
  } // 3rd block
  else if (userchoice == "scissor") {
    if (cmpchoice == "rock") {
      a = userchoice;
      b = cmpchoice;
      console.log("computer wins");
      cmpcount++;
      userwin = false;
    } else if (cmpchoice == "paper") {
      a = userchoice;
      b = cmpchoice;
      console.log("user wins");
      usercount++;
      userwin = true;
    }
  }
  change_msg(userwin);
};
let change_msg = (userwin) => {
  if (userwin == "draw") {
    msgcontainer.innerHTML = `Draw! by ${a} play agian `;
    msg.setAttribute("class", "msgcontainer");
  } else if (userwin == true) {
    msg.innerHTML = `You win! ${a} beats ${b}`;
    msg.setAttribute("class", "win");
  } else if (userwin == false) {
    msgcontainer.innerHTML = `You lose! ${a} beats ${b}`;
    msg.setAttribute("class", "loss");
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    let userchoice = choice.getAttribute("id");
    playgame(userchoice);
    change_msg(userwin);
    compscore.innerHTML = cmpcount;
    userscore.innerHTML = usercount;
  });
});
