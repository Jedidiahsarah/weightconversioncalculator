let massFrom = document.getElementById('massFrom');
let massTo = document.getElementById('massTo');
let inputed = document.getElementById('inputed');
let btn = document.getElementById('btn');
let result = document.getElementById('result');
btn.addEventListener('click', function(){
    //gram to gram
    if(massFrom.selectedIndex == 1 && massTo.selectedIndex == 1){
        let g = inputed.value;
        result.style.display="block";
        result.innerHTML = g + "g";
      }
      //gram to kilogram
    else if(massFrom.selectedIndex == 1 && massTo.selectedIndex == 2){
      let x = inputed.value/1000;
      result.style.display="block";
      result.innerHTML = x + "kg";
    }
     //gram to tonnes
    else if(massFrom.selectedIndex == 1 && massTo.selectedIndex == 3){
        let y = inputed.value/1000000;
      result.style.display="block";
      result.innerHTML = y + "tonne";
    }
    //kilogram to grams
    else if(massFrom.selectedIndex == 2 && massTo.selectedIndex == 1){
        let kg = inputed.value * 1000;
        result.style.display="block";
        result.innerHTML = kg + "g";
      }
      //kilogram to kilogram
    else if(massFrom.selectedIndex == 2 && massTo.selectedIndex == 2){
      let k = inputed.value;
      result.style.display="block";
      result.innerHTML = k + "kg";
    }
    //kilogram to tonne
    else if(massFrom.selectedIndex == 2 && massTo.selectedIndex == 3){
      let t = inputed.value/1000;
      result.style.display="block";
      result.innerHTML = t + "tonne";
    }
    // tonne to grams
    else if(massFrom.selectedIndex == 3 && massTo.selectedIndex == 1){
        let kg = inputed.value * 1000000;
        result.style.display="block";
        result.innerHTML = kg + "g";
      }
      //tonne to kilogram
    else if(massFrom.selectedIndex == 3 && massTo.selectedIndex == 2){
      let k = inputed.value * 1000;
      result.style.display="block";
      result.innerHTML = k + "kg";
    }
    //tonne to tonne
    else if(massFrom.selectedIndex == 3 && massTo.selectedIndex == 3){
      let t = inputed.value;
      result.style.display="block";
      result.innerHTML = t + "tonne";
    }
    
})