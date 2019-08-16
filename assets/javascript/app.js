document.querySelector("button").addEventListener("click" ,function() {
    console.log("youclicked");
    submitInfo()

});


function submitInfo() {

    var trainName = document.getElementById("train-name").value;
    var destination = document.getElementById("train-destination").value;
    var firstTime = document.getElementById("first-time").value;
    var frequencyMins = document.getElementById("trainFrequency").value;
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    var currentTime = moment();
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    var timeAway = diffTime % frequency;
    var minutesAway = frequency - timeAway;
    var nextTrain = moment().add(minutesAway, "minutes");
        
    console.log(trainName);
        console.log(destination);
        console.log(frequency);
        console.log(moment(nextTrain).format("hh:mm"));
        console.log(minutesAway);

    var tableRef = document.getElementById("trainTable").getElementsByTagName("tbody")[0];

    var newRow   = tableRef.insertRow();

    var newCell1  = newRow.insertCell(0);
    var newCell2  = newRow.insertCell(1);
    var newCell3  = newRow.insertCell(2);
    var newCell4  = newRow.insertCell(3);
    var newCell5  = newRow.insertCell(4);

    var newText1  = document.createTextNode(trainName);
    newCell1.appendChild(newText1);
    var newText2 = document.createTextNode(destination);
    newCell2.appendChild(newText2);
    var newText3  = document.createTextNode(frequency);
    newCell3.appendChild(newText3);
    var newText4  = document.createTextNode(moment(nextTrain).format("hh:mm"));
    newCell4.appendChild(newText4);
    var newText5  = document.createTextNode(minutesAway);
    newCell5.appendChild(newText5);
}
    
   





   


    

