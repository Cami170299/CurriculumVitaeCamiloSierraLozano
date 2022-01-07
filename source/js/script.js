// Load the Visualization API and the corechart package.
google.charts.load('current', {packages: ['corechart']});
function displayMenu(){
    document.getElementById('flexBoxContainer').style.display = 'flex'
    document.getElementById('displayManuRespNone').style.display = 'flex'
    document.getElementById('flex-box-container').style.justifyContent = 'space-around'

};
function hideMenu() {
    document.getElementById('flexBoxContainer').style.display = 'none'
    document.getElementById('displayManuRespFlex').style.display = 'flex'
    document.getElementById('displayManuRespNone').style.display = 'none'
};
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
function aptitudesDisplayOne () {
    document.getElementById('aptitudeOne').style.display = 'inline'
};
function aptitudesDisplayTwo () {
    document.getElementById('aptitudeTwo').style.display = 'inline'
};
function aptitudesDisplayThree () {
    document.getElementById('aptitudeThree').style.display = 'inline'
};
function aptitudesDisplayFour () {
    document.getElementById('aptitudeFour').style.display = 'inline'
};


function aptitudesHideOne () {
    document.getElementById('aptitudeOne').style.display = 'none'
};
function aptitudesHideTwo () {
    document.getElementById('aptitudeTwo').style.display = 'none'
};
function aptitudesHideThree () {
    document.getElementById('aptitudeThree').style.display = 'none'
};
function aptitudesHideFour () {
    document.getElementById('aptitudeFour').style.display = 'none'
};