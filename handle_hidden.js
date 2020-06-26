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

  //this is the second important part:
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


  var alive_dead = $("#mortality");
  var Live = $("#numalive");
  var Dead = $("#numdead");
  var mort_max = $("#bottlepop");


 //makes the slider return a dead and alive ratio
  //var numalive = alive_dead.val();
  //var numdead = document.getElementById("mortality").max-numalive;
  
//**********************************
  var mort_stats = $("#mort_stats");
  
  mort_stats.hide();

  mort_max.on("keydown change",function(e) {
    mort_stats.show();
    document.getElementById("mortality").max = mort_max.val();
    console.log(e);

  });

//**********************************


  alive_dead.on("mousemove",function(){
 // alive.(function() {
 //makes the slider return a dead and alive ratio
  var numalive = alive_dead.val();
  var numdead = document.getElementById("mortality").max-numalive;
   //Debug:
   //console.log("Alive insects: "+numalive+" Dead insects: "+numdead);
   document.getElementById("numalive").value = numalive;
   document.getElementById("numdead").value = numdead;
  });
  //**************************************************************

  // now you can enter the live/dead and it autocalculates from the text box
  Live.change(function() {
    console.log(Live.val()+"L L  D"+Dead.val())
    document.getElementById("mortality").value = Live.val();
    document.getElementById("numdead").value = mort_max.val()-Live.val();
  });   

  Dead.change(function() {
    console.log(Live.val()+"L  D D"+Dead.val())
    document.getElementById("mortality").value = mort_max.val()-Dead.val();
    document.getElementById("numalive").value = mort_max.val()-Dead.val();
  });

  //**************************************************************


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