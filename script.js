window.addEventListener("load",function(){

	var nodes = document.querySelectorAll(".dropcap");
	nodes.forEach(function(item){
		item.innerHTML = "<span class='image'>"
			+"<span></span>"
			+"<span></span>"
			+"</span>"
			+"<span>"+item.innerText+"</span>";
	});

});
