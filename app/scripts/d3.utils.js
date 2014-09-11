/*D3 formats*/

var dayDate = d3.time.format("%d-%b-%Y");
var monthDate = d3.time.format("%b %Y");
var dollar = d3.format(['$', ',']);
var timeformat = function (date) {
	var din = d3.time.format('%Y-%m-%dT%H:%M:%S');
	var d = din.parse(date);
	return d;
}



/*Toggle*/


function slideboxToggle(parent, child){
    var boxes = parent.selectAll('.slidebox')
            
            boxes.each(function(){
                var bx = d3.select(this)

                if(bx.select('span').classed('arrow-up')){
                bx.select('span')
                .classed('arrow-down', true)
                .classed('arrow-up', false)

                bx
                .transition()
                .duration(500)
                .style('height', '50px')
                }
            })

          var ob =d3.select(child)

          if(ob.select('span').classed('arrow-down')){
              ob.select('span')
              .classed('arrow-down', false)
              .classed('arrow-up', true)

              ob
              .transition()
              .duration(500)
              .style('height', '230px')   
          }
}