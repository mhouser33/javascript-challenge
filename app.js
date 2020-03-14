// Data from data.js
var UFOtable = data;

tbody = d3.select("tbody")

// forEach loop through table using object entries
function displayData(dataloop){ 
tbody.text("")
dataloop.forEach(function(real_aliens){
add_tr = tbody.append("tr")
Object.entries(real_aliens).forEach(function([key, value]){
    add_td = add_tr.append("td").text(value)	
    })
})}

displayData(UFOtable)

var submit = d3.select("#submit");

submit.on("click", function() {

  // Grab the input and get raw HTML node
  var dateInput = d3.select("#datetime");
  var cityInput = d3.select("#city");
  var stateInput = d3.select("#state");
  var countryInput = d3.select("#country");
  var shapeInput = d3.select("#shape");

  // Variable created to filter the table if user doesn't enter all information 
  var filtered = UFOtable.filter(real_aliens =>{
  return(real_aliens.datetime===dateInput.property("value") || !dateInput.property("value") ) && 
        (real_aliens.city===cityInput.property("value") || !cityInput.property("value")) &&
        (real_aliens.state===stateInput.property("value") || !stateInput.property("value")) &&
        (real_aliens.country===countryInput.property("value") || !countryInput.property("value")) &&
        (real_aliens.shape===shapeInput.property("value") || !shapeInput.property("value"))
 })

 //With the filtered entry entered, run through function to display filtered table
 displayData(filtered);

});

var filterInputs = d3.selectAll('.form-control');

function clearEntries() {
    filters = {};

    // Empty input field set
    filterInputs._groups[0].forEach(entry => {
        if (entry.value != 0) {
            d3.select('#' + entry.id).node().value = "";
        }
    });
};

var clearButton = d3.select("#clear");
// Insert clear button to delete fields
clearButton.on('click', function () {

    // Prevent entire page refresh
    d3.event.preventDefault();
    // Clears input fields
    clearEntries()
});
