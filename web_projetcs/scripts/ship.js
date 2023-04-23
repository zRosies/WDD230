let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;
//Main()
function encounter() {
    console.log("You see a target");
    if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
      fireShip();
      if (isDestroyed(targetHealth)) {
        console.log("Target eliminated");
      }
      if (isDestroyed(shipHealth)) {
        console.log("ship destroyed");
      }
    }
  }



//1
function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

//2
function shipCanFire() {
    let result=false;
    // return true if the ships health is above 0 AND ammo is above 0 false otherwise
  if (shipHealth >0 && shipAmmo > 0){
  result = true;
  }
  
 return result
// return shipAmmo > 0 && shipHealth > 0;
}

//3
function isHit() {
   let result= false;
    // should return true if a randomly generated number is greater than .5, false if it is less than .5
   let fireornot = Math.random();
   if (fireornot >= 0.5){
   result = true;}
   
   return result
}

function reloadShip() {
    // reduce ship health by 1 and increase ammo by 3;
  shipHealth --;
  shipAmmo +=3;
  
}

function isDestroyed(health) {
    // return true if health is zero or less
  let result= false;
  if(health <= 0){
   result= true;		
  }

   return result;
  
}

document.querySelector("#click").textContent=

encounter();
