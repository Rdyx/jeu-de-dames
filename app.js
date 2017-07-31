var html = "";

function loopTR(arg, arg2, rowNumber, colNumber){
	for(j = rowNumber; j < arg; ++j){
		html += "<div class='row' id='ligne-"+ j +"'>";
		loopTD(arg2, colNumber);
		html += "</div>";
	}
}

function loopTD(arg2, colNumber){
	if(j % 2 == 0){
		for(k = colNumber; k < arg2; ++k){
			html += "<div class='col-xs-1 bg-inverse' id='col-" + k +"'><p>Ligne "+ j + "<br>Col "+ k +"</p></div>\
			<div class='col-xs-1 bg-white' id='col-" + ++k +"'><p>Ligne "+ j + "<br>Col "+ k +"</div>";
		}
	} else {
		for(k = colNumber; k < arg2; ++k){
			html += "<div class='col-xs-1 bg-white' id='col-" + k +"'><p>Ligne "+ j + "<br>Col "+ k +"</p></div>\
			<div class='col-xs-1 bg-inverse' id='col-" + ++k +"'><p>Ligne "+ j + "<br>Col "+ k +"</div>";
		}
		html += "<div class='col-xs-offset-2'></div>";
	}};
	loopTR(11,10,1,1);
	html += "</div>";


	$("#kontaineur").append(html);