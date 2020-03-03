

window.addEventListener("load", init, false);



function init() {
    let $ = function(id) {
        return window.document.getElementById(id)
    };

button.addEventListener("click", function(e) {
    
    if (e.target.value === "=") {
        calculate();
     } else {enter(e.target.value);};

});

/*
$("seven").addEventListener("click", function(e) {
        //  window.console.log(e.target.value);
     enter($("seven").value);
 });
$("eight").addEventListener("click", function() {
    enter($("eight").value);
});
$("nine").addEventListener("click", function() {
    enter($("nine").value);
});
$("divide").addEventListener("click", function() {
    enter($("divide").value);
});
$("four").addEventListener("click", function() {
    enter($("four").value);
});
$("five").addEventListener("click", function() {
    enter($("five").value);
});
$("six").addEventListener("click", function() {
    enter($("six").value);
});
$("multiply").addEventListener("click", function() {
    enter($("multiply").value);
});
$("one").addEventListener("click", function() {
    enter($("one").value);
});
$("two").addEventListener("click", function() {
    enter($("two").value);
});
$("three").addEventListener("click", function() {
    enter($("three").value);
});
$("subtract").addEventListener("click", function() {
    enter($("subtract").value);
});
$("zero").addEventListener("click", function() {
    enter($("zero").value);
});
$("period").addEventListener("click", function() {
    enter($("period").value);
});
$("add").addEventListener("click", function() {
    enter($("add").value);
});
$("equal").addEventListener("click", function() {
    calculate();
});
*/

function enter(val) {
    let x = $("result").value;
  //window.console.log("The value is " + val);
  // window.console.log( $("result").value);
   x += val;
   //window.console.log(x);
   $("result").value = x;
}

function calculate() {
    let cal = $("result").value;

   // window.console.log(eval(cal));
    $("result").value = eval(cal);

}





}