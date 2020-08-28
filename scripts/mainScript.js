var wordsFor5Words = [];

function modifyCounters(color, direction) {
	var ele;
	var newNum = 0;
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

function testFun() {
	alert("SUCESS!");
}

function getBinaryVal() {
    var input = document.getElementById('binaryText').value.toUpperCase();
    document.getElementById('binaryText').value = "";
    var output = document.getElementById('binaryResponse');
    output.innerHTML = "0";
    for (var i = 0; i < input.length; i++) {
      output.innerHTML += input[i].charCodeAt(0).toString(2) + " ";
  }
}

function chickenNuggets() {
    var input = document.getElementById('chickNugs').value;
    document.getElementById('chickNugs').value = "";
    var output = document.getElementById('chickNugsRes');   //EXAMPLE: 69
    var ChickenNuggets = parseInt(input, 10);
    var twenty_nuggets = 0;
    var nine_nuggets = 0;
    var six_nuggets = 0;
    
    twenty_nuggets = Math.floor(ChickenNuggets / 20);   //3
    ChickenNuggets = Math.floor(ChickenNuggets % 20);   //9
    nine_nuggets = Math.floor(ChickenNuggets / 9);      //1
    ChickenNuggets = Math.floor(ChickenNuggets % 9);    //0
    six_nuggets = Math.floor(ChickenNuggets / 6);       //0
    ChickenNuggets = Math.floor(ChickenNuggets % 6);    //0
    
    if (ChickenNuggets != 0) {
        output.innerHTML = "IMPOSSIBLE REQUEST!";
    } else {
        output.innerHTML = "Twenty: " + twenty_nuggets + "<br />";
        output.innerHTML += "Nine: " + nine_nuggets + "<br />";
        output.innerHTML += "Six: " + six_nuggets + "<br /";
    }
}

function additionGo() {
    var input = document.getElementById('additionTextArea').value.toUpperCase();
    var lines = input.split('\n');
    document.getElementById('additionTextArea').value = "";
    var output = document.getElementById('additonResponse');
    var sum = 0;
    var allNums = true;
    for (var i = 0; i < lines.length; i++) {
        if (isNaN(lines[i])) {
            allNums = false;
            break;
        }
        sum += parseInt(lines[i]);
    }
    
    output.innerHTML = "";
    if (allNums) {
        output.innerHTML += "SUM: " + sum.toString(10);
    } else {
        output.innerHTML += "AN ERROR OCCURED";
    }
}

function findWord() {
    var input = document.getElementById('word5').value.toUpperCase();
    document.getElementById('word5').value = "";
    var output = document.getElementById('words5resp');
    wordsFor5Words.sort();
    
    if (binarySearch(wordsFor5Words, input) === -1) {
        output.innerHTML = input + " NOT FOUND";
    } else {
        output.innerHTML = input + " FOUND!!";
    }
}

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

function clr_fields() {
	document.getElementById('redbox').value = "";
	document.getElementById('redbox').value = 0;
	document.getElementById('bluebox').value = "";
	document.getElementById('bluebox').value = 0;
	document.getElementById('blackbox').value = "";
	document.getElementById('blackbox').value = 0;
	document.getElementById('MemoryTextArea').value = "";
    //document.getElementById('binaryText').value = "";
    //document.getElementById('binaryResponse').innerHTML = "";
    //document.getElementById('chickNugs').value = "";
    //document.getElementById('chickNugsRes').innerHTML = "";
    document.getElementById('additionTextArea').value = "";
    document.getElementById('additonResponse').innerHTML = "";
    document.getElementById('word5').value = "";
    document.getElementById('words5resp').innerHTML = "";
    document.getElementById("showhidetable1").style.display = "none";
    document.getElementById("showhidetable2").style.display = "none";
}

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

function splitLines(text) {
    var splitArray = text.split("\n");
    wordsFor5Words = splitArray;
    printArray(splitArray);
}

function printArray(arrayObj) {
    var i = 0;
    for (i = 0; i < arrayObj.length; i++) {
        console.log(i + ". " + arrayObj[i]);
    }
}

function toggleTable(tableNum) {
    var x;
    if (tableNum === 1) {
        x = document.getElementById("showhidetable1");
    } else {
        x = document.getElementById("showhidetable2");
    }
    
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function loadData() {
    alert("WTF");
	readTextFile('./words.txt');
	alert("A");
    document.getElementById("showhidetable1").style.display = "none";
	alert("B");
    document.getElementById("showhidetable2").style.display = "none";
	alert("C");
}