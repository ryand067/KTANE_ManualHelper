//Class
class CrazyTalkItem {
    constructor(text, up, down) {
        this.text = text;
        this.up = up;
        this.down = down;
    }
    
    compare(items) {
        return (this.text.localeCompare(items.text));
    }
};

//Variable Array to hold all of the words needed for the 1,000 Words Module Helper
var wordsFor5Words = [];
var passes = ["about", "after", "again", "below", "could", "every", "first", "found", "great", "house", "large", "learn", "never", "other", "place", "plant", "point", "right", "small", "sound", "spell",
             "still", "study", "their", "there", "these", "thing", "think", "three", "water", "where", "which", "world", "would", "write"];
var divs = ["addition", "chickenNuggets", "crazyTalk", "thousandWords", "modulo", "divisibleNumbers", "jackolantern", "tableA", "tableB", "tableC"];
var CrazyTalkWords = [new CrazyTalkItem("< < > < > >", 5, 4), new CrazyTalkItem("1 3 2 4", 3, 2), new CrazyTalkItem("LEFT ARROW LEFT WORD RIGHT ARROW LEFT WORD RIGHT ARROW RIGHT WORD", 5, 8),
                     new CrazyTalkItem("BLANK", 1, 3), new CrazyTalkItem("LITERALLY BLANK", 1, 5), new CrazyTalkItem("FOR THE LOVE OF ALL THAT IS GOOD AND HOLY PLEASE FULLSTOP FULLSTOP.", 9, 0),
                     new CrazyTalkItem("AN ACTUAL LEFT ARROW LITERAL PHRASE", 5, 3), new CrazyTalkItem("FOR THE LOVE OF - THE DISPLAY JUST CHANGED, I DIDN'T KNOW THIS MOD COULD DO THAT. DOES IT MENTION THAT IN THE MANUAL?", 8, 7), new CrazyTalkItem("ALL WORDS ONE THREE TO FOR FOR AS IN THIS IS FOR YOU", 4, 0), new CrazyTalkItem("LITERALLY NOTHING", 1, 4), new CrazyTalkItem("NO, LITERALLY NOTHING", 2, 5),
                     new CrazyTalkItem("THE WORD LEFT", 7, 0), new CrazyTalkItem("HOLD ON IT'S BLANK", 1, 9), new CrazyTalkItem("SEVEN WORDS FIVE WORDS THREE WORDS THE PUNCTUATION FULLSTOP", 0, 5), new CrazyTalkItem("THE PHRASE THE WORD STOP TWICE", 9, 1), new CrazyTalkItem("THE FOLLOWING SENTENCE THE WORD NOTHING", 2, 7), new CrazyTalkItem("ONE THREE TO FOR", 3, 9), new CrazyTalkItem("THREE WORDS THE WORD STOP", 7, 3), new CrazyTalkItem("DISREGARD WHAT I JUST SAID. FOUR WORDS, NO PUNCTUATION. ONE THREE 2 4.", 3, 1), new CrazyTalkItem("1 3 2 FOR", 1, 0), new CrazyTalkItem("DISREGARD WHAT I JUST SAID. TWO WORDS THEN TWO DIGITS. ONE THREE 2 4.", 0, 8), new CrazyTalkItem("WE JUST BLEW UP", 4, 2), new CrazyTalkItem("NO REALLY.", 5, 2), new CrazyTalkItem("< LEFT > LEFT > RIGHT", 5, 6),
                     new CrazyTalkItem("ONE AND THEN 3 TO 4", 4, 7), new CrazyTalkItem("STOP TWICE", 7, 6), new CrazyTalkItem("LEFT", 6, 9), new CrazyTalkItem("..", 8, 5), new CrazyTalkItem("PERIOD PERIOD", 8, 2),
                     new CrazyTalkItem("THERE ARE THREE WORDS NO PUNCTUATION READY? STOP DOT PERIOD", 5, 0), new CrazyTalkItem("NOVEBMER OSCAR SPACE, LIMA INDIGO TANGO ECHO ROMEO ALPHA LIMA LIMA YANKEE SPACE NOVEMBER OSCAR TANGO HOTEL INDEGO NOVEMBER GOLF", 2, 9), new CrazyTalkItem("FIVE WORDS THREE WORDS THE PUNCTUATION FULLSTOP", 1, 9), new CrazyTalkItem("THE PHRASE: THE PUNCTUATION FULLSTOP", 9, 3),
                     new CrazyTalkItem("EMPTY SPACE", 1, 6), new CrazyTalkItem("ONE THREE TWO FOUR", 3, 7), new CrazyTalkItem("IT'S SHOWING NOTHING", 2, 3), new CrazyTalkItem("LIMA ECHO FOXTROT TANGO SPACE ALPHA ROMEO ROMEO OSCAR RISKY SPACE SIERRA YANKEE MIKE BRAVO OSCAR LIMA", 1, 2), new CrazyTalkItem("ONE 3 2 4", 3, 4), new CrazyTalkItem("STOP.", 7, 4), new CrazyTalkItem(".PERIOD", 8, 1),
                     new CrazyTalkItem("NO REALLY STOP", 5, 1), new CrazyTalkItem("1 3 TOO 4", 2, 0), new CrazyTalkItem("PERIOD TWICE", 8, 3), new CrazyTalkItem("1 3 TOO WITH 2 OHS FOUR", 4,  2),
                     new CrazyTalkItem("1 3 TO 4", 3, 0), new CrazyTalkItem("STOP DOT PERIOD", 5, 0), new CrazyTalkItem("LEFT LEFT RIGHT LEFT RIGHT RIGHT", 6, 7), new CrazyTalkItem("IT LITERALLY SAYS THE WORD ONE AND THEN THE NUMBERS 2 3 4", 4, 5), new CrazyTalkItem("ONE IN LETTERS 3 2 4 IN NUMBERS", 3, 5), new CrazyTalkItem("WAIT FORGET EVERYTHING I JUST SAID, TWO WORDS THEN TWO SYMBOLS THEN TWO WORDS: < < RIGHT LEFT > >", 1, 6), new CrazyTalkItem("1 THREE TWO FOUR", 3, 6), new CrazyTalkItem("PERIOD", 7, 9), new CrazyTalkItem(".STOP", 7, 8), new CrazyTalkItem("NOVEBMER OSCAR SPACE, LIMA INDIA TANGO ECHO ROMEO ALPHA LIMA LIMA YANKEE SPACE NOVEMBER OSCAR TANGO HOTEL INDIA NOVEMBER GOLF", 0, 7), new CrazyTalkItem("LIMA ECHO FOXTROT TANGO SPACE ALPHA ROMEO ROMEO OSCAR WHISKEY SPACE SIERRA YANKEE MIKE BRAVO OSCAR LIMA", 6, 5), new CrazyTalkItem("NOTHING", 1, 2), new CrazyTalkItem("THERE'S NOTHING", 1, 8), new CrazyTalkItem("STOP STOP", 7, 5), new CrazyTalkItem("RIGHT ALL IN WORDS STARTING NOW ONE TWO THREE FOUR", 4, 9), new CrazyTalkItem("THE PHRASE THE WORD LEFT", 7, 1), new CrazyTalkItem("LEFT ARROW SYMBOL TWICE THEN THE WORDS RIGHT LEFT RIGHT THEN A RIGHT ARROW SYMBOL", 5, 9), new CrazyTalkItem("LEFT LEFT RIGHT < RIGHT >", 5, 7), new CrazyTalkItem("NO COMMA LITERALLY NOTHING", 2, 4), new CrazyTalkItem("HOLD ON CRAZY TALK WHILE I DO THIS NEEDY", 2, 1),
                     new CrazyTalkItem("THIS ONE IS ALL ARROW SYMBOLS NO WORDS", 2, 8), new CrazyTalkItem("<", 6, 3), new CrazyTalkItem("THE WORD STOP TWICE", 9, 4), new CrazyTalkItem("< < RIGHT LEFT > >", 6, 1), new CrazyTalkItem("THE PUNCTUATION FULLSTOP", 9, 2), new CrazyTalkItem("1 3 TOO WITH TWO OS 4", 4, 1), new CrazyTalkItem("THREE WORDS THE PUNCTUATION FULLSTOP", 9, 9),
                     new CrazyTalkItem("OK WORD FOR WORD LEFT ARROW SYMBOL TWICE THEN THE WORDS RIGHT LEFT RIGHT THEN A RIGHT ARROW SYMBOL", 6, 0), new CrazyTalkItem("DOT DOT", 8, 6),
                     new CrazyTalkItem("LEFT ARROW", 6, 8), new CrazyTalkItem("AFTER I SAY BEEP FIND THIS PHRASE WORD FOR WORD BEEP AN ACTUAL LEFT ARROW", 7, 2), new CrazyTalkItem("ONE THREE 2 WITH TWO OHS 4", 4, 3),
                     new CrazyTalkItem("LEFT ARROW SYMBOL", 6, 4), new CrazyTalkItem("AN ACTUAL LEFT ARROW", 6, 2), new CrazyTalkItem("THAT'S WHAT IT'S SHOWING", 2, 1), new CrazyTalkItem("THE PHRASE THE WORD NOTHING", 2, 6), new CrazyTalkItem("THE WORD ONE AND THEN THE NUMBERS 3 2 4", 4, 8), new CrazyTalkItem("ONE 3 2 FOUR", 3, 8), new CrazyTalkItem("ONE WORD THEN PUNCTUATION. STOP STOP.", 0, 9),
                     new CrazyTalkItem("THE WORD BLANK", 0, 1), new CrazyTalkItem("FULLSTOP FULLSTOP", 8, 4)];
