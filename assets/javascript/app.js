

document.querySelector("button").addEventListener("click", function(event) {
    event.preventDefault();
    
    function submitInfo() {
    
    let trainName = document.getElementById("train-name").value;
    let destination = document.getElementById("train-destination").value;
    let firstTime = document.getElementById("first-time").value;
    let frequencyMins = document.getElementById("frequency").value;
    let firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    let currentTime = moment();
    let diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    let tRemainder = diffTime % frequency;
    let tMinutesTillTrain = frequency - tRemainder;
    let nextTrain = moment().add(tMinutesTillTrain, "minutes");
        
    console.log(trainName);
        console.log(destination);
        console.log(frequency);
        console.log(moment(nextTrain).format("hh:mm"));
        console.log(tMinutesTillTrain);

    let tableRef = document.getElementById("trainTable").getElementsByTagName('tbody')[0];

    let newRow   = tableRef.insertRow();

    let newCell1  = newRow.insertCell(0);
    let newCell2  = newRow.insertCell(1);
    let newCell3  = newRow.insertCell(2);
    let newCell4  = newRow.insertCell(3);
    let newCell5  = newRow.insertCell(4);

    let newText1  = document.createTextNode(trainName);
    newCell1.appendChild(newText1);
    let newText2 = document.createTextNode(destination);
    newCell2.appendChild(newText2);
    let newText3  = document.createTextNode(frequency);
    newCell3.appendChild(newText3);
    let newText4  = document.createTextNode(moment(nextTrain).format("hh:mm"));
    newCell4.appendChild(newText4);
    let newText5  = document.createTextNode(tMinutesTillTrain);
    newCell5.appendChild(newText5);
    }
    submitInfo()
});

    

