// Matthew RIchter 
// MIU - Full Sail University
// Project 3
// May 17, 2012


var parseProjectForm = function(data){
// uses form data here 
	console.log(data);
};

$(document).ready(function(){
	
	var 	projectform = $( "#projectform" ),
			formerrorslink = $("#formerrorslink")
	;
			
	projectform.validate({
		invalidHandler: function(form, validator){
			formerrorslink.click();
		},
		submitHandler: function(){
			var 	data = projectform.serializeArray();
			parseProjectForm(data);
		}
	});
});