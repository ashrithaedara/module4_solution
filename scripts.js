// Wrap the code in an Immediately Invoked Function Expression (IIFE)
(function () {
    // Array of names
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    // Loop through each name in the array
    for (var i = 0; i < names.length; i++) {
      // Get the first letter of the current name
      var firstLetter = names[i].charAt(0).toLowerCase();
  
      // Check if the first letter is 'j'
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]); // Say "Goodbye" using byeSpeaker
      } else {
        helloSpeaker.speak(names[i]); // Say "Hello" using helloSpeaker
      }
    }
  })();
