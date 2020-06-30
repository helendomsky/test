
  //var alive_dead = $("#mortslider");
  //var Live = $("#numalive");
  //var Dead = $("#numdead");

$(function() {

  showOnChange("#checker","#hiddenbit");
  showOnChange("#checker2","#hiddenbit2");
  showOnKeydown("#bottlepop","#mort_stats","#mortslider")
  handleRatios("#mortslider","#numalive","#numdead")
  handleRatiosfromText("#mortslider","#numalive","#numdead")
  showOnChange("#see_stats","#stat_info")
  calcPct("#see_stats","#numdead","#mortslider","#stat_info")
  //openXLSX()

  //setVars();
  //setSlider();

//**************************************************************
//****************INDIVIDUAL FUNCTIONS BEGIN HERE***************
//**************************************************************

// Migrating native to JQuery for readability
// if too slow, then native is better?

//**************************************************************
function showOnChange(checkbox,hidden){  
  //toggle hide/show on change in state of a checkbox
  
  var ck = $(checkbox);
  var hd = $(hidden);  

  hd.hide();

  ck.change(function() {
    if (ck.is(':checked')) {
      hd.show();

    } else {
      hd.hide();
    }
  });
};
//**************************************************************
function showOnKeydown(inText,hidden,slider){
  //shows item on keydown and assigns the bottle population to
  //the max slider value
  var txt = $(inText)
  var hd = $(hidden)
  var mort = $(slider)

  hd.hide();

    txt.on("keydown change",function() {
      hd.show();
      //document.getElementById("mortality").max = txt.val();
      mort.attr("max",txt.val());
  });
};
//**************************************************************
function handleRatios(slider,live,dead){
  //sets slider positon from click and drag, function uses mouse
  //move so that the numbers update constantly.
  //sets intial values for live and dead text-boxes
  var mort = $(slider);
  var numalive = $(live);
  var numdead = $(dead);

  mort.on("mousemove",function(){
    numalive.val(mort.val());
    numdead.val(mort.attr("max")-numalive.val());
  });
};
//**************************************************************
function handleRatiosfromText(slider,live,dead){
  //now you can edit the numbers in the dead and live textboxes,
  //which will change the slider position and value of the other
  //text box(es)
  var mort = $(slider);
  var numalive = $(live);
  var numdead = $(dead);

  numalive.change(function(){
    mort.val(numalive.val());
    numdead.val(mort.attr("max")-numalive.val());
  });
  numdead.change(function(){
    mort.val(mort.attr("max")-numdead.val());
    numalive.val(mort.attr("max")-numdead.val());
  });
};
//**************************************************************
function calcPct(trigger,subset,total,output){
  //showing the mortality % calculated from dead and alive insects
  //can add other statistics/math if needed 
  var tr = $(trigger)
  var sub = $(subset)
  var tot = $(total)
  var otpt = $(output)


  tr.on("click",function(){
    otpt.text(Math.round((sub.val()/tot.attr("max"))*100)+"% "+tot.attr("name"))
    console.log(otpt.text())
  });
};
//**************************************************************
//function openXLSX()
 


//**************************************************************
//github.com/SheetJS/sheetjs tutorials and examples
//opening a spreadsheet as an object
//spreadsheet is visible in console, but I haven't gotten to
//viewing or editing it yet

var file_opener = $("#filename");
var workbook = undefined;

file_opener.change(function handleFile(e) {
  var files = e.target.files, f = files[0];
  var reader = new FileReader();
  var workbook;
  reader.onload = function(e) {
    var data = new Uint8Array(e.target.result);
    workbook = XLSX.read(data, {type: 'array'});
    console.log("onload");
    console.log(workbook);
    /* DO SOMETHING WITH workbook HERE */
   // dostuff(workbook);*****
  //things can only run inside of the reader.onload to wait until the excel
  //file is fully loaded up, so hide some stuff in here...
  };
  console.log("change");
  console.log(workbook);
  setTimeout(function(){
    workbook
  },2000);
  reader.readAsArrayBuffer(f);
});
//input_dom_element.addEventListener('change', handleFile, false);

});



