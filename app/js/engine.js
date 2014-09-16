$(function() {
    new Dragend($("#main").get(0), {
    afterInitialize: function() {
        $("#main").css("visibility", "visible");
       }
    });
});

$(document).ready(function () {
	$('#rssPanelOne').rssfeed('http://www.towerswatson.com/en/Feeds/Articles?i={5DE3CCF3-8CF3-46E1-9A14-1F19C19A9AD3}&&feed=RSS', {
		limit: 3,
		offset: 0
	});
	$('#rssPanelTwo').rssfeed('http://www.towerswatson.com/en/Feeds/Articles?i={AACA6F91-8BF0-403F-999E-7500A9968404}&&feed=RSS', {
		limit: 3,
		offset: 0
	});
	$('#rssPanelThree_One').rssfeed('http://www.towerswatson.com/en/Feeds/Articles?i={5DE3CCF3-8CF3-46E1-9A14-1F19C19A9AD3}&&feed=RSS', {
		limit: 1,
		offset: 0
	});
	$('#rssPanelThree_Two').rssfeed('http://www.towerswatson.com/en/Feeds/Articles?i={AACA6F91-8BF0-403F-999E-7500A9968404}&&feed=RSS', {
		limit: 1,
		offset: 0
	});
});