$(function() {
  
  var checkbox = $("#checker");
  var hidden = $("#hiddenbit");
//  var test = prompt("Whyyy","sdfsdf");

//this is the important part:
  hidden.hide();
  

  checkbox.change(function() {
    if (checkbox.is(':checked')) {
      hidden.show();
      //datefill.val(full_date);
    
    } else {
      hidden.hide();
    }
  });

  var checkbox2 = $("#checker2");
  var hidden2 = $("#hiddenbit2");

//this is the important part:
  hidden2.hide();
  
  
  checkbox2.change(function() {
    if (checkbox2.is(':checked')) {
      hidden2.show();
      //datefill.val(full_date);
    
    } else {
      hidden2.hide();
    }

  });

  //**************************************************************


  var alive = $("#vol");

  alive.on("mousemove",function(){
 // alive.(function() {
   let numalive = alive.val();
   let numdead = 10-numalive;
   console.log("Alive insects: "+numalive+" Dead insects: "+numdead);
   document.getElementById("numalive").value = numalive;
   document.getElementById("numdead").value = numdead;

  });











 // var datefill = $("#today")
 
  
//currently this bit doesn't do anything...
  var today = new Date();
  var month_num = today.getMonth();
  var day_num = today.getDate();
  var year_num = today.getFullYear();
 
  var full_date = day_num+"-"+month_num+"-"+year_num;
 
  //let datefill = new Date().toISOString().substr(0, 10);
  //document.querySelector("#today").value = today;
  //console.log(full_date)
  //let today = new Date().toISOString().substr(0, 10);
  //document.querySelector("#today").value = today;
});