

$(document).ready(function(){


//set click event for add button
$("#addBtn").on("click", function(){

    // save user input
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var trainTimeInput = moment($("#trainTimeInput").val().trim(), "HH:mm").subtract(1, "years").format("X");;
    var frequencyInput = $("#frequencyInput").val().trim();
    // var traininfo = [];
    // show values
    console.log(trainName);
    console.log(destination);
    console.log(trainTimeInput);
    console.log(frequencyInput);

    // make an object variable to send to firebase
    var newTrain = {
        name:  trainName,
        destination: destination,
        trainTime: trainTimeInput,
        frequency: frequencyInput,
    }

    // send trainInfo to Firebase
    trainInfo.push(newTrain);

    // empty text-boxes
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#trainInput").val("");
    $("#frequencyInput").val("");

    // stop auto refreshing
    return false;
});

// trainInfo.on("child_added", function(childSnapshot){

//     console.log(childSnapshot.val());

//     // assign firebase variables to snapshots.
//     var firebaseName = childSnapshot.val().name;
//     var firebaseDestination = childSnapshot.val().destination;
//     var firebaseTrainTimeInput = childSnapshot.val().trainTime;
//     var firebaseFrequency = childSnapshot.val().frequency;
    
//     var diffTime = moment().diff(moment(firebaseTrainTimeInput), "minutes");
//     var timeRemainder = moment().diff(moment(firebaseTrainTimeInput), "minutes") % firebaseFrequency ;
//     var minutes = firebaseFrequency - timeRemainder;

//     var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A"); 
    
//     // Test for correct times and info
//     console.log(minutes);
//     console.log(nextTrainArrival);
//     console.log(moment().format("hh:mm A"));
//     console.log(nextTrainArrival);
//     console.log(moment().format("X"));

//     // Append train info to table on page
//     $("#trainTable > tbody").append("<tr><td>" + firebaseName + "</td><td>"+ firebaseDestination + "</td><td>" + firebaseFrequency + " mins" + "</td><td>" + nextTrainArrival + "</td><td>" + minutes + "</td></tr>");

// }); 
    }); //END DOCUMENT.READY