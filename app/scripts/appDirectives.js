angular.module('appDirectives', [])
		.directive('summaryBlock', function () {
			 return {
        		restrict: 'EA', 
        		scope: {
            			'data': '='
       					 }, 
        		link: link                };


    		function link(scope, element){
    			var ele = d3.select(element[0]);
    			summaryViz(ele, scope.data);
    			
    		}
		})
        .directive('steamBlock', function () {
             return {
                restrict: 'EA',  
                scope: {
                        'data': '='
                         }, 
                link: link                };


            function link(scope, element){
                var ele = d3.select(element[0]);

                var data = scope.data;

                if(data[1].length==0 && data[2].length==0){
                    summaryNoData(ele)
                }

                else{
                    if(data[1].length <=1 || data[2].length <=1){
                        summaryViz(ele, data);
                    }
                    else{
                        summarySteam(ele, scope.data);
                    }
                }

                
                
            }
        })
		.directive('schaBlock', function () {
			 return {
        		restrict: 'EA', 
        		scope: {
            			'data': '='
       					 }, 
        		link: link
    			};

    		function link(scope, element){
    			var ele = d3.select(element[0]);
                if(scope.data.length == 0){
                    bubblesNoData(ele);
                }
                else{
                   bubbles(ele, scope.data) 
                }
    			
    			
    		}
		})
		.directive('mapBlock', function () {
			 return {
        		restrict: 'EA', 
        		scope: {
            			'data': '='
       					 }, 
        		link: link
    			};

    		function link(scope, element){
    			var ele = d3.select(element[0]);
    			renderMap(ele, scope.data)
    			
    		}
		})
		.directive('paidBlock', function () {
			 return {
        		restrict: 'EA', 
        		scope: {
            			'data': '='
       					 }, 
        		link: link
    			};

    		function link(scope, element){
    			var ele = d3.select(element[0]);
    			if(scope.data.length == 0){
                    paidNoData(ele);
                }
                else{
                   paid(ele, scope.data) 
                }
    			
    		}
		})
        .directive('lobbyBlock', function () {
             return {
                restrict: 'EA', 
                scope: {
                        'data': '='
                         }, 
                link: link
                };

            function link(scope, element){
                var ele = d3.select(element[0]);
                renderLobbyData(ele, scope.data)
                
            }
        })