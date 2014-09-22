//Summary Process

function summaryProcess (data) {
	
	var period1={'dates': ['2013-01-01T00:00:00', '2013-06-30T00:00:00'],
	'line_12': 0,
	'line_13': 0,
	'line_14': 0,
	'line_15': 0, 
	'line_16': 0

	}

	var period2={'dates': ['2013-07-01T00:00:00', '2013-12-31T00:00:00'],
	'line_12': 0,
	'line_13': 0,
	'line_14': 0,
	'line_15': 0,
	'line_16': 0

	}

	var period3={'dates': ['2014-01-01T00:00:00', '2014-06-30T00:00:00'],
	'line_12': 0,
	'line_13': 0,
	'line_14': 0,
	'line_15': 0,
	'line_16': 0

	}


	data.forEach(function (d, i) {
		if(d.thru_date == period1.dates[1]){
			if(d.line_item == '12'){
				period1.line_12= parseFloat(d.amount_a);
			}
			if(d.line_item == '13'){
				period1.line_13= parseFloat(d.amount_a);
			}
			if(d.line_item == '14'){
				period1.line_14= parseFloat(d.amount_a);
			}

			if(d.line_item == '15'){
				period1.line_15= parseFloat(d.amount_a);
			}

			if(d.line_item == '16'){
				period1.line_16= parseFloat(d.amount_a);
			}




		}
		if(d.thru_date == period2.dates[1]){
			if(d.line_item == '12'){
				period2.line_12= parseFloat(d.amount_a);
			}
			if(d.line_item == '13'){
				period2.line_13= parseFloat(d.amount_a);
			}
			if(d.line_item == '14'){
				period2.line_14= parseFloat(d.amount_a);
			}

			if(d.line_item == '15'){
				period2.line_15= parseFloat(d.amount_a);
			}

			if(d.line_item == '16'){
				period2.line_16= parseFloat(d.amount_a);
			}




		}
		if(d.thru_date == period3.dates[1]){
			if(d.line_item == '12'){
				period3.line_12= parseFloat(d.amount_a);
			}
			if(d.line_item == '13'){
				period3.line_13= parseFloat(d.amount_a);
			}
			if(d.line_item == '14'){
				period3.line_14= parseFloat(d.amount_a);
			}

			if(d.line_item == '15'){
				period3.line_15= parseFloat(d.amount_a);
			}

			if(d.line_item == '16'){
				period3.line_16= parseFloat(d.amount_a);
			}




		}

		


		
	})

	var outObj = [period1, period2, period3];
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



	return dataOb;
}