//Function to toggle color of single Cell
function toggleCellColor(cellId) {
    var item = document.getElementById(cellId);

    if (item.style.backgroundColor === "") {
        item.style.backgroundColor = "#FF6700";
    } else {
        item.style.backgroundColor = "";
    }
}

function toggleCellNumColor(cellId) {
    var item = document.getElementById(cellId);
    console.log("B Color: " + item.style.backgroundColor);
    if (item.style.backgroundColor === "") {
        item.style.backgroundColor = "yellow";
    } else if (item.style.backgroundColor.localeCompare("yellow")) {
        item.style.backgroundColor === "lime";
    } else {
        item.style.backgroundColor = "";
    }
}

function colorToHex(color) {
    if (color.substr(0, 1) === '#') {
        return color;
    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);

    var rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16).padStart(6, '0');
};