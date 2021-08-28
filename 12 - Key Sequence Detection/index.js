const easterEgg = "tamir";
let userRecentKeys = [];

document.addEventListener('keydown', (e) => {
  userRecentKeys.push(e.key);

  if (userRecentKeys.length == 5) {

    for (let i = 0; i < userRecentKeys.length; i++) {
      if (easterEgg[i] != userRecentKeys[i]) {
        userRecentKeys.shift();
        console.log('you suck');
        return;
      }
    } 
    console.log('You found ester egg');
  }

});

