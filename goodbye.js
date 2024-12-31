// Wrap the code in an Immediately Invoked Function Expression (IIFE)
(function (window) {
    // Create an object to hold the "Goodbye" functionality
    var byeSpeaker = {};
  
    // Define the word to say
    var speakWord = "Goodbye";
  
    // Add a method to the byeSpeaker object to say "Goodbye" to a name
    byeSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
  
    // Expose the byeSpeaker object to the global scope
    window.byeSpeaker = byeSpeaker;
  
  })(window);
