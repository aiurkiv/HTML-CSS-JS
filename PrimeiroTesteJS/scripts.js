var currentNumberWrapper;
var currentNumber = 0;

function increment()
{
    currentNumberWrapper = document.getElementById("currentNumber");
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement()
{
    currentNumberWrapper = document.getElementById("currentNumber");
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}