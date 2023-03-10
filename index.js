for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
   
  }
 
  function writeCards(namesArray, eventName) {
    const thankYouMessages = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
  
    return thankYouMessages;
  }
  
  function countDown(number) {
    let i = number;
  
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
  
  
  
  
  
  
