var SESSION = 0 //0 - online, 1 - offline
var curOb = "h1";

var ifr = '<iframe id="chciLink" width="500" height="315" src="empty" frameborder="0" allowfullscreen> </iframe>'
var vir = '<video id="vidintab" width="500" height="315" controls preload="auto"><source id="chciLink" src="empty" type="video/webm"></video>'
function obvazChange(nazev) {

	var ite = datab[nazev];
	$("#chcih1").text(ite["nazev"]);

	/* popis */
	$("#chciPopis").html(ite["popis"]);

	/* Video part */
	if (SESSION == 0) {
		$("#vidintab").html(ifr)
		$("#vidintab").load()
		$("#chciLink").attr("src", ite["linkY"]);
	}
	else if (SESSION == 1) {
		$("#vidintab").html(vir)
		$("#vidintab").load()
		$("#chciLink").attr("src", "media/videa/" + ite["link"]);
	}
}

function majorChange(nazev) {
	$("#page-content-wrapper").load("html/" + nazev);
}

function majorObvaz(nazev) {
	$("#page-content-wrapper").load('html/obvaz.html');

	curOb = nazev;
}

function rozklikCastiTela(cast) {
	document.getElementById(cast).click();
}


function rozjed() {
	$(".dropdown").hover(function() {
		$('.dropdown-menu', this).stop(true, true).fadeIn("fast");
		$(this).toggleClass('open');
		$('b', this).toggleClass("caret caret-up");
	}, function() {
		$('.dropdown-menu', this).stop(true, true).fadeOut("fast");
		$(this).toggleClass('open');
		$('b', this).toggleClass("caret caret-up");
	});
};

function mousov() {
	$('#area1').mouseover(function() {
		alert($(this).attr('id'));
	}).mouseout(function() {
		alert('Mouseout....');
	});
}
