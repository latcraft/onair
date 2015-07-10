$(document).ready(function() {

	

	// countdown
	$('.countdown').each(function(index) {
		var time = moment($(this).attr("data-time")).format("YYYY/MM/DD HH:mm:ss");

		$(this).countdown(time, function(event) {
			$(this).text(event.strftime('%Dd %Hh %Mm %Ss'));
		});
	});
		

	// waypoints
	$(".post").waypoint(function(direction) {
		var nav = $("#nav");

		nav.find("li").removeClass("active");
		nav.find("li").eq($("#" + this.element.id).index()).addClass("active");
	}, {
		offset: "30"
	});


	// navigation
	$("#nav a").click(function(e) {
		var body = $("html, body"),
			index = $(this).parent().index();

		// $("#nav").find("li").removeClass("active");
		// $(this).parent().addClass("active");

		body.stop().animate({
			scrollTop: ($("#video" + index).offset().top - 20) + "px"
		}, "slow");

		return false;
	});

});