//Variable Array to hold all of the words needed for the 1,000 Words Module Helper
var wordsFor5Words = [];
var divs = ["addition", "chickenNuggets", "crazyTalk", "thousandWords", "modulo", "divisibleNumbers", "jackolantern", "tableA", "tableB", "tableC"];

//Function to increase and decrease number of each color wires in Sequences
function modifyCounters(color, direction) {
	var ele;
	var newNum = 0;
	
    //Get the correct colored wire
    switch (color) {
		case "RED":
			ele = document.getElementById('redbox');
			break;
		case "BLUE":
			ele = document.getElementById('bluebox');
			break;
		case "BLACK":
			ele = document.getElementById('blackbox');
			break;
		default:
			ele = null;
			alert("An Error Occured with processing the color");
	}
	
    //Get the correct direction (increase or decrease), and complete the task
	switch (direction) {
		case 0:
			newNum = (ele.value - 1);
			ele.value = "";
			ele.value = newNum
			break;
		case 1:
			newNum = (parseInt(ele.value) + parseInt(1));
			ele.value = "";
			ele.value = newNum
			break;
		default:
			alert("An Error Occured with processing the direction");
	}
	newNum = 0;
}

//Function for the Chicken Nuggets Module Helper
function chickynuggies() {
    
    //Get input and output elements
    var input = document.getElementById('chickNugs').value;
    document.getElementById('chickNugs').value = "";
    var output = document.getElementById('chickNugsRes');
    
    //Find the solution...
    output.innerHTML = getSoln(parseInt(input, 10));
    document.getElementById('chickNugs').focus;
}

function getSoln(sumTo) {
    
    //Declare important needed variables
    var x, y, z, str;
    str = "";
    
    //Try all values of x, y, and z as long as x, y, and / or z * coefficient <= sumTo
    for (x = 0; sumTo >= (6 * x); x++) {
        for (y = 0; sumTo >= (9 * y); y++) {
            for (z = 0; sumTo >= (20 * z); z++) {
                if ( (6 * x) + (9 * y) + (20 * z) === sumTo) {
                    
                    //Result Found, print and exit unless all is checked
                    str += printSoln(true, x, y, z);
                    if (document.getElementById('chickyFirst').checked) {
                        return str;
                    }
                }
            }
        }
    }
    str += printSoln(false, x, y, z);
    return str;
}

//Return the result of the getSoln function for the Chicken Nuggets Module Helper
function printSoln(found, x, y, z) {
    var strn = "";
    
    //Check if anything was found: If so print success and results, else: print failure
    if (found) {
        strn += "Combination Found!<br>&#09;Boxes of 6 Nuggets: " + x + "<br>&#09;Boxes of 9 Nuggets: " + y + "<br>&#09;Boxes of 20 Nuggets: " + z + "<br>----------------------------------------<br><br>";
    } else {
        strn += "No Combinations Found!!<br>";
    }
    return strn;
}

//Addition Function
function additionGo() {
    
    //Get input and output elements
    var input = document.getElementById('additionTextArea').value.toUpperCase();
    var lines = input.split('\n');
    document.getElementById('additionTextArea').value = "";
    var output = document.getElementById('additonResponse');
    
    //Set sum to 0 and set is so that originally all numbers are valid
    var sum = 0;
    var allNums = true;
    
    //Loop through the inputted numbers
    for (var i = 0; i < lines.length; i++) {
        
        //If a non-number is detected set allNums to false and exit the loop
        if (isNaN(lines[i])) {
            allNums = false;
            break;
        }
        
        //If the number is valid, add it to the current sum
        sum += parseInt(lines[i]);
    }
    
    //Output the results to the user
    output.innerHTML = "";
    if (allNums) {
        output.innerHTML += "SUM: " + sum.toString(10);
    } else {
        output.innerHTML += "AN ERROR OCCURED";
    }
	document.getElementById("additionTextArea").focus();
}

//1,000 Words Function
function findWord() {
    
    //Set input and output elements
    var input = document.getElementById('word5').value.toUpperCase();
    document.getElementById('word5').value = "";
    var output = document.getElementById('words5resp');
    
    //Sort the array, since binary search requires the array to be sorted: should be already, but doesn't hurt to make sure of it
    wordsFor5Words.sort();
    
    //If the binarysearch finds it, report to the user that it was found. Otherwise, report that it wasn't
    if (binarySearch(wordsFor5Words, input) === -1) {
        output.innerHTML = input + " NOT FOUND";
    } else {
        output.innerHTML = input + " FOUND!!";
    }
	document.getElementById('word5').focus();
}

