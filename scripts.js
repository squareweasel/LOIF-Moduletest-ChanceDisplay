var karma=9000000000000000;
var chance=1/karma*100;
var roll;
const dice = document.getElementById("dice")
var percentage=toPlainString(chance)+"%";

function toPlainString(num) {
  return (''+ +num).replace(/(-?)(\d*)\.?(\d*)e([+-]\d+)/,
    function(a,b,c,d,e) {
      return e < 0
        ? b + '0.' + Array(1-e-c.length).join(0) + c + d
        : b + c + d + Array(e-d.length+1).join(0);
    });
}

function rollKarma() {
roll=1/Math.floor(Math.random() * karma);  
console.log(toPlainString(roll));
console.log("Chance to succeed: " + percentage);
}



dice.addEventListener('click',()=> {
  rollKarma();
})

