;(function() {
	'use strict';

	/**
	* SiouxApp Module
	*
	* Description
	*/
	angular.module('SiouxApp').factory('fakeService',[fakeService]);
	function fakeService(){
		var people = [{
			id: 0,
			name: 'TrinhDang',   
			face: 'img/TrinhDang.png'
		}, {
			id: 1,
			name: 'HoanHoang',  
			face: 'img/HoanHoang.png'
		}, {
			id: 2,
			name: 'NhanPhan',   
			face: 'img/NhanPhan.png'
		}, {
			id: 3,
			name: 'QuanTran',    
			face: 'img/QuanTran.png'
		}, {
			id: 4,
			name: 'HaPham',    
			face: 'img/HaPham.png'
		}];

		return {
			all:function(){
				return people;
			},

			remove:function(id){
				people.splice(people.indexOf(id),1);
			},
			get:function(id){
				for (var i = 0; i < people.length; i++) {
					if (people[i].id === parseInt(id)) {
						return people[i];
					}
				}
				return null;
			}

		}
	}
}());