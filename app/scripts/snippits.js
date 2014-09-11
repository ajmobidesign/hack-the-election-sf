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