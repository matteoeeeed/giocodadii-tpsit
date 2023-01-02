var express = require("express");
var app = express();
var path = require('path');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/giocodadi.html'));
});

app.get("/haiP", function(req, res) {
    res.sendFile(path.join(__dirname + '/haiperso.html'));
});

app.get("/haiV", function(req, res) {
    res.sendFile(path.join(__dirname + '/hivinto.html'));
});

app.post("/dadi", function(req,res){
res.writeHead(200, {"Content-Type": "text/html"});
res.write('<html><body>'+
'<h1 style="font-family: verdana;font-weight: bold;text-transform: capitalize;font-size: 30px;color: rgb(0, 0, 0);text-shadow: rgb(255, 255, 255) 2px 2px 2px;">GIOCO DEL DADO</h1><br><br>'+  
'<button class="myButton2" onclick="myImagec()">Lancia 2 dadi</button>'+
//parte dello stile
'<style>body{ background:green;} .myButton { 	background-color:#44c767; 	border-radius:28px; 	border:1px solid #18ab29; 	display:inline-block; 	cursor:pointer; 	color:#ffffff; 	font-family:Arial; 	font-size:17px; 	padding:16px 31px; 	text-decoration:none; 	text-shadow:0px 1px 0px #2f6627; } .myButton:hover { 	background-color:#5cbf2a; } .myButton:active { 	position:relative; 	top:1px; } .myButton2 { box-shadow:inset 0px 1px 0px 0px #f29c93; background:linear-gradient(to bottom, #fe1a00 5%, #ce0100 100%); background-color:#fe1a00;	 border-radius:11px; border:7px solid #d83526; display:inline-block; cursor:pointer; color:#ffffff; font-family:Arial; font-size:26px; font-weight:bold; padding:18px 24px; text-decoration:none; text-shadow:0px 1px 6px #b23e35; } .myButton2:hover { background:linear-gradient(to bottom, #ce0100 5%, #fe1a00 100%); background-color:#ce0100; } .myButton2:active { position:relative; top:1px; } </style>'+
//part delle immagini del dado
'<img id="myImage" src="https://cdn.pixabay.com/photo/2013/07/12/13/57/dice-147665__340.png" style="width:200px;position: absolute;left: 530px;"> <img id="myImage2" src="https://cdn.pixabay.com/photo/2013/07/12/13/57/dice-147666_960_720.png" style="width:200px;position: absolute;left: 800px;"> <h2 style="font-family: verdana;font-weight: bold;text-transform: capitalize;font-size: 30px;color: rgb(0, 0, 0);text-shadow: rgb(255, 255, 255) 2px 2px 2px;">Punteggio Coppia:<p1 id="contc">0</p1></h2> <h2 style="font-family: verdana;font-weight: bold;text-transform: capitalize;font-size: 30px;color: rgb(38, 0, 255);text-shadow: rgb(255, 255, 255) 2px 2px 2px;">Punteggio pari:<p1 id="contp">0</p1></h2> <h2 style="font-family: verdana;font-weight: bold;text-transform: capitalize;font-size: 30px;color: rgb(255, 0, 0);text-shadow: rgb(255, 255, 255) 2px 2px 2px;">Punteggio dipari:<p1 id="contd">0</p1></h2> <h2 style="font-family: verdana;font-weight: bold;text-transform: capitalize;font-size: 30px;color: rgb(255, 255, 255);text-shadow: rgb(255, 255, 255) 2px 2px 2px;">Numero di facce:<p1 id="sss">0</p1></h2> <h2 style="font-family: verdana;font-weight: bold;text-transform: capitalize;font-size: 30px;color: rgb(224, 203, 12);text-shadow: rgb(255, 255, 255) 2px 2px 2px;">Soldi:<p1 id="s">0</p1>$</h2>    '+
//parte dello script
'<script> contc=0,contp=0,contd=0,soldi=100,sommad=0; function myImagec(){ num=Math.floor(Math.random()*6)+1; num2=Math.floor(Math.random()*6)+1; if(num==1){ document.getElementById("myImage").src="https://cdn.pixabay.com/photo/2013/07/12/13/57/dice-147665__340.png"; } if(num==2){ document.getElementById("myImage").src="https://cdn.pixabay.com/photo/2013/07/12/13/57/dice-147666_960_720.png"; } if(num==3){ document.getElementById("myImage").src="https://cdn.pixabay.com/photo/2013/07/12/13/58/dice-147667_960_720.png"; } if(num==4){ document.getElementById("myImage").src="https://cdn.pixabay.com/photo/2013/07/12/13/58/dice-147668_1280.png"; } if(num==5){ document.getElementById("myImage").src="https://cdn.pixabay.com/photo/2013/07/12/13/58/dice-147669_1280.png"; } if(num==6){ document.getElementById("myImage").src="https://cdn.pixabay.com/photo/2013/07/12/13/58/dice-147670_640.png"; } if(num2==1){ document.getElementById("myImage2").src="https://cdn.pixabay.com/photo/2013/07/12/13/57/dice-147665__340.png"; } if(num2==2){ document.getElementById("myImage2").src="https://cdn.pixabay.com/photo/2013/07/12/13/57/dice-147666_960_720.png"; } if(num2==3){ document.getElementById("myImage2").src="https://cdn.pixabay.com/photo/2013/07/12/13/58/dice-147667_960_720.png"; } if(num2==4){ document.getElementById("myImage2").src="https://cdn.pixabay.com/photo/2013/07/12/13/58/dice-147668_1280.png"; } if(num2==5){ document.getElementById("myImage2").src="https://cdn.pixabay.com/photo/2013/07/12/13/58/dice-147669_1280.png"; } if(num2==6){ document.getElementById("myImage2").src="https://cdn.pixabay.com/photo/2013/07/12/13/58/dice-147670_640.png"; } if(num==num2){ contc++; } sommad=num+num2; if(sommad%2==0){ contp++; sommad*0; soldi=soldi-10;   }else{ sommad*0;     contd++;   } if(soldi<10){ document.onload(Haiperso()); } if(contd>9){ document.onload(Haivinto()); } document.getElementById("sss").innerHTML=sommad; document.getElementById("contc").innerHTML=contc; document.getElementById("contp").innerHTML=contp; document.getElementById("contd").innerHTML=contd; document.getElementById("s").innerHTML=soldi; } function Haiperso(){ location.replace("/haiP"); } function Haivinto(){ location.replace("/haiV"); } </script\>'+
'<a href="/" class="myButton">Torna al menu</a>'+           
'</body></html>');
res.end();
});
//modalità un dado
app.post("/istruzioni", function(req,res){
res.writeHead(200, {"Content-Type": "text/html"});
res.write('<html><body>'+
'<h1 style="font-family: verdana;font-weight: bold;text-transform: capitalize;text-align: center;font-size: 70px;color: rgb(0, 0, 0);position: relative;top: 1px;text-shadow: rgb(235, 211, 0) 2px 2px 2px;">Istruzioni del gioco</h1> <h3 style="font-family: verdana;font-weight: bold;text-align: center;font-size: 50px;color: rgb(0, 253, 0);text-shadow: rgb(2, 63, 22) 2px 2px 2px;">Guida sulla modalita 2 dadi(ROLL 2)</h3> <h3 style="font-family: verdana;font-weight:bold;text-align: center;font-size: 50px;color: rgb(0, 0, 0);">In questa modaliotà si gioca con 2 dadi utente deve fare 10 volte un punteggio dispari senza perdere i 100$ </h3> ;<h3 style="font-family: verdana;font-weight: bold;text-align: center;font-size: 50px;color: rgb(253, 0, 0);text-shadow: rgb(2, 63, 22) 2px 2px 2px;">Guida sulla modalita 1 dado(ROLL 1)</h3> <h3 style="font-family: verdana;font-weight: bold;text-align: center;font-size: 50px;color: rgb(0, 0, 0);">Questa modalità ha solo un dado , per vincere bisogna effettuare 10 lanci dispari , si gioca senza punteggio doppio!</h3>'+
//parte dello stile
'<style>body{ background-color: blue; } .myButton { 	background-color:#44c767; 	border-radius:28px; 	border:1px solid #18ab29; 	display:inline-block; 	cursor:pointer; 	color:#ffffff; 	font-family:Arial; 	font-size:17px; 	padding:16px 31px; 	text-decoration:none; 	text-shadow:0px 1px 0px #2f6627; } .myButton:hover { 	background-color:#5cbf2a; } .myButton:active { 	position:relative; 	top:1px; } .myButton2 { box-shadow:inset 0px 1px 0px 0px #93f298; background:linear-gradient(to bottom, #87fe00 5%, #10ca39 100%); background-color:#00fe61;	 border-radius:11px; border:7px solid #0f6804; display:inline-block; cursor:pointer; color:#ffffff; font-family:Arial; font-size:26px; font-weight:bold; padding:18px 24px; text-decoration:none; text-shadow:0px 1px 6px #b23e35; } </style>'+
//part delle immagini del dado
'   '+
//parte dello script
'<a href="/" class="myButton">Torna al menu</a>'+           
'</body></html>');
res.end();
});



