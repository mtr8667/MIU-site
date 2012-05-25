// Matthew RIchter 
// MIU - Full Sail University
// Project 3
// May 17, 2012


var parseProjectForm = function(data){
// uses form data here 
	console.log(data);
};

//$(document).ready(function(){
$(document).bind('pageinit',function(){
	
	var 	projectform = $( "#projectform" ),
			formerrorslink = $("#formerrorslink")
	;
			
	projectform.validate({
		invalidHandler: function(form, validator){
			// this bring up the pop up error dialog
			formerrorslink.click();
			var html = ' ';
			for(var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>' + fieldName + '</li>';
			};
			$('#showerrors ul').html(html);
		},
		submitHandler: function(){
			var 	data = projectform.serializeArray();
			parseProjectForm(data);
		}
	});
});