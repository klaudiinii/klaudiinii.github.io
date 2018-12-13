$("body").append("<button>Pobierz dane</button>")

$("button").click( function(){

    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) { 

    $("button").after("<div id='dane-programisty'>"+data.imie+" "+data.nazwisko+ " " +data.zawod+ " " + data.firma+"</div>")
 
})

});

 
 