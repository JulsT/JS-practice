/**
 * Created by TarasiukY on 17.10.2017.
 */
var nonsense =  function (string) {
    var blab = function() {
        alert(string);
    };
    return blab;
};
var blabLater = nonsense("Blablabla");
blabLater();
//other function with closure
var lastNameTrier = function (firstName) {
    var innerFunction = function (lastName) {
        console.log(firstName + " " + lastName);
    };
    return innerFunction;
};
var firstNameFarmer = lastNameTrier("Farmer");
console.log(firstNameFarmer);
firstNameFarmer("Brown");
firstNameFarmer("Jane");
firstNameFarmer("Lynne");
var firstnameKate = lastNameTrier("Kate");
firstnameKate("Brown");
//another one
var storyWriter  = function () {
    var story = "";
    return{
       addWords:  function (word) {
          story += word;
          console.log(story);
           return story
       },
        erase: function () {
            story = "";
        }
    }
};
var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.');
farmLoveStory.addWords('It saw a friendly face.');
var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.');
storyOfMyLife.addWords('I ate some ice cream.');
