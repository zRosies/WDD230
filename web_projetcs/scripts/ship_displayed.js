let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;
//Main()
function encounter() {
    let ma= '';
    if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
      fireShip();
      if (isDestroyed(targetHealth)) {
       ma= "\nTarget eliminated";
      }
      if (isDestroyed(shipHealth)) {
        ma="\nship destroyed";
      }
    }
    else{

    }
    return ma
  }



//1
function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;

      message = `Target hit - Target Health: ${targetHealth}`;
    } else {
      message= "You Missed!!";
    }
  } else {
    reloadShip();
    message=`You can't shoot! Reloading, shipHealth: ${shipHealth}`;
  }
  return message
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
   if (fireornot >= 0.1){
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

const click = document.querySelector('#click');
let msg1 = document.querySelector('#msg1');
let msg2 = document.querySelector('#msg2');
let fin = document.querySelector('#fin');
if(!isDestroyed()){
    
    click.addEventListener('click',()=>{
        msg1.textContent="\nYou see a target and shoot";
        // if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)){
        fin.textContent=encounter();
                
            

        // }
        
        
    })
}






