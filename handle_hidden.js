$(function() {
  
  var checkbox = $("#checker");
  var hidden = $("#hiddenbit");
 // var datefill = $("#today")
 
  var today = new Date();
  var month_num = today.getMonth();
  var day_num = today.getDate();
  var year_num = today.getFullYear();
 
  var full_date = day_num+"-"+month_num+"-"+year_num;
 
  let datefill = new Date();
  //console.log(full_date)

  hidden.hide();
  
  
  checkbox.change(function() {
    if (checkbox.is(':checked')) {
      hidden.show();
      //datefill.val(full_date);
    
    } else {
      hidden.hide();
    }
  });
});