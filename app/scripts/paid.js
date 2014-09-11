

function paid(element, data){
	//console.log(data)

	var paid = element.select('#ppl-paid');

	var width2 = $('#ppl-paid').width() -40;
	var height2 = $('#ppl-paid').height() -20;
	var svg2 = paid.append('svg')
			.attr('width', width2)
			.attr('height', height2);


	var boxpos = (height2/3)*2

	var dragbox = svg2
			.append('rect')
			.attr('class', 'dragbox')
			.attr('width', width2 -20)
			.attr('height', height2/3)
			.attr('y', boxpos)
			.attr('x', 20)


			svg2
			.append('text')
			.attr('y', (boxpos)-30 )
			.attr('x', 30)
			.style('fill', '#888')
			.text("Drag and Drop into box below to see details.")

			svg2
			.append('text')
			.attr('y', (boxpos)-10 )
			.attr('x', 30)
			.style('fill', '#888')
			.text("Double click to release.")



	var total = d3.sum(data, function(d){return parseFloat(d.amount)})
	var pplIdx = [];
	var obsW = [];

	data.forEach(function(d, i){

			if(d.hasOwnProperty('payee_namf')){
				var name = d.payee_namf + " " + d.payee_naml;
				if(pplIdx.indexOf(name)==-1){
					pplIdx.push(name)
				}
			}
			else{
				if(pplIdx.indexOf(d.payee_naml) == -1){
				pplIdx.push(d.payee_naml)
				}
			}	
	})


	pplIdx.forEach(function(d){
			var obj = {
			prop : '', 
			amt :0, 
		}
		obj.deets = [];

		data.forEach(function(p){
			var name;
			if(p.hasOwnProperty('payee_namf')){
				name = p.payee_namf + " " + p.payee_naml;
			}
			
			if(d == p.payee_naml || d== name){
				obj.prop = d
				obj.amt += parseFloat(p.amount)
				obj.deets.push(p)
			}

		})

		obsW.push(obj)

	})


	var r2 =   d3
	          .scale.pow().exponent(.6)
	          .domain([0, 5000])
	          .range([0, 30]);


	var force2 = d3.layout.force()
	                     .nodes(obsW)
	                     .friction(0.9)
	                     .charge(function(d){return -d.amt*.04})
	                    .size([width2, height2]);

	var drag = force2.drag()
	    .on("dragend", dragend);


	var paidCir = svg2
					.selectAll(".paidCir")
	                 .data(obsW)  
	                 .enter()
	                 .append('g')
	                 .attr('class', 'paidCir')
	                 .attr('height', function(d){ return r2(d.amt)*2})
	                 .attr('width', function(d){ return r2(d.amt)*2})
	                 .style('cursor', 'move')
	                 .on("dblclick", dblclick)
	                 .call(force2.drag);

	                 paidCir
	                 .append('circle')
	                 
	                 .attr('r', function (d){

	                    return r2(d.amt);
	                 })
	                 
	                 .style('stroke', '#888')
	                 .style('stroke', .9)
	                 .style('opacity', 0.8);

	                 paidCir
	                 .append('text')
	                 .attr("dy", ".3em")
	                 .style('fill', '#333')
	                 .style('display', 'none')
	      			.style("text-anchor", "middle")
	                 .text(function (d) {
	                 	//console.log(d.payee_naml)
	                 	return d.prop;
	                 })
	                
	                 
	var side = {x: width2/2, y: 0}


	force2.on('tick', function(e){

		var al = .03 *e.alpha;
	        

	         d3.selectAll('.paidCir')
	        .each(function(o, i){
	            o.y += (side.y - o.y) *al;
	            o.x += (side.x - o.x) *al;


	            d3.select(this)
	            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
	            
	          });
	    })    
	     .start();





	function dragend(d) {
		
		var ob = d3.select(this)


		if(d.y>boxpos){
			ob.style('cursor', 'pointer')

			ob.select('text').style('display', 'block')
			ob.classed("fixed", d.fixed = true);

			var id = 'fl_'+(d.prop).split(' ')[0];

			var html = d.prop;

			var displayCont = d3.select('#ppl-paid-ctr')

			displayCont
			.append('h4')
			.attr('class', id)
			.html(html)

			displayCont
			.append('p')
			.attr('class', id)
			.html("Total Paid : " + dollar(d.amt))

			var table = displayCont.append('table').attr('class', id)
			var trow = table.append('tr')
			trow.append('th').html('Date')
			trow.append('th').html('For')
			trow.append('th').html('Amount')


			

			d.deets.forEach(function(f){

				var dt = dayDate(timeformat(f.expn_date))
				var row =	table.append('tr')

					row
					.append('td')
					.html(dt)

					row.append('td')
					.style('font-size', '10px')
					.html(function(){
						var ht = e_leg[f.expn_code];
						console.log(f.expn_code, ht);
						if(ht==undefined){
							return 'None Listed';
						}
						else{
							return ht;
						}
					})

					

					row.append('td')
					.html(dollar(parseFloat(f.amount)))

			})

		}
		
	  
	}

		function dblclick(d) {
				  var ob =d3.select(this)
				  var id = 'fl_'+(d.prop).split(' ')[0];
				  ob.classed("fixed", d.fixed = false);

				  ob.style('cursor', 'move')
				  ob.select('text').style('display', 'none')
				  d3.selectAll('.'+ id).remove()
				  force2.start();
		}



}