
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


  readXLSX("#oldfilename")

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
  var tr = $(trigger);
  var sub = $(subset);
  var tot = $(total);
  var otpt = $(output);


  tr.on("click",function(){
    otpt.text(Math.round((sub.val()/tot.attr("max"))*100)+"% "+tot.attr("name"));
    console.log(otpt.text());
  });
};
//**************************************************************
function readXLSX(oldFile){
  //The file is only accessible in the console, bear with me...

  //github.com/SheetJS/sheetjs tutorials and examples
  //opening a spreadsheet as an object
  var file_opener = $(oldFile);
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
};
//**************************************************************
function writeXLSX1(enterButton,newFile){
  
  var enter = $(enterButton);
  var name = $(newFile);
   //create a new blank workbook 
    enter.change(function(){
       var wb = XLSX.utils.book_new();

    });
   

  //a single typed array can be converted to a pure JS array
  //with Array.from()
  var column = Array.from(dataset_typedarray);

  //aoa_to_sheet expects a row-major array of arrays. To export
  //multiple data sets, "transpose" the data:

  // assuming data is an array of typed arrays
  var aoa = [];
  for(var i = 0; i < data.length; ++i) {
    for(var j = 0; j < data[i].length; ++j) {
      if(!aoa[j]) aoa[j] = [];
      aoa[j][i] = data[i][j];
    }
  }
  // aoa can be directly converted to a worksheet object 
  var ws = XLSX.utils.aoa_to_sheet(aoa);
};

function writeXLSX2(enterButton,newFile){
  //single line
  
  var wb = {
      SheetNames: ["mySheet"],
      Sheets: {
          mySheet: {
              "!ref":"A1:Y1",
              A1: { t:"s", v:"Installation" },
              B1: { t:"s", v:"Site Number" },
              C1: { t:"s", v:"Assay Date" }
        /*      D1: { t:"s", v:"Genus" }
              E1: { t:"s", v:"Insecticide" }
              F1: { t:"s", v:"Dose (ug)" }
              G1: { t:"s", v:"Bottle No." }
              H1: { t:"s", v:"T0 Alive" }
              I1: { t:"s", v:"T0 Dead" }            
              J1: { t:"s", v:"T15 Alive" }
              K1: { t:"s", v:"T15 Dead" }
              L1: { t:"s", v:"T30 Alive" }
              M1: { t:"s", v:"T30 Dead" }
              N1: { t:"s", v:"T45 Alive" }
              O1: { t:"s", v:"T45 Dead" }
              P1: { t:"s", v:"T60 Alive" }
              Q1: { t:"s", v:"T60 Dead" }
              R1: { t:"s", v:"T75 Alive" }
              S1: { t:"s", v:"T75 Dead" }
              T1: { t:"s", v:"T90 Alive" }
              U1: { t:"s", v:"T90 Dead" }
              V1: { t:"s", v:"T105 Alive" }
              W1: { t:"s", v:"T105 Dead" }
              X1: { t:"s", v:"T120 Alive" }
              Y1: { t:"s", v:"T120 Dead" }*/

          }
      }
  }
  XLSX.writeFile(wb, "sheetjs.xlsx");

  //multiple lines
  var myObject = [];

  for (let col=1; col< 3; col++) {
      for(let row=1; row< 10; row++ ) {
          myObject['A' + row] = {t: "s", v: 'hi A' + row};
          myObject['B' + row] = {t: "s", v: 'hi B' + row};
          myObject['C' + row] = {t: "s", v: 'hi C' + row};
      }
  } 

  var wb = {
      SheetNames: ["mySheet"],
      Sheets: {
          mySheet: myObject
      }
  }
  XLSX.writeFile(wb, "sheetjs.xlsx");
};

//**************************************************************

//input_dom_element.addEventListener('change', handleFile, false);
});


