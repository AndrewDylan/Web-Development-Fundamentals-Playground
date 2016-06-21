//JavaScript Review File

console.log("Happy!")

var age = 18;
var myBirthYear = 1998;
var graduationYear = 2017;
var numberOfSiblings = 1;
var currentYear = 2016;
var magicNumber = 3;
var truth = "This is true";
var lie = "This is false";
var worstSongs = "Cherry Bomb";
var bestSongs = "Do not have one";
var favoriteBands = "Beetles";

//Array A string of letters or numbers
//The first spot in an array is 0
var abc="abcdefghijklmmopqrstuvwxyz"
var abcArray= ["a", "b", "c"]
var numberArray= [1, 2, 3, 4, 5]

var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "Mountain Dew";
typesOfSoda[2] = "Pepsi";
console.log(typesOfSoda)

var worstSoda = new Array();
worstSoda[0] = "Sprite";
worstSoda[1] = "Diet Anything";
worstSoda[2] = "Coke";

var mixedArray = [1, "Bill Gates", (5 > 1)]

//Strong concatenation
console.log(age);
console.log(myBirthYear);
console.log("I am " + age);
console.log("I was born in " + myBirthYear);
console.log("I will graduate in " + graduationYear);
console.log("I have " + numberOfSiblings + "siblings.")

if(currentYear < 2017) {
	console.log("I will graduate in 2017");
} else {
	console.log("I graduated in 2017")
}

//Manipulating the DOM(Document Object Model)
document.getElementById("my-age").innerHTML = age;
document.getElementById("my-birth-year").innerHTML = myBirthYear;
document.getElementById("graduation-year").innerHTML = graduationYear;
document.getElementById("siblings").innerHTML = numberOfSiblings;

function revealMagicNumber() {
	document.getElementById("magic-number").innerHTML = magicNumber;
}
//Two truths one lie game
function revealTruth() {
	document.getElementById("own-cat").innerHTML = truth;
}

function revealLie() {
	document.getElementById("own-truck").innerHTML = lie;
}

function revealTruthSibling() {
	document.getElementById("two-siblings").innerHTML = truth;
}
//Music Question Functions
function worstSong() {
	document.getElementById("worst-song").innerHTML = worstSongs;
}

function bestSong() {
	document.getElementById("best-song").innerHTML = bestSongs;
}

function favoriteBand() {
	document.getElementById("favorite-band").innerHTML = favoriteBands;
}

var counter = 0;

//While loop
/*while(counter < 10) {
	counter++;
	console.log("The score is " + counter);
}*/

//For loop
/*for (var i=0; i < 35; i+=5) {
	console.log(i);
}*/

/*for (var i=0; i < 101; i+=25) {
	console.log(i);
	if (i === 50) {
		console.log("Half Way There!")
	}
}*/

/*for (var i=0; i < 11; i++) {
	if (i === 9) {
		console.log("Nine")
	} else if (i === 10) {
		console.log("Ten")
	} else {
		console.log(i);
	}
}*/

/*var friends = ["Bryce", "Joey", "Stephanie", "Sasha"]
var friendList = "";
var pound = "#";
for (i = "#"; i.length<8; i+= "#") {
	console.log(i)
}*/

/*for(var i = 0; i <51; i+= 5) {
	if(i === 50) {
		console.log("I'm Rich!!!")
	}  else{
		console.log(i);
	}
}*/

//Objects
/*
var beachBag = {
	//Properties
	numBottles		: 3,
	colorOfTowel	: "Green",
	isWet			: false,

	zipUp			: function() {
		console.log("zipper sound");
	}
}
console.log(beachBag);
console.log(beachBag.isWet);
beachBag.zipUp();
*/

var nerd = 
{
	hasGlasses		: true,
	pantsHigh		: true,
	numberOfPens	: 4,
	numberOfFriends	: "few",
	hasRunnyNose	: true
}
console.log(nerd.hasGlasses);

var player = {
	name		: " ",
	life		: 1000,
	damage		: 10,
	hasSword	: true,
	hasCrossbow	: true,
	hasArmor	: false,
	level 		: 90,

	warCry		: function() {
		console.log("Fooorr Spaarrttaaaa!!!!")
	},
	heal		: function(target) {
		var lifeReturn = 20 * this.level;
		console.log(this.name + " healed " + target + " for " + lifeReturn + " health.")
	}
}
player.name = "Andrew"
player.heal("Logan");

var animal = 
{
	isAlive  		:true,
	doesItEat 		:true,
	itRuns			:true,
	itJumps			:true,
	eyes			: 2,
	isCute			:true,
	legs			: 4,

	breath			:function() {
		if(this.isAlive === true) {
			console.log("Of course it breaths! It's Alive!")
		} else {
			console.log("Nope it's dead, so it no longer can breath.")
		}
	}
}
animal.breath();

var snake = Object.create(animal);

console.log(snake.eyes)
snake.legs = 0;
console.log(snake.legs);

var rabbit = Object.create(animal);
rabbit.ears = "Huge";
console.log(rabbit.ears);

var cow = Object.create(animal);
cow.utters = ("It's got dat");
cow.colors = ("White and Black");
cow.breath = function() {
	console.log("Moooooooooooooooooooo")
}