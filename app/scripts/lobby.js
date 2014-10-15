
function renderLobbyData (ele, dt) {


//Legend
var legend = ele.select('#lobby-legend');
var ldClrs = [{'text': '0', 'color' :'#fff'}, {'text': '3 or less', 'color' :'#117cb2'}, {'text': '4 or more', 'color' :'#ff5765'}, {'text': '25', 'color' :'#b03c46'}];

for(cl in ldClrs){

			  var c = ldClrs[cl].color;
			  var t = ldClrs[cl].text;

var lg =	legend
			.append('small');

			lg
			.html(t);

			lg
			.append('span')
			.style('background', c)

}






var money =dt[0];
var contact =dt[1];

var official = (money[0].official).split(',');

var offName = official[1].replace(' ', '') + " "+ official[0];

ele.select('h3').html('Lobby and Contribution Data for '+ offName);

var data = [];
var timeIdx = [];
var closed= true;
var timeformat  =   d3.time.format("%Y-%m-%dT%H:%M:%S").parse; 

var dateformat = d3.time.format("%d-%b-%Y")

var tDomain = [];

var timeIdx =[];
var timeIdx2 =[];

var heatmap = [];


var main = ele.select('#lobby-viz');

var color = d3.scale.linear()
              .domain([0, 3, 4, 25])
              .range(['#fff', '#117cb2', '#ff5765', '#b03c46']);




//Sort Data
  money.forEach(function (d, i){

    var dataOb = {};

    dataOb.date = d.date;
    dataOb.money = parseInt(d.amount);
    dataOb.lobby = d.lobbyist_firm;
    dataOb.contact = null;

    //console.log(d.amount)

    data.push(dataOb);
    timeIdx.push(d.date);

    if(i== money.length-1){



      contact.forEach(function(c){

        //console.log(c.date);
        var idx = timeIdx.indexOf(c.date);
        
        //console.log(idx)

        if(idx !=-1 && c.lobbyist_firm == data[idx].lobbyist_firm){

          data[idx].contact = c.municipaldecision;
          data[idx]._for = c.desiredoutcome;
          data[idx].client = c.lobbyist_client;
          }
          else{

            var dataOb = {};

            dataOb.date = c.date;
            dataOb.money = null;
            dataOb.lobby = c.lobbyist_firm;
            dataOb.contact = c.municipaldecision;
            dataOb._for = c.desiredoutcome;
            dataOb.client = c.lobbyist_client;

            data.push(dataOb);

          }



          })

    }

  });   




function content(d){
  var money ='';
  var contact ='';

    if(d.money !=null){
      money = "<br> $"+d.money
    }

    if(d.contact !=null){
      contact = '<br><strong> On Behalf Of :</strong>' + d.client +'<br> <strong>Issue : </strong>' +d.contact+ '<br><strong> Desired Outcome : </strong>'+ d._for ;
    }


      return  d.lobby +money + contact;


}


data.forEach(function(d){



  var heatOb = {
  'date': '',
  'contact': 0,
  'contact_event':[],
  'money':0,
  'money_event':[]
};

  tDomain.push(timeformat(d.date))
  var check = timeIdx2.indexOf(d.date);



  if(check ==-1){
  	//console.log('if',  d)
    timeIdx2.push(d.date);

    heatOb.date=d.date;
    if(d.contact != null){

      heatOb.contact = 1;

      heatOb.contact_event.push(d)

    }
    if(d.money !=null){
      heatOb.money = 1;

      heatOb.money_event.push(d)

    }

    console.log(heatOb)
    heatmap.push(heatOb);


  }
  else{

    console.log(check, heatmap);

    //console.log('else',  d)

      if(d.contact != null){

      heatmap[check].contact++;

      heatmap[check].contact_event.push(d);

    }
    if(d.money !=null){
    	console.log(d)

      heatmap[check].money++;

      heatmap[check].money_event.push(d);

    }

    
    //console.log(heatmap)


  }


});

console.log(heatmap)
heatmap.sort(function(a, b) {
    a = new Date(a.date);
    b = new Date(b.date);
    return a>b ? -1 : a<b ? 1 : 0;

});

console.log(heatmap)

var tables= main
          .selectAll('.tables')
          .data(heatmap)
          .enter()
          .append('table')
          .attr('class', 'tables')

          tables
          .on('click', function(){
            var ob =   d3.select(this).select('tr.details');
            var open = ob.classed('openrow')
            if(!open){
               ob.classed('openrow', true)
               ob.transition().duration(800).style('height', '500px')

            ob.selectAll('.detail').classed('lobby-open', true)
          
         

            }
            else{

              ob
               ob.classed('openrow', false)
              ob.transition().duration(800).style('height', '0px')

            ob.selectAll('.detail').classed('lobby-open', false)
            


            }
         
          
        })

var rows = tables          
          .append('tr')
          .attr('class', 'rows')

         rows
         .append('td') 

         .html(function(d){ return  dateformat(timeformat( d.date))})      

         rows
         .append('td')
          .style('background', function(d){return color(d.contact)})
         .html(function(d){return 'Lobbying Contacts: '+d.contact})    

         rows
         .append('td')
          .style('background', function(d){return color(d.money)})
        .html(function(d){return 'Contributions: '+d.money}) 



var detailRows = tables
                  //.selectAll('.details')
                  .append('tr')
                  .attr('class', 'details')
                  //.attr('closed', true)


        detailRows
        .append('td')

        detailRows
        .append('td')
        .style('background', function(d){return color(d.contact)})
        .selectAll('.lobby-event')

        .data(function(d){return d.contact_event})
        .enter()
        .append('span')
        .attr('class', 'detail')
        .html(content)

        detailRows
        .append('td')
         .style('background', function(d){return color(d.money)})

        .selectAll('.money-event')
        .data(function(d){return d.money_event})
        .enter()
        .append('span')
        .attr('class', 'detail')
        .html(content)

























				
	
}