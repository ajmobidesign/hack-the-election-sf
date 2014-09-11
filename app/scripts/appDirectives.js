angular.module('appDirectives', [])
		.directive('summaryBlock', function () {
			 return {
        		restrict: 'EA', 
        		scope: {
            			'data': '='
       					 }, 
        		link: link
    			};

    		function link(scope, element){
    			var ele = d3.select(element[0]);
    			summaryViz(ele, scope.data)
    			
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
    			bubbles(ele, scope.data)
    			
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
    			paid(ele, scope.data)
    			
    		}
		})