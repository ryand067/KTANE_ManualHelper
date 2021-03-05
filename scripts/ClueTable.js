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
    console.log("Current Color: " + item.style.backgroundColor);
    if (item.style.backgroundColor === "") {
        item.style.backgroundColor = "yellow";
    } else if (item.style.backgroundColor.localeCompare("yellow") === 0) {
        item.style.backgroundColor = "lime";
    } else {
        item.style.backgroundColor = "";
    }
}

function loadFrm() {
    var x = document.getElementById('tableD1');
    var arrow = document.getElementById(divId.concat('Arrow'));

    x.style.display = "none";
    arrow.src = './images/rightArrow.png';
}

function clearCluePage() {
    var tblElems = ["locTableScarlett", "locTablePlum", "locTablePeacock", "locTableGreen", "locTableMustard", "locTableWhite",
        "locTableCandle", "locTableDagger", "locTablePipe", "locTableRevolver", "locTableRope", "locTableSpanner",
        "locTableR1", "locTable1A", "locTable1B", "locTable1C", "locTable1D", "locTable1E", "locTable1F",
        "locTableR2", "locTable2A", "locTable2B", "locTable2C", "locTable2D", "locTable2E", "locTable2F",
        "locTableR3", "locTable3A", "locTable3B", "locTable3C", "locTable3D", "locTable3E", "locTable3F",
        "locTableR4", "locTable4A", "locTable4B", "locTable4C", "locTable4D", "locTable4E", "locTable4F",
        "locTableR5", "locTable5A", "locTable5B", "locTable5C", "locTable5D", "locTable5E", "locTable5F",
        "locTableR6", "locTable6A", "locTable6B", "locTable6C", "locTable6D", "locTable6E", "locTable6F",
        "locTableR7", "locTable7A", "locTable7B", "locTable7C", "locTable7D", "locTable7E", "locTable7F",
        "locTableR8", "locTable8A", "locTable8B", "locTable8C", "locTable8D", "locTable8E", "locTable8F",
        "locTableR9", "locTable9A", "locTable9B", "locTable9C", "locTable9D", "locTable9E", "locTable9F",
    ]

    for (var a = 0; a < tblElems.length; a++) {
        document.getElementById(tblElems[a]).style.backgroundColor = "";
    }

    document.getElementById('tableD1').style.display = "none";
}