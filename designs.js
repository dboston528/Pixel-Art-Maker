console.log("What the Fuck!")

// Select color input
console.log($("#colorPicker").val());
// Select size input
console.log($("#inputHeight").val());
console.log($("#inputWeight").val());
// When size is submitted by the user, call makeGrid()
$("input[type='submit']").on("click",function(event){
  event.preventDefault();
  console.log("LISTEN!");

  const height = $("#inputHeight").val();
  const width = $("#inputWeight").val();

  $("#pixelCanvas").empty();
  makeGrid(height,width);

});




function makeGrid(height, width) {

// Your code goes here!
console.log(height, width);

//for number up to height
for (let i = 0; i<height; i++){

//create a row
$("#pixelCanvas").append($("<tr></tr>"));

// for number up to width
for (let j = 0; j<width; j++){

//add a td to row
  $("tr").last().append($("<td></td>"));
  }
}




}




//**Draw psuedocode**

//color sqaure when clicked function
$("#pixelCanvas").on("click", "td", function (){

$(this).css("background-color", $("#colorPicker").val());

});
  // change background color of event target's
// $(this).css("backgorund-color","red");

// });


//I would like ot give credit where credit is due. I would like to thank Matt Cranford for providing such an awesome guide in helping with the pixel art make. He really explaned in detail all of the concepts used to create this application.
