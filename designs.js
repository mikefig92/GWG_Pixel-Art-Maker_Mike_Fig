// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function makeGrid() {
  var gridCode = "<tbody>";
  var rowCode = "<tr>";
  for (var i = 1; i <= sizePicker.width.value; i++) {
    rowCode = rowCode + "<td bgcolor='#ffffff'></td>";
  };
  rowCode = rowCode + "</tr>";
  for(var i = 1; i <= sizePicker.height.value; i++) {
    gridCode = gridCode + rowCode;
  };
  gridCode = gridCode + "</tbody>";
  $(pixelCanvas).append(gridCode);
  $('#pixelCanvas').empty().append(gridCode);
  return false;
});
$('#pixelCanvas').click(function setColor(event){
  $(event.target).attr("bgcolor",colorPicker.value);
});
$('body').click(function status(event){
  console.log(event.target);
});
/* function handler( event ) {
  var target = $( event.target );
  if ( target.is("td") ) {
    target.attr("bgcolor",colorPicker.value);
  }
}
$("td").click(handler).find("td").attr("bgcolor",colorPicker.value); */
