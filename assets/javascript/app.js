let array = []
let trainName;
let destination;
let firstTrainTime;
let frequencyMins;



document.querySelector("button").addEventListener("click", function(event) {
    event.preventDefault();
    submitInfo()

function submitInfo() {
    console.log("you clicked")
    let trainName = document.getElementById("train-name").value;
    let destination = document.getElementById("train-destination").value;
    let firstTrainTime = document.getElementById("first-train-time").value;
    let frequencyMins = document.getElementById("frequency").value;
    array.push(trainName,destination,firstTrainTime,frequencyMins);
    console.log(array)
    console.log(trainName)
};

submitInfo() 
});
