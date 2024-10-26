const comptNumEasy = Math.ceil(Math.random() * 10);
const comptNumIntermediate = Math.ceil(Math.random() * 20);
const comptNumAdvanced = Math.ceil(Math.random() * 100);

const submitButton = document.getElementById("submitB");
const form = document.getElementById("form");
const gameResult = document.getElementById("gameResult");
const difficultyLevel = document.getElementById("difficulty");


console.log("Easy--" + comptNumEasy);
console.log("Intermediate--" + comptNumIntermediate);
console.log("Advanced--" + comptNumAdvanced); 
console.log(difficultyLevel);

form.addEventListener("submit", handleGuess);
function handleGuess(e)
{
    e.preventDefault();
    let guessValue = e.target.elements.guess.value;
    let guessValueNumber = parseInt(guessValue);

    if(difficultyLevel.value == "easy" && guessValueNumber === comptNumEasy)
    { 
        gameResult.innerText = `CONGRATULATIONS! Your number "${guessValue}" is correct`
        gameResult.style.color = "green";
        return;      
    }

    else if(difficultyLevel.value == "intermediate" && guessValueNumber === comptNumIntermediate)
    {
        gameResult.innerText = `CONGRATULATIONS! Your number "${guessValue}" is correct`
        gameResult.style.color = "green";
        return;        
    }

    else if(difficultyLevel.value == "advanced" && guessValueNumber === comptNumAdvanced)
    {
        gameResult.innerText = `CONGRATULATIONS! Your number "${guessValue}" is correct`
        gameResult.style.color = "green";
         return;
    }

    else if(!guessValue.length)
    {
        gameResult.innerText = 'You have not entered any number';
        gameResult.style.color = "black";
        alert("YOU HAVE NOT ENTERED ANY NUMBER,\nPLEASE ENTER A VALID NUMBER")
        return;
    } 
    else if(guessValue > 100)
        {
            gameResult.innerText = 'The number you entered is out of range \n Please enter a valid number.';
            gameResult.style.color = "#005776";
            alert('THE NUMBER YOU ENTERED IS OUT OF RANGE!\nPLEASE ENTER A NUMBER BELOW "101"')
            return;
        } 
    else   
    {
        gameResult.innerText = `SORRY Your number "${guessValue}" is wrong`
        gameResult.style.color = "red";
        return;  
    } 
        form.reset();
    
}