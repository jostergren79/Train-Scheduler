document.querySelector("button").addEventListener("click" ,function() {
    console.log("youclicked");
    submitInfo()

});


function submitInfo() {

// defining variables by getelementbyid and grabbing value

    let trainName = document.getElementById("train-name").value;
    let destination = document.getElementById("train-destination").value;
    let firstTime = document.getElementById("first-time").value;
    let frequency = document.getElementById("trainFrequency").value;
   
 // moment.js conversions for time

    let firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    let currentTime = moment();
    let diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    let timeAway = diffTime % frequency;
    let minutesAway = frequency - timeAway;
    let nextTrain = moment().add(minutesAway, "minutes");
   
// updating trainTable with new rows

    let tableRef = document.getElementById("trainTable").getElementsByTagName("tbody")[0];
    let newRow   = tableRef.insertRow();
    let newCell1  = newRow.insertCell(0);
    let newCell2  = newRow.insertCell(1);
    let newCell3  = newRow.insertCell(2);
    let newCell4  = newRow.insertCell(3);
    let newCell5  = newRow.insertCell(4);

 // updating form data into train board

    let newText1  = document.createTextNode(trainName);
    newCell1.appendChild(newText1);
    let newText2 = document.createTextNode(destination);
    newCell2.appendChild(newText2);
    let newText3  = document.createTextNode(frequency);
    newCell3.appendChild(newText3);
    let newText4  = document.createTextNode(moment(nextTrain).format("hh:mm"));
    newCell4.appendChild(newText4);
    let newText5  = document.createTextNode(minutesAway);
    newCell5.appendChild(newText5);
}
    
// // working on local forage functionality to store data

// let data = {
//     trainName: trainName,
//     destination: destination,
//     firstTrainTime: firstTrainTime,
//     frequencyMins: frequencyMins,
// }
    
// let value = document.querySelector("td").value;
//     localforage.getItem("saved").then(function(result){
//         if(!result){
//         result = [];
//         }
//         result.push(data);
//         localforage.setItem("saved", result)
    
//         .then(function(){
//             console.log("saved")
//             console.log(result);

//         });
//     })
    
