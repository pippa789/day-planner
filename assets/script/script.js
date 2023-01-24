// * Display the current day at the top of the calender when a user opens the planner.

let $now = $('#time')
setInterval(
    function(){
        $('#time').text(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'))
}, 1000)

// * Present timeblocks for standard business hours when the user scrolls down.
let $submit = $("<button>")
let $task = $("<input>")
$submit.on("click", function(){
    
    $task.localStorage.setItem('data-hour','9am');
    $task.val(localStorage.getItem('9am'));
    $task.text('9am')
    $submit.append('9am');
    console.log('9am')
})




// day three in zoom at 40:21
// var today = moment()
// var weekNum = today.format('w');
// let takeOut = takeOut;
// if(weekNum % 2){
//     takeOut=true;
// } else {
//     takeOut=false;
// }
//     console.log(takeOut)