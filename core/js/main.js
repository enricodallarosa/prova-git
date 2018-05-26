var materie = {"gin":"Ginnastica","tec":"Tecnica","app":"Approfondimento","let":"Lettere","mat":"Matematica","art":"Arte","mus":"Musica","tec":"Tecnica","ing":"Inglese","fra":"Francese","sci":"Scienze","rel":"Religione"};
var compiti = {
"lungin":"Ginnastica non dà compiti!",
"lunmat":"Il triangolo questo sconosciuto",
"lunfra":"Porquoi?",
"lunlet":"Lettere latine e non",

"marmus":"Il contrabbasso",
"marsci":"L'atomo ed i suoi amici",
"marmat":"Un pò di esercizi",
"martec":"Un pò di tavole",
"maring":"So. what???",

"merapp":"L'orcio",
"merlet":"Tema",
"mering":"Oh my!",

"giolet":"Tanta antologia",
"gioart":"Disegno acquarello",
"giosci":"L'atomo e i suoi usi e costumi",

"venmat":"Un pò di esercizi",
"ventec":"Ricerca su energie alternative",
"venfra":"Mais non!",
"venlet":"Ri lettere",

"sabing":"What?",
"sabmat":"Altri esercizi",
"sabrel":"Religione non dà compiti, spero...",
"sabmus":"Piffero a valanga!",
"sablet":"Drammatica"}

var firstClick = true;

function init() {
$(".giorno").each(function() {
$( this ).bind( "click", function() {
showCompiti(this.id);
})
});
$(".header").each(function() {
$( this ).bind( "click", function() {
hideCompiti();
})
});
}

function showCompiti(id) {
$( "#comp" ).hide();
$( "#orario" ).css("cssFloat" , "left");
if(firstClick) {
$( "#orario" ).animate({
"width" : "50%"
}, 1000, function() {
setContents(id);
});
firstClick = false;
} else {
setContents(id);
}
}

function setContents(id) {
if(id != null) {
$( "#comp" ).show( "slow", function() {});
var key = id.substring(3,6);
$("#comptit").html(materie[key]);
$("#compcont").html(compiti[id]);
} else {
$("#comptit").html("");
$("#compcont").html("");
}
}

function hideCompiti() {
setContents(null);
$( "#orario" ).animate({
"width" : "100%"
}, 1000, function() {
$( "#orario" ).css("cssFloat" , "none");
firstClick = true;
});
}