//var CrazyTalkWords = [new CrazyTalkItem("Hello", 1, 2), new CrazyTalkItem("World", 3, 4), new CrazyTalkItem("AzzyLand", 6, 8), new CrazyTalkItem('< < > < > >', 5, 4), new CrazyTalkItem('< LEFT > LEFT > RIGHT', 5, 6)];

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
        } else if (lines[i] === "") {
            
            //Do Nothing
        } else {
        
            //If the number is valid, add it to the current sum
            sum += parseInt(lines[i]);
        }
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

//Crazy Talk Function
function CrazyTalkGo() {
    
    //Set input and outputs
    var input = document.getElementById('CrazyTalkTextArea').value.toUpperCase();
    var output = document.getElementById('CrazyTalkResponse');
    document.getElementById('CrazyTalkTextArea').value = "";
    
    //If the search finds it, report to the user that it was found and the up and down values. Otherwise report that it wasn't
    var bsRes = search(CrazyTalkWords, input);
    if (bsRes === -1) {
        output.innerHTML = "CrazyTalk <i>" + input + "</i> not found!";
    } else {
        output.innerHTML = "CrazyTalk <i>" + input + "</i> Found!<br> &emsp; UP: " + CrazyTalkWords[bsRes].up + "<br> &emsp; DOWN: " + CrazyTalkWords[bsRes].down;
    }
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
            lower = mid + 1;
        } else {
            upper = mid - 1;
        }
        if (res === 0) {
            return mid;
        }
    }
    return -1;
}

