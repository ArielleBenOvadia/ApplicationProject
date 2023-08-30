function CategoryPage(name) {
  $.ajax({
    url: "http://localhost:3000/product/category/" + name,
    method: "GET",
    success: function (response) {
      window.location.href = "bottles.html?category=" + name;
      console.log(response);
    },
    error: function (xhr) {
      console.log(xhr.responseText);
      // Handle the error
    },
  });
}

$(document).ready(function () {
  $("#searchForm").submit(function (event) {
    event.preventDefault();
    const name1 = $("#searchInput").val();
    if (["bottles","cups","straws"].includes(name1)) {
    $.ajax({
      url: "http://localhost:3000/product/graph/" + name1,
      type: "GET",
      data: JSON.stringify({
        name1
      }),
      success: function (response) {       
        const productName = name1;
        const countProduct = response.countProduct;
        const removeAble = d3.select("#GenderChart");
// Remove all child elements within the SVG
        removeAble.selectAll("*").remove();
        // Set up the dimensions for the SVG container
        const svgWidth = 650;
        const svgHeight = 470;
        const margin = { top: 40, right: 40, bottom: 80, left: 60 };
        const width = svgWidth - margin.left - margin.right;
        const height = svgHeight - margin.top - margin.bottom;
    
        // Create the SVG container for the chart
        const svg = d3.select("#GenderChart")
            .attr("width", svgWidth)
            .attr("height", svgHeight);
    
        // Create a group within the SVG for the charting area
        const chart = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
        // Define a title for the graph
        const graphTitle = "Product count";
    
        // Create a text element for the title and position it at the center
        svg.append("text")
            .attr("class", "graph-title")
            .attr("x", svgWidth / 2)
            .attr("y", margin.top / 2)
            .text(graphTitle);
    
        // Set up scales for x and y axes
        const xScale = d3.scaleBand()
            .domain([productName])
            .range([0, width])
            .paddingInner(0.1)
            .paddingOuter(0.2);
    
        const yScale = d3.scaleLinear()
            .domain([0, countProduct])
            .nice()
            .range([height, 0]);
    
        // Create the column for the chart
        chart.selectAll(".bar")
            .data([productName]) // Pass the product name as an array
            .enter().append("rect")
            .attr("class", "barGender")
            .attr("x", name => xScale(name) + xScale.bandwidth() / 2.2)
            .attr("y", yScale(countProduct))
            .attr("width", xScale.bandwidth()/10)
            .attr("height", name => height - yScale(countProduct));
    
        // Create x and y axes
        const xAxis = d3.axisBottom(xScale);
    
        // Append x axis to the charting area
        const xAxisGroup = chart.append("g")
            .attr("class", "x-axis")
            .attr("transform", "translate(0," + (height) + ")")
            .call(xAxis);
    
        // Add a class to the x-axis labels
        xAxisGroup.selectAll("text")
            .attr("class", "x-axis-label");
    
        // Append y axis to the charting area
        chart.append("g")
            .attr("class", "y-axis")
            .call(d3.axisLeft(yScale));
    },
    error: function (xhr) {
        console.log(xhr.responseText);
        // Handle the error
    },
    });}

 $.ajax({
        url: "http://localhost:3000/product/name/" + name1,
        method: "GET",
        success: function (response) {     
          var myId = response._id;
          window.location.href = "product.html?product=" + myId;
          console.log(response);
        },
        error: function (xhr) {
          console.log(xhr.responseText);
          // Handle the error
        },
      });
  });
});

function initMap() {
  var map = new Microsoft.Maps.Map(document.getElementById("map"), {
    center: new Microsoft.Maps.Location(31.771955, 34.683598), // Set the initial center of the map to Israel 31.774061, 34.683261
    zoom: 14, // Set the initial zoom level
  });

  //Load points from the database
  $.ajax({
    url: "http://localhost:3000/point",
    method: "GET",
    success: function (data) {
      data.forEach(function (point) {
        addMarker(map, point.latitude, point.longitude);
      });
    },
    error: function (error) {
      console.error("An error occurred while loading points:", error);
    },
  });
}

function addMarker(map, lat, lng) {
  var location = new Microsoft.Maps.Location(lat, lng);

  var pushpin = new Microsoft.Maps.Pushpin(location, null);
  map.entities.push(pushpin);
}

const socket = io.connect('http://127.0.0.1:3000');

// Emit 'login' event when the page loads
socket.emit('login', { userId: 'YourUserID' });

socket.on('usercnt', (msg) => {
  document.getElementById('UsersCount').innerHTML = "There are " + msg + " Users online";
});


