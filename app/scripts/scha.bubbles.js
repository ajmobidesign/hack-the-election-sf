

function  bubbles(element, data) {
	//console.log(data)
					var entities = ['IND', 'OTH', 'COM', 'SCC', 'PTY'];
				var clrScale = d3.scale.ordinal()
				                .domain(entities)
				                .range(['#12b3d6', '#0e6aa4', '#FF0B9B', '#fc5d2c', '#0CD102']);
				var candidateData = data;

				var padding = 1.5; // separation between nodes
				var scha = element.select('#sch_A');
				var width = $('#sch_A').width() -40;
				var height = $('#sch_A').height() -20;
				var center = {x: width/2, y:height/2};

				var svg = scha.append('svg')
				      .attr('width', width)
				      .attr('height', height);

				var r =   d3
				          .scale.pow().exponent(.6)
				          .domain([0, 5000])
				          .range([0, 30]);

				var maxRadius = 30;

				var force = d3.layout.force()
				                     .nodes(candidateData)
				                     .friction(0.9)
				                     //.gravity(.2)
				                     //.charge(0)
				                     .charge(-5)
				                     //.chargeDistance(10000)
				                    .size([width, height]);



				var schaCtr = d3.select('#sch_A-ctr');
				var schaCtrQ1 = d3.select('#sch_A-ctr .q1');
				var schaCtrQ2 = d3.select('#sch_A-ctr .q2');
				var schaCtrQ3 = d3.select('#sch_A-ctr .q3');

				schaCtrQ3.style('height', '230px')

				schaCtrQ1
				      .on('click', function(){

				        var ob = this;
				        slideboxToggle(schaCtr, ob);
				        bySize();
				      })

				schaCtrQ2
				      .on('click', function(){    
				        var ob = this;
				        slideboxToggle(schaCtr, ob);    
				        byType(); 

				      })

				schaCtrQ3
				      .on('click', function(){
				        var ob = this;
				        slideboxToggle(schaCtr, ob);
				            
				      })  


				var mapCtr = d3.select('#map-ctr');
				var mapCtrQ1 = d3.select('#map-ctr .q1');
				var mapCtrQ2 = d3.select('#map-ctr .q2');
				var mapCtrQ3 = d3.select('#map-ctr .q3');
				var mapCtrQ4 = d3.select('#map-ctr .q4');

				mapCtrQ4.style('height', '230px')

				mapCtrQ1
				      .on('click', function(){

				        var ob = this;
				        slideboxToggle(mapCtr, ob);
				                 

				      })

				mapCtrQ2
				      .on('click', function(){    
				        var ob = this;
				        slideboxToggle(mapCtr, ob);    
				      

				      })

				mapCtrQ3
				      .on('click', function(){
				        var ob = this;
				        slideboxToggle(mapCtr, ob);
				            
				      }) 


				mapCtrQ4
				      .on('click', function(){
				        var ob = this;
				        slideboxToggle(mapCtr, ob);
				            
				      }) 


				 var node = svg
				                 .selectAll(".datanode")
				                 .data(candidateData)  
				                 .enter()
				                 .append('circle')
				                 .attr('class', 'datanode')
				                 .attr('r', function (d){

				                    return r(d.tran_amt1);
				                 })
				                 
				                 .style('stroke', '#888')
				                 .style('stroke', .9)
				                 .style('opacity', 0.8)
				                .style('fill', function(d){

				                      var des = d.entity_cd;
				                      var clr;
				                      return clrScale(des);

				                 })
				                 .call(force.drag);


				       force.on('tick', function(e){

				         d3.selectAll('.datanode')
				        .attr("cx", function(d) { return d.x; })
				        .attr("cy", function(d) { return d.y; });               

				                    }).start();  


				function updateCircle(e, loc, filter){
				  
				      var al = .03 *e.alpha;
				        d3.selectAll('.datanode')
				        .filter(filter)
				        .each(function(o, i){

				            o.y += (loc.y - o.y) *al;
				            o.x += (loc.x - o.x) *al;

				            d3.select(this)
				               .attr('cx', o.x)
				              .attr('cy', o.y)
				         
				          });         

				      }



function byType(){
        var filter1 = function(d){if (d.entity_cd=="COM"){ return true}};
        var loc1 = {x: 200, y:100}
        var filter2 = function(d){if (d.entity_cd=="OTH"){ return true}};
        var loc2 = {x:450, y:250}
        var filter3 = function(d){if (d.entity_cd=="IND"){ return true}};
        var loc3 = {x:350, y:450}
       

       force.on('tick', function(e){
        updateCircle(e, loc1, filter1);
        updateCircle(e, loc2, filter2);
        updateCircle(e, loc3, filter3);

       }).start();


}



function bySize(){
      var filter1 = function(d){if (parseInt(d.tran_amt1)<=200){ return true}};
      var loc1 = {x: 250, y:100}
      var filter2 = function(d){if (parseInt(d.tran_amt1)>200 && parseInt(d.tran_amt1)<500){ return true}};
      var loc2 = {x:250, y:350}
      var filter3 = function(d){if (parseInt(d.tran_amt1)==500){ return true}};
      var loc3 = {x:250, y:550}
     // var filter1 = function(d){if (d.entity_cd=="IND"){ return true}};

     force.on('tick', function(e){
      updateCircle(e, loc1, filter1);
      updateCircle(e, loc2, filter2);
      updateCircle(e, loc3, filter3);

     }).start();


}
}