var result
var heads = 0;
var tails = 0;
var firstTo = 5; ///give the user an option to set how many points are required to win

var coinFlip = function ()
{
	if (heads < firstTo && tails < firstTo)
	{
		if (Math.random() < 0.5)
		{
			result = "heads";
			heads++;
			// console.log(result);
		}
		else
		{
			result = "tails";
			tails++;
			// console.log(result);
		}
		document.getElementById("coinFlipHeads").innerHTML = ("Heads: " + heads);
		document.getElementById("coinFlipTails").innerHTML = ("Tails: " + tails);
		if (heads === firstTo && heads > tails)
		{
			document.getElementById("coinFlipWinner").innerHTML = ("Heads wins!");
		}
		else if (tails === firstTo && tails > heads) {
			document.getElementById("coinFlipWinner").innerHTML = ("Tails wins!");
		}
	}
};

// coinFlip();

var reset = function()
	{
		heads = 0;
		tails = 0;
	}
reset();

var winningTotal = function ()
{

}
