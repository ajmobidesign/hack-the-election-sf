

function renderMap (element, data) {

	var entities = ['IND', 'OTH', 'COM', 'SCC', 'PTY'];
	var clrScale = d3.scale.ordinal()
				                .domain(entities)
				                .range(['#12b3d6', '#0e6aa4', '#FF0B9B', '#fc5d2c', '#0CD102']);
	var candidateData = data;

	  /*Map*/

  // Attach L.LatLng objects to the data records; omit records with no location.
  var records = [];
  for (var i = 0; i < candidateData.length; i++) {
    if (candidateData[i].tran_location) {
      records.push(candidateData[i]);
    }
  }
  records.forEach(function(d) {
    d.ll = new L.LatLng(d.tran_location.latitude, d.tran_location.longitude);
  });


  // Set up the Leaflet map.
  map = L.map(map).setView([37.8, -122], 8);
  
  map._initPathRoot();  // initialize the layer with the <svg> element


// Add a fake GeoJSON line to coerce Leaflet into creating the <svg> tag that d3_geoJson needs
new L.geoJson({"type": "LineString","coordinates":[[0,0],[0,0]]}).addTo(map);

function mapstyle() {
    return {
        color: '#ccc',
	    fillColor: '#fff',
	    weight:1,
	    fillOpacity:1
    };
}

L.geoJson(statesData, {style:mapstyle}).addTo(map);

var topPane = map._createPane('leaflet-top-pane', map.getPanes().mapPane);
  var topLayer = new L.tileLayer('http://{s}.tile.stamen.com/toner-labels/{z}/{x}/{y}.png', {
    maxZoom: 17
  }).addTo(map);
  topPane.appendChild(topLayer.getContainer());
  topLayer.setZIndex(7);

function setMarkers(){
		  var mapsvg = element.select('#map').select('svg'), 
		  				nodeg = mapsvg.append('g');
		  var mapnode = nodeg.selectAll('.mapcircle')
		    .data(records)
		    .enter().append('circle')
		    .attr('class', 'mapcircle')
		    .style('stroke', '#777')
		    .style('opacity', .8)
		    .style('fill', function(d){

		                      var des = d.entity_cd;
		                      var clr;
		                      return clrScale(des);
		    })
		    .attr('r', function(d) {
		      var size = Math.sqrt(d.tran_amt1 / 25);  // $1 -> 0.2, $2500 -> 10
		      return size < 1 ? 1 : size > 10 ? 10 : size;
		    });

		  map.on('viewreset', update);  // recompute screen positions after a zoom
		  update();

		  function update() {
		    mapnode.attr('transform', function(d) {
		      var p = map.latLngToLayerPoint(d.ll);
		      return 'translate(' + p.x + ',' + p.y + ')';
		    });
		  }
}


setTimeout(setMarkers, 1000);
	
}