//modalità un dado
app.post("/dadi1", function(req,res){
res.writeHead(200, {"Content-Type": "text/html"});
res.write('<html><body>'+
//parte dello sti
'<style> body{ background-color: rgb(206, 87, 7); } .myButton { 	background-color:#44c767; 	border-radius:28px; 	border:1px solid #18ab29; 	display:inline-block; 	cursor:pointer; 	color:#ffffff; 	font-family:Arial; 	font-size:17px; 	padding:16px 31px; 	text-decoration:none; 	text-shadow:0px 1px 0px #2f6627; } .myButton:hover { 	background-color:#5cbf2a; } .myButton:active { 	position:relative; 	top:1px; } .myButton2 { box-shadow:inset 0px 1px 0px 0px #93f298; background:linear-gradient(to bottom, #87fe00 5%, #10ca39 100%); background-color:#00fe61;	 border-radius:11px; border:7px solid #0f6804; display:inline-block; cursor:pointer; color:#ffffff; font-family:Arial; font-size:26px; font-weight:bold; padding:18px 24px; text-decoration:none; text-shadow:0px 1px 6px #b23e35; } .myButton2:hover { background:linear-gradient(to bottom, #5dce00 5%, #00fe6a 100%); background-color:#bcfa2c; } .myButton2:active { position:relative; top:1px; } </style>'+
''+          
//part delle immagini del dado
'<h1 style="font-family: verdana;font-weight: bold;text-transform: capitalize;font-size: 30px;color: rgb(0, 0, 0);text-shadow: rgb(255, 255, 255) 2px 2px 2px;">GIOCO DEL DADO</h1> <button class="myButton2" onclick="myImagec()">Lancia un dado</button> <img id="myImage" src="https://cdn.pixabay.com/photo/2013/07/12/13/57/dice-147665__340.png" style="width:200px;position: absolute;left: 530px;"> <h2 style="font-family: verdana;font-weight: bold;text-transform: capitalize;font-size: 30px;color: rgb(38, 0, 255);text-shadow: rgb(255, 255, 255) 2px 2px 2px;">Punteggio pari:<p1 id="contp">0</p1></h2> <h2 style="font-family: verdana;font-weight: bold;text-transform: capitalize;font-size: 30px;color: rgb(255, 0, 0);text-shadow: rgb(255, 255, 255) 2px 2px 2px;">Punteggio dipari:<p1 id="contd">0</p1></h2> <h2 style="font-family: verdana;font-weight: bold;text-transform: capitalize;font-size: 30px;color: rgb(255, 255, 255);text-shadow: rgb(255, 255, 255) 2px 2px 2px;">Numero di facce:<p1 id="sss">0</p1></h2> <h2 style="font-family: verdana;font-weight: bold;text-transform: capitalize;font-size: 30px;color: rgb(224, 203, 12);text-shadow: rgb(255, 255, 255) 2px 2px 2px;">Soldi:<p1 id="s">0</p1>$</h2>'+
//parte dello script
'<script>contp=0,contd=0,soldi=100; function myImagec(){ num=Math.floor(Math.random()*6)+1; if(num==1){ document.getElementById("myImage").src="https://cdn.pixabay.com/photo/2013/07/12/13/57/dice-147665__340.png"; } if(num==2){ document.getElementById("myImage").src="https://cdn.pixabay.com/photo/2013/07/12/13/57/dice-147666_960_720.png"; } if(num==3){ document.getElementById("myImage").src="https://cdn.pixabay.com/photo/2013/07/12/13/58/dice-147667_960_720.png"; } if(num==4){ document.getElementById("myImage").src="https://cdn.pixabay.com/photo/2013/07/12/13/58/dice-147668_1280.png"; } if(num==5){ document.getElementById("myImage").src="https://cdn.pixabay.com/photo/2013/07/12/13/58/dice-147669_1280.png"; } if(num==6){ document.getElementById("myImage").src="https://cdn.pixabay.com/photo/2013/07/12/13/58/dice-147670_640.png"; } if(num%2==0){ contp++; soldi=soldi-10; }else{ contd++;     } if(soldi<10){ document.onload(Haiperso()); } if(contd>9){ document.onload(Haivinto()); } document.getElementById("contp").innerHTML=contp; document.getElementById("contd").innerHTML=contd; document.getElementById("s").innerHTML=soldi; document.getElementById("sss").innerHTML=num; } function Haiperso(){ location.replace("/haiP"); } function Haivinto(){ location.replace("/haiV"); }</script>'+
'<a href="/" class="myButton">Torna al menu</a>'+           
'</body></html>');
res.end();
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
