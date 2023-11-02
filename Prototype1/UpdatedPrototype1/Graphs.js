const temp = [50,60,70,80,90,100,110,120,130,140,150];
const humid = [7,8,8,9,9,9,10,11,14,14,15];

function graphPlot() {
  xIn = String(document.getElementById("Xaxis").value);
  yIn = String(document.getElementById("Yaxis").value);

  layout = {
    xaxis: {range: [40, 160], title: "Square Meters"},
    yaxis: {range: [5, 16], title: "Price in Millions"},  
    title: "House Prices vs. Size"
  };

  if (xIn == "temp") {
    if (yIn == "humid") {
      data = [{
        x: temp,
        y: humid,
        mode:"markers"
      }];

      layout = {
        xaxis: {range: [40, 160], title: "Temperature"},  
        yaxis: {range: [5, 16], title: "Humidity"},
        title: "Temperature vs. Humidity"
      };
    }
    else if (yIn == "temp") {
      data = [{
        x: temp,
        y: temp,
        mode:"markers"
      }];

      layout = {
        xaxis: {range: [40, 160], title: "Temperature"},
        yaxis: {range: [40, 160], title: "Temperature"},  
        title: "Temperature vs. Temperature"
      };
    }
  }
  else if (xIn == "humid") {
    if (yIn == "humid") {
      data = [{
        x: humid,
        y: humid,
        mode:"markers"
      }];

      layout = {
        xaxis: {range: [5, 16], title: "Humidity"},
        yaxis: {range: [5, 16], title: "Humidity"},  
        title: "Humidity vs. Humidity"
      };
    }
    else if (yIn == "temp") {
      data = [{
        x: humid,
        y: temp,
        mode:"markers"
      }];

      layout = {
        xaxis: {range: [5, 16], title: "Humidity"},
        yaxis: {range: [40, 160], title: "Temperature"},  
        title: "Humidity vs. Temperature"
      };
    }
  }

  Plotly.newPlot("myPlot", data, layout);
}

//Am leaving this code here as would be a much better,
//move scalable solution but I cannot get it to work - LB

// function xAxis() {
//   // var axis = document.getElementById("Xaxis");
//   // var axisVal = axis.option[axis.selectedIndex].value;
//   var axisVal = document.getElementById("Xaxis").value;
//   if (axisVal == "X") 
//     return temp;
//   else if (axisVal == "temp")
//     return temp;
//   else 
//     return humid;
// }

// function yAxis() {
//   // var axis = document.getElementById("Yaxis");
//   // var axisVal = axis.option[axis.selectedIndex].value;
//   var axisVal = document.getElementById("Yaxis").value;
//   if (axisVal == "Y") 
//     return temp;
//   else if (axisVal == "temp")
//     return temp;
//   else 
//     return humid;
// }

// function Plotgraph() {

//   // Define Data
//   var data = [{
//     x:temp,
//     y:humid,
//     mode:"markers"
//   }];

//   // Define Layout
//   const layout = {
//     xaxis: {range: [40, 160], title: "Square Meters"},
//     yaxis: {range: [5, 16], title: "Price in Millions"},  
//     title: "House Prices vs. Size"
//   };

//   Plotly.newPlot("myPlot", data, layout);
// }
