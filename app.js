const laws = document.getElementsByTagName('li');
const indexText = document.getElementById('boldIndex');
const button = document.getElementById('embolden');

button.addEventListener('click', (e) => {
    const index = parseInt(indexText.value, 10); // index is the users input as an int
    console.log(index);
  
    for (let i = 0; i < laws.length; i += 1) {
       let law = laws[i]; // i equals 0, 1, 2
       console.log(i);
       // replace 'false' with a correct test condition on the line below
       if (index == i) { // test to see if the user input (index) equals i

           law.style.fontWeight = 'bold';
       } else {
           law.style.fontWeight = 'normal';
       }
    }
});