//Search function for CrazyTalk
function search(arr, phrase) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].text.localeCompare(phrase) === 0) {
            return i;
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
    var b = parseInt(getSelected("divNumRad"), 10);
    var output = document.getElementById('divisibleRes');
    
    //Clear the textboxes for next input
    document.getElementById('divisibleNum').value = "";
    
    //Display the results
    if (a % b === 0) {
        output.innerHTML = "YEA";
    } else {
        output.innerHTML = "NAY";
    }
    
    //Return focus to the first textbox
    document.getElementById('divisibleNum').focus();
}

//Function to get value of selected Radio Button
function getSelected(radioName) {
    var radios = document.getElementsByName(radioName);
    
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value
        }
    }
}

//Clear Function...Clears all fields and text and resets everything
function clr_fields() {
	document.getElementById('redbox').value = "";
    document.getElementById('wordPass').value = "";
	document.getElementById('redbox').value = 0;
	document.getElementById('bluebox').value = "";
	document.getElementById('bluebox').value = 0;
	document.getElementById('blackbox').value = "";
	document.getElementById('blackbox').value = 0;
	document.getElementById('MemoryTextArea').value = "";
    document.getElementById("CrazyTalkTextArea").value = "";
    document.getElementById('chickNugs').value = "";
    document.getElementById('chickNugsRes').innerHTML = "";
    document.getElementById('additionTextArea').value = "";
    document.getElementById('additonResponse').innerHTML = "";
    document.getElementById('word5').value = "";
    document.getElementById('words5resp').innerHTML = "";
    document.getElementById('chickyFirst').checked = true;
    document.getElementById('divNumRad3').checked = true;
    document.getElementById('chickyAll').checked = false;
    document.getElementById('moduloN').value = "";
    document.getElementById('moduloM').value = "";
    document.getElementById('modRes').innerHTML = "";
    document.getElementById('divisibleNum').value = "";
    document.getElementById('divisibleRes').innerHTML = "";
    document.getElementById("CrazyTalkResponse").innerHTML = "";
    
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
        //console.log(i + ". " + arrayObj[i]);
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
        arrow.src = './images/closeArrow.png';
    } else {
        x.style.display = "none";
        arrow.src = './images/rightArrow.png';
    }
}

//Function to hide a div
function hideDiv(divId) {
    var x = document.getElementById(divId);
    var arrow = document.getElementById(divId.concat('Arrow'));
    
    x.style.display = "none";
    arrow.src = './images/rightArrow.png';
}

//Load necessary data like all of the words needed for the 1,000 words module helper at the beginning when the page first loads
function loadData() {
    
    //Hide All Other Mods
    for (var a = 0; a < divs.length; a++) {
        hideDiv(divs[a]);
    }
	
	//Load in data from the words array file for 1,000 Words
	readTextFile('./words.txt');
    autocomplete(document.getElementById("word5"), wordsFor5Words);
    autocomplete(document.getElementById("wordPass"), passes);
    
    //First, create a new String Array with the possible results
    var ctarrstr = [];
    for (var b = 0; b < CrazyTalkWords.length; b++) {
        ctarrstr[b] = CrazyTalkWords[b].text;
        //console.log("TEXT: " + ctarrstr[b]);
    }
    autocomplete(document.getElementById("CrazyTalkTextArea"), ctarrstr);
}

//Autocomplete Functions
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
