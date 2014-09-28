
function summaryNoData (element) {

	var summary = element.select('#steam');

	summary.append('h3').html("No Data Available")
	// body...
}



function summarySteam(element, data){


	var sumBalance = data[0];
	var raised = data[1];
	var spent = data[2];
	var fullSum = data[3];


	var dataOb = computeSteam(spent, raised);
	var timeStart;
	var timeEnd;


	fullSum.sort(function(a, b){
					var dateA= timeformat(a.from_date), dateB= timeformat(b.from_date)
						return dateA-dateB //sort by date ascending
						});

	timeStart = fullSum[0].from_date;

	

	timeEnd = fullSum[fullSum.length-1].thru_date;

	var times = d3.extent(fullSum, function (d) {
							//console.log(timeformat(d.from_date), timeformat (d.thru_date))
						return timeformat(d.from_date) && timeformat (d.thru_date);
					});


	var timeScaleStart = timeformat(timeStart);
	var timeSCaleEnd = timeformat(timeEnd);

	var timeDomain = [ timeScaleStart, timeSCaleEnd];

	console.log(timeDomain)
	var tvals = [ timeformat('2013-07-01T00:00:00'), timeformat('2014-01-01T00:00:00'), timeformat('2014-06-31T00:00:00')];

	//Need to make dynamic

	var multiple = -(dataOb.minVal*.4);
	var multiple2 = dataOb.maxVal*.15;

	console.log(dataOb.minVal, multiple)

	var moneyDomain = [dataOb.maxVal+(multiple2), dataOb.minVal - multiple]
	//[350000, -90000];
	//35000

	var summary = element.select('#steam');

	var width = $('#steam').width() -40;
	var height = $('#steam').height() -40;

	var svg = summary.append('svg')
						.attr('width', width)
						.attr('height', height)
						.append('g')
						.attr('transform', 'translate(0, 30)');

	var x = d3.time.scale().range([20, width]).domain(timeDomain);
	var y = d3.scale.linear().range([20, height]).domain(moneyDomain);

	var xAxis = d3.svg.axis().scale(x)
							//.tickValues(tvals)
							.tickFormat(monthDate)
							.orient('bottom');

	var yAxis = d3.svg.axis().scale(y)
							//.ticks(7)
							.tickFormat(dollar)
							.tickSize(width)
							.orient('right');

	var xLine = svg
				.append('g')
				.attr('class', 'x axis')
				.call(xAxis)
				.attr('transform', 'translate(0 ,'+ y(0) +')');
				

	var yLine = svg
				.append('g')
				.attr('class', 'y axis')
				.call(yAxis)
				.attr('transform', 'translate(25, 0)');

				yLine.selectAll("text")
		    	.attr("x", 4)
		    	.attr("dy", -4);


	var area = d3.svg.area()
				.interpolate("cardinal")
			    .x(function(d) { return x(d.date); })
			    .y0(y(0))
			    .y1(function(d) { return y(d.amt); });
	
		svg
			.append('g')
			.append('path')
			.datum(dataOb.spentFinal)
			.attr('class', 'down')
			.style('fill', '#ca0020')
			.attr('d', area)


		svg
			.append('g')
			.append('path')
			.datum(dataOb.raisedFinal)
			.attr('class', 'up')
			.style('fill', '#0571b0')
			.attr('d', area)

		svg
			.append('g')
			.append('path')
			.datum(dataOb.allTrans)
			.attr('class', 'balance')
			.style('fill', '#92c5de')
			.attr('d', area)

				

	//Side content containers			

	var sumCtr = d3.select('#steam-ctr .slide-container');

	renderSlideBox(sumCtr, sumBalance)




}





function summaryViz (element, dt) {



	data = dt[0];

	console.log(data)

	var timeDomain = [ timeformat('2013-01-01T00:00:00'), timeformat('2014-06-30T00:00:00')];
	var tvals = [ timeformat('2013-01-01T00:00:00'), timeformat('2013-07-01T00:00:00'), timeformat('2014-01-01T00:00:00'), timeformat('2014-06-31T00:00:00')];

	var moneyMax = d3.max(data, function (d) {
						console.log(d.line_14)
						return d.line_13;
					})
	var moneyMin = d3.min(data, function (d) {
						return d.line_15*-1;
					})

	var moneyDomain = [moneyMax+500, moneyMin-500];

	console.log(moneyDomain)

	var summary = element.select('#steam');

	var width = $('#steam').width() -40;
	var height = $('#steam').height() -40;

	var svg = summary.append('svg')
						.attr('width', width)
						.attr('height', height)
						.append('g')
						.attr('transform', 'translate(0, 30)');




	var x = d3.time.scale().range([20, width]).domain(timeDomain);
			var y = d3.scale.linear().range([20, height]).domain(moneyDomain);

			var xAxis = d3.svg.axis().scale(x).tickValues(tvals).tickFormat(monthDate).orient('bottom');
			var yAxis = d3.svg.axis().scale(y)
										.ticks(7)
										.tickFormat(dollar)
										.tickSize(width)
										.orient('right');

			var xLine = svg
						.append('g')
						.attr('class', 'x axis')
						.call(xAxis)
						.attr('transform', 'translate(0 ,'+ y(0) +')');
						

			var yLine = svg
						.append('g')
						.attr('class', 'y axis')
						.call(yAxis)
						.attr('transform', 'translate(25, 0)');

						yLine.selectAll("text")
				    	.attr("x", 4)
				    	.attr("dy", -4);


			var area = d3.svg.area()
					    .x(function(d) { return x(d.date); })
					    .y0(y(0))
					    .y1(function(d) { return y(d.amt); });



			var balance = svg
							.selectAll('.balance')
							.data(data)
							.enter()
							.append('g')
							.attr('class', 'balance');

			balance.each(function(d, i) {
		var x2 = d3.scale.ordinal().domain(['up', 'down']);
		var ob = this;
		var startdate = timeformat(d.dates[0])
		var enddate = timeformat(d.dates[1])
		var g_W = (x(enddate) - x(startdate))/2

		x2.rangeRoundBands([x(startdate), x(enddate)])
		
		var up  = d3.select(ob)
					.append('rect')
					.attr('class', 'up')
					.attr('width', g_W)
					.attr('x', x2('up'))
					.attr('y', function (d) {
						return y(d.line_12 + d.line_13 +d.line_14);
					})
					//.attr('height', 0)
					//.transition()
					//.duration(300)
					.attr('height', function (d) {
						return y(0) -y(d.line_12 + d.line_13 +d.line_14);
					})
					
					

		var down = d3.select(ob)
					.append('rect')
					.attr('class', 'down')
					.attr('width', g_W)
					.attr('x', x2('down'))
					.attr('y', function (d) {
						return y(0);
					})
					//.attr('height', 0)
					//.transition()
					//.duration(300)
					.attr('height', function (d) {
						return y(0) -y(d.line_15);
					})
				
		});

	


		d3.selectAll('.balance')
					.each(function(){
						var ob = d3.select(this);
						var arD = ob.datum();
						var nD = [{date:timeformat(arD.dates[0]), amt: arD.line_12 },
			      				{date:timeformat(arD.dates[1]), amt: arD.line_16 }];

						ob
						.append("path")
						.datum(nD)
			      		.attr("class", "area")
			      		.attr("d", area);
					});				



	var sumCtr = d3.select('#steam-ctr .slide-container');

	renderSlideBox(sumCtr, data)
					






	
	}