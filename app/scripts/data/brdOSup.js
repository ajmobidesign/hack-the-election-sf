var brdOSup=[
	{
		"dist":2,
		"cands":[
					{
						"namf": "Mark", 
						"naml": "Farrell", 
						"filer_id":"1357023",
						"filer_naml":"Re-Elect Supervisor Mark Farrell 2014",
						"isIncm":true,
						"past":[
								{"filer_naml": "Committee to Elect John Farrell Assessor",
								 "filer_id": "1240076"},
								{"filer_naml": "Mark Farrell for District 2 Supervisor 2010",
								 "filer_id": "1320480"},
								{"filer_naml": "Common Sense Voters, SF 2010; Vote for Mark Farrell for District 2 Supervisor",
								 "filer_id": "1332919"}
								 ]

					},
					{
						"namf": "Juan-Antonio", 
						"naml": "Carballo", 
						"filer_id":"1367424",
						"filer_naml":"Carballo for District 2 Supervisor 2014",
						"isIncm":false

					}, 
				]

	}, 
	{
		"dist":4,
		"cands":[
					{
						"namf": "Katy", 
						"naml": "Tang", 
						"filer_id":"1361966",
						"filer_naml":"KATY TANG FOR SUPERVISOR 2014",
						"isIncm":true, 
						"past": [
								
								{"filer_naml": "KATY TANG FOR SUPERVISOR 2013",
								 "filer_id": "1356256"}
								 ]
					}
				]

	},
	{
		"dist":6,
		"cands":[
					{
						"namf": "Jane", 
						"naml": "Kim", 
						"filer_id":"1361734",
						"filer_naml":"Jane Kim for Supervisor, 2014",
						"isIncm":true, 
						"past": [
								{"filer_naml": "Jane Kim for School Board",
								 "filer_id": "1266745"},
								{"filer_naml": "Jane Kim for School Board - 1289332",
								 "filer_id": "1289332"},
								{"filer_naml": "Jane Kim for Supervisor, 2010",
								 "filer_id": "1324277"}
								
								 ]

					},
					{
						"namf": "Nulty", 
						"naml": "Michael", 
						"filer_id":"1367203",
						"filer_naml":"Michael Nulty for Supervisor 2014",
						"isIncm":false

					}, 
					{
						"namf": "David Carlos", 
						"naml": "Salaverry", 
						"filer_id":"",
						"filer_naml":"David Carlos Salaverry for Supervisor, 2014",
						"isIncm":false

					},
					{
						"namf": "Jamie", 
						"naml": "Whitaker", 
						"filer_id":"1366050",
						"filer_naml":"Jamie Whitaker for Supervisor, 2014",
						"isIncm":false

					}
				]

	},
	{
		"dist":8,
		"cands":[
					{
						"namf": "Tom Wayne", 
						"naml": "Basso", 
						"filer_id":"",
						"filer_naml":"",
						"isIncm":false

					},
					{
						"namf": "George", 
						"naml": "David", 
						"filer_id":"",
						"filer_naml":"",
						"isIncm":false

					}, 
					{
						"namf": "John", 
						"naml": "Nulty",
						"filer_id":"1367201",
						"filer_naml":"John Nulty for Supervisor 2014",
						"isIncm":false

					},
					{
						"namf": "Michael", 
						"naml": "Petrelis", 
						"filer_id":"1367765",
						"filer_naml":"Petrelis 4 Supervisor 2014",
						"isIncm":false

					},
					{
						"namf": "Scott", 
						"naml": "Wiener", 
						"filer_id":"1360789",
						"filer_naml":"Re-Elect Supervisor Scott Wiener 2014",
						"isIncm":true, 
						"past": [
								{"filer_naml": "Scott Wiener for Supervisor 2010",
								 "filer_id": "1319353"},
								{"filer_naml": "ALLIANCE FOR JOBS AND SUSTAINABLE GROWTH, A COALITION OF LABOR UNIONS AND BUSINESS ASSOCIATIONS SUPPORTING SCOTT WIENER FOR SUPERVISOR 2010",
								 "filer_id": "1330488"},
								{"filer_naml": "Yes on E, San Franciscans for Ballot Measure Reform, Supported by Supervisor Scott Wiener",
								 "filer_id": "1340708"},
								{"filer_naml": "Scott Wiener for DCCC 2012",
								 "filer_id": "1259078"}
								 ]

					}
				]

	},
	{
		"dist":10,
		"cands":[
					{
						"namf": "Maila", 
						"naml": "Cohen", 
						"filer_id":"1359986",
						"filer_naml":"Re-Elect Malia Cohen for Supervisor 2014",
						"isIncm":true, 
						"past": [
								{"filer_naml": "Malia Cohen For Supervisor 2010",
								 "filer_id": "1321410"},
								{"filer_naml": "Malia Cohen for Democratic County Central Committee 2012",
								 "filer_id": "1345779"}
								 ]

					},
					{
						"namf": "Ed", 
						"naml": "Donaldson", 
						"filer_id":"1366873",
						"filer_naml":"Ed Donaldson For District 10 Supervisor 2014",
						"isIncm":false

					}, 
					{
						"namf": "Tony", 
						"naml": "Kelly", 
						"filer_id":"1363530",
						"filer_naml":"Tony Kelly for District 10 Supervisor 2014",
						"isIncm":false

					},
					{
						"namf": "Shawn M.", 
						"naml": "Richard", 
						"filer_id":"1365635",
						"filer_naml":"Committee to elect Shawn M Richard supervisor 2014",
						"isIncm":false

					},
					{
						"namf": "Marlene", 
						"naml": "Tran", 
						"filer_id":"1366480",
						"filer_naml":"Marlene Tran, Supervisor, 2014",
						"isIncm":false

					}
				]

	}

];


var brdIdx=[];
var nameIdx =[];
var incum = [];

for (d in brdOSup){

	var cans = brdOSup[d].cands;
	//console.log(d, cans)
	brdIdx = brdIdx.concat(cans);
	for (can in cans){
		var candidate = cans[can]
		nameIdx.push(candidate.naml);
		if(candidate.isIncm){
			incum.push(candidate);
		}
	}
};

