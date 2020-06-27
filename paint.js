var h = 5;
var w = 5;
var colr = "black";
var t;
var x;
var y;
var radius = "0%";
var Cwidth = 500;
var Cheight = 500;
var m;
var elmnt;
var dclass = "divs";


function setpoint() {

  x = event.clientX;
  y = event.clientY;

  var div = document.getElementById("scren");
  var rect = div.getBoundingClientRect();
  xd = rect.left;
  yd = rect.top;
  wd = rect.width;
  hd = rect.height;

  if (((xd < x) && (x < wd + xd - w)) && ((hd + yd - h > y) && (y > yd))) {

    document.getElementById("scren").addEventListener("mousemove", setpoint);
    t = document.createElement("div");
    t.id = "line";
    t.className = dclass;
    t.style.top = y + "px";
    t.style.left = x + "px";
    t.style.position = "absolute";
    t.style.height = h + "px";
    t.style.width = w + "px";
    t.style.backgroundColor = colr;
    t.style.borderRadius = radius;
    t.style.overflow = "hidden";
    document.getElementById("scren").append(t);
  }
}

document.getElementById("scren").addEventListener("mousedown", setpoint);

document.getElementById("scren").addEventListener("mouseup", () => { document.getElementById("scren").removeEventListener("mousemove", setpoint) });
document.getElementById("container").addEventListener("mouseup", () => { document.getElementById("scren").removeEventListener("mousemove", setpoint) });
//document.querySelector("body").removeEventListener("mousemove", setpoint) ;

//Set Color
document.getElementById("blue").addEventListener("click", subc);
document.getElementById("red").addEventListener("click", subc);
document.getElementById("black").addEventListener("click", subc);
document.getElementById("green").addEventListener("click", subc);
document.getElementById("yellow").addEventListener("click", subc);
document.getElementById("orange").addEventListener("click", subc);
document.getElementById("eraser").addEventListener("click", subc);

var ColorStore = {
  colors: [
    { id: "black", color: "black", }, { id: "orange", color: "orange", }, { id: "yellow", color: "yellow", },
    { id: "blue", color: "blue", }, { id: "red", color: "red", }, { id: "green", color: "green", }, { id: "eraser", color: "white", },
  ]
}

function subc() {

  setColor(ColorStore, this.id);
}


function setColor(Store, id) {
  for (i = 0; i < Store.colors.length; i++) {
    if (Store.colors[i].id === id) {
      colr = Store.colors[i].color;
    }
  }
}

//Set Brush size
//Html
//<input list="sizes" name="sizess" class="one">
//<datalist id="sizes" class="two">
//    <option id="1" value="5px">
//   <option id="2" value="10px">
//   <option id="3" value="15px">
//   <option id="4" value="20px">
//   <option id="5" value="30px">
//</datalist>
document.getElementsByClassName('one')[0].addEventListener('click', function () { this.value = "" });//as input window is clicked
// set there value "" , if not chosen later value will be stuck in that input window


document.getElementById('sub').addEventListener("click", subm);

function subm() {
  var answer = document.getElementsByName('sizess')[0].value;
  //after submit pressed - first input window which is [0] - document.getElementsByName('sizess')[0] (in our case the only one input) 
  // its value(that currently in input window- value that was chosen) - value chosen from the option datalist
  var options = document.getElementsByTagName('option');

  for (var i = 0; i < options.length; i++) {
    if (options[i].value === answer) {
      setSize(SizeStore, options[i].id);
    }
  }
}

function setSize(Store, id) {
  for (i = 0; i < Store.sizes.length; i++) {
    if (Store.sizes[i].id === id) {
      h = Store.sizes[i].size;
      w = Store.sizes[i].size;
    }
  }
}

var SizeStore = {
  sizes: [
    { id: "1", size: 5, }, { id: "2", size: 10, }, { id: "3", size: 15, }, { id: "4", size: 20, }, { id: "5", size: 30, },
  ]
}

//Set Canvas size
document.getElementById('canvasz').addEventListener("click", setCnvasSizel);

function setCnvasSizel() {

  Cwidth = document.getElementById("width").value;
  Cheight = document.getElementById("heigth").value;
  m = document.getElementById("scren");
  if (Cheight < 551) {
    m.style.height = Cheight + "px";
  }
  if (Cheight > 551) {
    alert("Height should be less than 550px")
  }
  if (Cwidth < 1101) {
    m.style.width = Cwidth + "px";
  }
  if (Cwidth > 1101) {
    alert("Width should be less than 1100px")
  }

}

//BRUSH TYPE
document.getElementById('cir').addEventListener("click", function () {
  radius = "100%";
});

document.getElementById('boxx').addEventListener("click", function () {
  radius = "0%";
});

//EraseALL
document.getElementById('eraseAll').addEventListener("click", function () {
  elmnt = document.getElementById("scren");
  //elmnt.empty();
  while (elmnt.firstChild) {
    elmnt.removeChild(elmnt.firstChild);
  }
});