//Binary Search Function needed for the 1,000 words module helper
function binarySearch(arr, word) {
    var lower = 0;
    var upper = arr.length - 1;
    while (lower <= upper) {
        var mid = Math.floor(lower + (upper - lower) / 2);
        var res = -1;
        if (word.trim().localeCompare(arr[mid].trim()) === 0) {
            res = 0;
        } else if (word.trim().localeCompare(arr[mid].trim()) === 1) {
            //upper = mid - 1;
            lower = mid + 1;
        } else {
            //lower = mid + 1;
            upper = mid - 1;
        }
        if (res === 0) {
            return mid;
        }
    }
    return -1;
}

//Modulos Function
function modulosGo() {
    
    //Get input and output from the HTML File
    var n = parseInt(document.getElementById('moduloN').value, 10);
    var m = parseInt(document.getElementById('moduloM').value, 10);
    var output = document.getElementById('modRes');
    
    //Clear the textboxes for next input
    document.getElementById('moduloN').value = "";
    document.getElementById('moduloM').value = "";
    
    //Display results
    output.innerHTML = n + " mod " + m + " = " + n % m;
    
    //Refocus the n text box
    document.getElementById('moduloN').focus();
}

//Divisibility Numbers Function
function divisibleNumGo() {
    
    //Get inputs and outputs
    var a = parseInt(document.getElementById('divisibleNum').value, 10);
    var b = parseInt(document.getElementById('divisibleNum2').value, 10);
    var output = document.getElementById('divisibleRes');
    
    //Clear the textboxes for next input
    document.getElementById('divisibleNum').value = "";
    document.getElementById('divisibleNum2').value = "";
    
    //Display the results
    if (a % b === 0) {
        output.innerHTML = "YEA";
    } else {
        output.innerHTML = "NAY";
    }
    
    //Return focus to the first textbox
    document.getElementById('divisibleNum').focus();
}

//Clear Function...Clears all fields and text and resets everything
function clr_fields() {
	document.getElementById('redbox').value = "";
	document.getElementById('redbox').value = 0;
	document.getElementById('bluebox').value = "";
	document.getElementById('bluebox').value = 0;
	document.getElementById('blackbox').value = "";
	document.getElementById('blackbox').value = 0;
	document.getElementById('MemoryTextArea').value = "";
    document.getElementById('chickNugs').value = "";
    document.getElementById('chickNugsRes').innerHTML = "";
    document.getElementById('additionTextArea').value = "";
    document.getElementById('additonResponse').innerHTML = "";
    document.getElementById('word5').value = "";
    document.getElementById('words5resp').innerHTML = "";
    document.getElementById('chickyFirst').checked = true;
    document.getElementById('chickyAll').checked = false;
    document.getElementById('moduloN').value = "";
    document.getElementById('moduloM').value = "";
    document.getElementById('modRes').innerHTML = "";
    document.getElementById('divisibleNum').value = "";
    document.getElementById('divisibleNum2').value = "";
    document.getElementById('divisibleRes').innerHTML = "";
    
    //Hide All Other Mods
    for (var a = 0; a < divs.length; a++) {
        hideDiv(divs[a]);
    }
}

//Function to read the textfile of words into a global array needed for the 1,000 words module helper
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                splitLines(allText);
            }
        }
    }
    rawFile.send(null);
}

//Splits the giant string of words into seperate words needed for the 1,000 words module helper
function splitLines(text) {
    var splitArray = text.split("\n");
    wordsFor5Words = splitArray;
    printArray(splitArray);
}

//TEST FUNCTION - Prints an array to see contents to ensure all is working correctly
function printArray(arrayObj) {
    var i = 0;
    for (i = 0; i < arrayObj.length; i++) {
        console.log(i + ". " + arrayObj[i]);
    }
}

//Show / Hide a table
function toggleTable(tableNum) {
    
    //Get the table ID
    var x;
    if (tableNum === 1) {
        x = document.getElementById("showhidetable1");
    } else {
        x = document.getElementById("showhidetable2");
    }
    
    //If the current display is none chane it to block, if block change it to none
    if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//Function to show/hide an HTML element
function showHide(divId) {
    var x = document.getElementById(divId);
    var arrow = document.getElementById(divId.concat('Arrow'));
    
    //If hidden, set to visible; if visible, set to hidden
    if (x.style.display === "none") {
        x.style.display = "block";
        arrow.src = '../images/closeArrow.png';
    } else {
        x.style.display = "none";
        arrow.src = '../images/rightArrow.png';
    }
}

//Function to hide a div
function hideDiv(divId) {
    var x = document.getElementById(divId);
    var arrow = document.getElementById(divId.concat('Arrow'));
    
    x.style.display = "none";
    arrow.src = '../images/rightArrow.png';
}

//Load necessary data like all of the words needed for the 1,000 words module helper at the beginning when the page first loads
function loadData() {
    
    //Hide All Other Mods
    for (var a = 0; a < divs.length; a++) {
        hideDiv(divs[a]);
    }
	
	//Load in data from the words array file for 1,000 Words
	readTextFile('./words.txt');
}