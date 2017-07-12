$(document).ready(function() {
	$.get('templates/home.html', function(templates) {
		var template = $(templates).filter('#homeTemplate').html();
		var templateData = "";
		var html = Mustache.to_html(template, templateData);
		$('.home').html(html);
	});
});