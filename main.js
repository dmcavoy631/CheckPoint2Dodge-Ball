const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]



class player {
  constructor(person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
  this.person = [person]
  this.canThrowBall = canThrowBall,
  this.canDodgeBall = canDodgeBall,
  this.hasPaid = hasPaid,
  this.isHealthy = isHealthy,
  this.yearsExperience = yearsExperience,
  this.players = [];
  }
  addPlayer(player){
    this.players.push(player);
  }
}



class blueTeammate extends player {
  constructor(mascot, color){
    super()
    this.mascot = mascot;
    this.color = color;
    this.blueTeam = []
  }
  addMember(bluePlayer){
    this.blueTeam.push(bluePlayer);
  }
}



class redTeammate extends player {
  constructor(mascot, color){
    super()
    this.mascot = mascot;
    this.color = color;
    this.redTeam = []
  }
  addMember(redPlayer){
    this.redTeam.push(redPlayer);
  }
}

let newblueTeammate = new blueTeammate("Bananan Slugs", "Blue");
let newredTeammate = new redTeammate("Cobras", "Red");
const listOfPlayers = []
const blueTeam = []
const redTeam = []


// create new class
function addBlueTeam(bluePlayer){
  for(let ele of listOfPlayers){
    if (ele == bluePlayer){
      listOfPlayers.splice(ele,1);
    }
  }
  blueTeam.push(bluePlayer)
  newblueTeammate.addMember(bluePlayer)
  updateDisplay()
}


// create new class
function addRedTeam(redPlayer){
  for(let ele of listOfPlayers){
    if (ele == redPlayer){
      listOfPlayers.splice(ele,1);
    }
  }
  redTeam.push(redPlayer)
  newredTeammate.addMember(redPlayer)
  updateDisplay()
}

function updateDisplay(id) {
 
  const listElementR = document.getElementById('Red')
  listElementR.innerHTML = ""

  redTeam.map(person => {
    const li = document.createElement("li")
    li.setAttribute("id", person.id)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElementR.append(li)
  })

  const listElementB = document.getElementById('Blue')
  listElementB.innerHTML = ""

  blueTeam.map(person =>{
    const li = document.createElement("li")
    li.setAttribute("id", person.id)
    console.log(person.id)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElementB.append(li)
  })

   const listElementP = document.getElementById('players')
  listElementP.innerHTML = ""

  listOfPlayers.map(person =>{
    const li = document.createElement("li")
    li.setAttribute("id", person.id)

    // Creating button for Blue Team
    const buttonB = document.createElement("button")
    buttonB.setAttribute("id","blueTeam")
    buttonB.innerHTML = "Make Blue Player"
    buttonB.addEventListener('click', function() {addBlueTeam(person);})
    
    // Creating button for Red Team
    const buttonR = document.createElement("button")
    buttonR.setAttribute("id","redTeam")
    buttonR.innerHTML = "Make Red Player"
    buttonR.addEventListener('click', function() {addRedTeam(person);})

    // Addd Buttons to List Items
    li.appendChild(buttonB)
    li.appendChild(buttonR)
    li.appendChild(document.createTextNode(person.name))
    listElementP.append(li)
  })
}




const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  listElement.innerHTML = ""

  arrOfPeople.map(person => {

    const li = document.createElement("li")
    li.setAttribute("id", person.id)

    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )

    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))

    listElement.append(li)
  })
}


const makePlayer = (id) => {
  // console.log(`li ${id} was clicked!`)
  document.getElementById(id).remove();
  for(let obj of arrOfPeople){
    if (obj.id == id){

      // Add to Players , Remove from People
      listOfPlayers.push(obj);
      arrOfPeople.splice(obj,1)

      // Update all list with .map
      updateDisplay(id);
    }
  }
}


// Testing 

if (typeof describe === "function") {
  describe("addRedTeam(redPlayer)", () => {
  it("add player to red team", () => {
    addRedTeam("test red");
});
  });
  describe("addBlueTeam(bluePlayer)", () => {
    it("add player to blue team", () => {
      addRedTeam("test blue");
  });
});

}
