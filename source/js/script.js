// Load the Visualization API and the corechart package.
google.charts.load('current', {packages: ['corechart']});
function displayMenu(){
    document.getElementById('displaymenudropdown').style.display = 'inline'
};
function hideMenu() {
    document.getElementById('displaymenudropdown').style.display = 'none'
};
function showlang() {
    document.getElementById('langmenuid').style.display = 'block'
}
function hidelang() {
    document.getElementById('langmenuid').style.display = 'none'
}
function  displayMenulangdrop() {
    document.getElementById('dropdownlangid').style.display = 'block'
}
function  hideMenulangdrop() {
    document.getElementById('dropdownlangid').style.display = 'none'
}

//animations 
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChartSpanish);
google.charts.setOnLoadCallback(drawChartFr);
google.charts.setOnLoadCallback(drawChartProgramming);
google.charts.setOnLoadCallback(drawChartEnglish);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChartEnglish() {
    var dataEnglish = google.visualization.arrayToDataTable([
        ["Language", "Knowlage", { role: "style" } ],
        ["", 85, "#303030"]
    ]);

    var options = {
        'legend':'left',
        'backgroundColor': 'none',
        'width':200,
        'height':300,
        'vAxis': {maxValue: 100,minValue: 0},
        'animation': {"startup": true},
        'animation':{
            duration: 1000,
            easing: 'out',
          }
      };
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div-en'));
    chart.draw(dataEnglish,options);
}

function drawChartSpanish() {

    var dataSpanish = google.visualization.arrayToDataTable([
        ["Language", "Knowlage", { role: "style" } ],
        ["", 99.99, "#303030"]
      ]);


// Set chart options
var options = {
    'legend':'left',
    'backgroundColor': 'none',
    'width':200,
    'height':300,
    'vAxis': {maxValue: 100,minValue: 0},
    'animation': {"startup": true},
    'animation':{
        duration: 1000,
        easing: 'out',
      }
  };

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
chart.draw(dataSpanish,options);

}

function drawChartFr() {

    var dataFr = google.visualization.arrayToDataTable([
        ["Language", "Knowlage", { role: "style" } ],
        ["", 50, "#303030"]
      ]);


// Set chart options
var options = {
    'legend':'left',
    'backgroundColor': 'none',
    'width':200,
    'height':300,
    'vAxis': {maxValue: 100,minValue: 0},
    'animation': {"startup": true},
    'animation':{
        duration: 1000,
        easing: 'out',
      }
  };

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.ColumnChart(document.getElementById('chart_div-fr'));
chart.draw(dataFr,options);
}

function drawChartProgramming() {

    var data = google.visualization.arrayToDataTable([
        ["Language", "Knowlage"],
        ["HTML", 30],
        ["CSS", 30],
        ["JS", 20],
        ["SQL", 5],
        ["PY", 10],
        ["React", 5]
      ]);

    var options = {
      'legend': 'none',
      'pieSliceText': 'label',
      'legend':'none',
      'backgroundColor': 'none',
      'border':'none',
      'pieSliceBorderColor':'none',
      slices: {
        0: { color: '#202020' },
        1: { color: '#303030' },
        2: { color: '#1e1e1e' },
        3: { color: '#2f2f2f' },
        4: { color: '#8a8a8a' },
        5: { color: '#5a5a5a' },
      },
    };

      var chart = new google.visualization.PieChart(document.getElementById('chart_div-Pr'));
      chart.draw(data, options);
}
document.getElementById('aptitudeOne').style.display = 'none'
document.getElementById('aptitudeTwo').style.display = 'none'
document.getElementById('aptitudeThree').style.display = 'none'
document.getElementById('aptitudeFour').style.display = 'none'

function aptitudesDisplayOne () {

    var divStatus = document.getElementById('aptitudeOne').style.display
    var diplayDiv = 'block'
    var hideDiv = 'none'
    if (divStatus == diplayDiv){
        document.getElementById('aptitudeOne').style.display = hideDiv
    }
    else  {
        document.getElementById('aptitudeOne').style.display = diplayDiv
        document.getElementById('aptitudeTwo').style.display = hideDiv
        document.getElementById('aptitudeThree').style.display = hideDiv
        document.getElementById('aptitudeFour').style.display = hideDiv
    }
};
function aptitudesDisplayTwo () {

    var divStatus = document.getElementById('aptitudeTwo').style.display
    var diplayDiv = 'block'
    var hideDiv = 'none'
    if (divStatus == diplayDiv){
        document.getElementById('aptitudeTwo').style.display = hideDiv
    }
    else  {
        document.getElementById('aptitudeTwo').style.display = diplayDiv
        document.getElementById('aptitudeThree').style.display = hideDiv
        document.getElementById('aptitudeFour').style.display = hideDiv
        document.getElementById('aptitudeOne').style.display = hideDiv
    }
};
function aptitudesDisplayThree () {
    var divStatus = document.getElementById('aptitudeThree').style.display
    var diplayDiv = 'block'
    var hideDiv = 'none'
    if (divStatus == diplayDiv){
        document.getElementById('aptitudeThree').style.display = hideDiv
    }
    else  {
        document.getElementById('aptitudeThree').style.display = diplayDiv
        document.getElementById('aptitudeTwo').style.display = hideDiv
        document.getElementById('aptitudeOne').style.display = hideDiv
        document.getElementById('aptitudeFour').style.display = hideDiv
    }
};
function aptitudesDisplayFour () {

    var divStatus = document.getElementById('aptitudeFour').style.display
    var diplayDiv = 'block'
    var hideDiv = 'none'
    if (divStatus == diplayDiv){
        document.getElementById('aptitudeFour').style.display = hideDiv
    }
    else  {
        document.getElementById('aptitudeFour').style.display = diplayDiv
        document.getElementById('aptitudeTwo').style.display = hideDiv
        document.getElementById('aptitudeThree').style.display = hideDiv
        document.getElementById('aptitudeOne').style.display = hideDiv
    }
};