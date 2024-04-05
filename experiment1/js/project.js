// project.js - Integrate "Pixel Puzzler" generator into portfolio website
// Author: Segolen Plihon
// Date:4/4/24

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

// define a class
class MyProjectClass {
  // constructor function
  constructor(param1, param2) {
    // set properties using 'this' keyword
    this.property1 = param1;
    this.property2 = param2;
  }
  
  // define a method
  myMethod() {
    // code to run when method is called
  }
}

function main() {
  const fillers = {
    adventurer: ["Pixel Hunter", "Glitch Fixer", "Code Weaver", "Digital Explorer"],
    pre: ["Cyber", "Pixel", "Data"],
    post: ["land", "scape", "net"],
    people: ["pixelated", "distorted", "glitched", "digital"],
    item: ["algorithm", "decoder ring", "USB key", "lens"],
    num: ["countless", "a myriad of", "a handful of", "an array of"],
    looty: ["rare", "mysterious", "lengendary"],
    loots: ["pixels", "icons", "bitmaps"],
    baddies: ["corruptors", "data phantoms", "pixel ghouls", "agents of chaos"],
    message: ["transmission", "digital note", "coded message", "virtual plea","...wait, no! Come back"],
    
  };
  
  const template = `$adventurer, heed my $message!
  
  I have just come from $pre$post where the $people inhabitants are in conundrum. Their world has been fractured by $baddies. You must venture forth without delay, armed with my $item, and assist them in restoring harmony.
  
  Legend has it that the one who succeeds in this quest will be rewarded with $num $looty $loots. Such a treasure is surely enough to entice a hero of your caliber!
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    $("#box").text(story);
  }
  
  /* global clicker */
  $("#clicker").click(generate);
  
  generate();

  // create an instance of the class
  //let myInstance = new MyProjectClass("value1", "value2");

  // call a method on the instance
  //myInstance.myMethod();
}

// let's get this party started - uncomment me
main();