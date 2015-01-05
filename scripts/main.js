/**
 * Main JavaScript
 * Site Name
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:
 */

function on_site_load() {

	$("div.image4").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 

		$('header div.header_content').css('')
		
	 });
}

$(on_site_load);
