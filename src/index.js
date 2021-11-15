var statescities = require('./citiestowns.json');
module.exports={
	allStates:function(){
		var states=[];
		statescities.forEach(function(state){
			if(states.indexOf(state.state)==-1){
				states.push(state.state);
			}			
		})
		return states.sort();
	},
	allCities:function(){
		return statescities.map(function(city){
			return city.city;
		}).sort();
	},
	citiesForState:function(state){
		return statescities.filter(function(city){
			return city.state===state;
		}).map(function(city){
			return city.city;
		}).sort();
	},
	stateForCity:function(cityName){
		return statescities.filter(function(city){
			return city.city===cityName;
		}).map(function(city){
			return city.state;
		});
	}	
};