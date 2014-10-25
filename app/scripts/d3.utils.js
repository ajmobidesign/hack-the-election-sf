/*D3 formats*/

var dayDate = d3.time.format("%d-%b-%Y");
var monthDate = d3.time.format("%b %Y");
var dollar = d3.format(['$', ',']);
var timeformat = function (date) {
	var din = d3.time.format('%Y-%m-%dT%H:%M:%S');
	var d = din.parse(date);
	return d;
}


var r =   d3
          //.scale.pow().exponent(.6)
          .scale.log()
          .base(10)
          //.domain([Math.exp(2), Math.exp(6)])
          .domain([100, 100000])
          //.domain([0, 13000])
          .range([5, 50]);
var r2 =   d3
            /*
            .scale.pow().exponent(.6)
            .domain([0, 13000])
            .range([5, 30])
            */
            .scale.log()
            .base(10)
            //.domain([Math.exp(2), Math.exp(6)])
            .domain([100, 1000000])
            //.domain([0, 13000])
            .range([5, 100]);


/*Toggle*/

function renderSlideBox (ele, data) {

  console.log(data)

  data.forEach(function (d, i) {
    console.log(d)
    var container = ele
                  .append('div')
                  .attr('class', 'slidebox q'+i)
                  .on('click', function(){
                      var ob = this;
                      slideboxToggle(ele, ob);
                    });

    var title = container
                .append('div')
                .attr('class', 'slide-title')
                .append('h4')
                .html(function () {
                  var output = monthDate(timeformat(d.dates[0])) + " - " + monthDate(timeformat(d.dates[1])) + "<span class='arrow-down'></span>";
                  console.log(output)
                  return output;
                });

    var content = container
                  .append('div')
                  .attr('class', 'slide-content slide-closed')
                  .append('p');

                  content
                  .append('span') 
                  .html(function () {
                    return 'Raised : '+ dollar(Math.round(d.line_12 + d.line_13 + d.line_14)) + "<br>";
                  })

                  content
                  .append('span')
                  .html(function(){
                    return 'Spent : '+ dollar(Math.round(d.line_15)) + "<br>";
                  })


                  content
                  .append('span')
                  .html(function(){
                    return 'Remaining : '+ dollar(Math.round(d.line_16));
                  })    

    


  })
  
}


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
                .style('height', '30px')
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
              .style('height', '150px')   
          }
}



function detailBox () {

  var deetbox;


        deetbox = d3.select('body')
                    .append('div')
                    .attr('id', 'detailbox');
      

        return deetbox; 
                             
}