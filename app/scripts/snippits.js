//Summary Process

function summaryProcess (data) {

	var startDates = [];
	var thruDates =[];
	data.forEach(function (d) {
		if(d.from_date !=undefined && d.from_date != null && startDates.indexOf(d.from_date)==-1){
			startDates.push(d.from_date)
		}
		if(d.thru_date !=undefined && d.thru_date != null && thruDates.indexOf(d.thru_date)==-1){
			thruDates.push(d.thru_date)
		}
	})


	startDates.sort(function(a, b){
					var dateA= timeformat(a), dateB= timeformat(b)
						return dateA-dateB //sort by date ascending
						});
	thruDates.sort(function(a, b){
					var dateA= timeformat(a), dateB= timeformat(b)
						return dateA-dateB //sort by date ascending
						});

	var outObj = [];

	

	for(i=0; i<startDates.length; i++){
		var prOb= {
			"dates": [],
			"line_12": 0,
			"line_13": 0,
			"line_14": 0,
			"line_15": 0, 
			"line_16": 0
			};

		prOb.dates.push(startDates[i]);	
		prOb.dates.push(thruDates[i]);

		outObj.push(prOb);
		//console.log(outObj)
	}

	

	data.forEach(function (d, i){

		var idx = thruDates.indexOf(d.thru_date);
		var currOb = outObj[idx];
		if(d.line_item == '12'){
				currOb.line_12= parseFloat(d.amount_a);
			}
			if(d.line_item == '13'){
				currOb.line_13= parseFloat(d.amount_a);
			}
			if(d.line_item == '14'){
				currOb.line_14= parseFloat(d.amount_a);
			}

			if(d.line_item == '15'){
				currOb.line_15= parseFloat(d.amount_a);
			}

			if(d.line_item == '16'){
				currOb.line_16= parseFloat(d.amount_a);
			}

	})


	
	return outObj;


}


function capFirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}



function computeSteam (spent, raised) {

	
	var dataOb = {
		maxVal:0,
		minVal:0,
		raisedFinal: [],
		spentFinal: [],
		allTrans:[]
	};


	console.log(dataOb)

	var spentClean;

	spent.forEach(function (d, i) {
		var date = d.expn_date;
		if(date == undefined){
			console.log(date, d)
			spentClean = spent.splice(i, 1);
			
		}
	})




	spent.sort(function(a, b){
					var dateA= timeformat(a.expn_date), dateB= timeformat(b.expn_date)
						return dateA-dateB //sort by date ascending
						})

	
	var spentTrans = [];
	var amt =0;


	spent.forEach(function (d) {
			var ob = {};
			var ob2 = {};
			//console.log(d.amount, d.expn_date)
			amt+=(parseFloat(d.amount)*-1 );
			ob.amt = amt;
			ob.date = timeformat(d.expn_date);
			dataOb.spentFinal.push(ob);

			ob2.amt = (parseFloat(d.amount)*-1 );
			ob2.date = timeformat(d.expn_date);

			spentTrans.push(ob2)
					
		});	

	

		raised.forEach(function(d){
			if(d.tran_date== undefined){
						//console.log(d)
						d.tran_date = d.rpt_date;
				}

				var amt = parseFloat(d.tran_amt1);

				if(isNaN(amt)){
						d.tran_amt1 = "0"
				}
				

		});


		raised.sort(function(a, b){
					var dateA= timeformat(a.tran_date);
					var dateB= timeformat(b.tran_date);
						return dateA-dateB //sort by date ascending
						})


		
		var raisedTrans = [];
		var raisedamt =0;
		raised.forEach(function (d) {
			var ob = {};
			var ob2 ={};
			//console.log(d.amount, d.expn_date)
			raisedamt+=(parseFloat(d.tran_amt1) );
			ob.amt = raisedamt;
			ob.date = timeformat(d.tran_date);
			dataOb.raisedFinal.push(ob);

			ob2.amt = (parseFloat(d.tran_amt1));
			ob2.date = timeformat(d.tran_date);
			raisedTrans.push(ob2)
					
		});	



		dataOb.allTrans = spentTrans.concat(raisedTrans);

			dataOb.allTrans.sort(function(a, b){
					var dateA= a.date;
					var dateB= b.date;
						return dateA-dateB //sort by date ascending
				});

			var prev=0;
			dataOb.allTrans.forEach(function (d, i) {
				
				prev+=d.amt;
				d.amt = prev;
				
			});

			dataOb.maxVal = d3.max(dataOb.raisedFinal, function (d) {
				return d.amt
			});
			dataOb.minVal = d3.min(dataOb.spentFinal, function (d) {
				return d.amt
			})

			//console.log(dataOb)

	return dataOb;
}