const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

	ctx.canvas.width=window.innerWidth;
    ctx.canvas.height=window.innerHeight;
    ctx.fillStyle ='#9e9b70';
    ctx.fillRect(1,400,4000,900);

    //Lua
    ctx.fillStyle='#A9A9A9';
    ctx.beginPath();
    ctx.arc(1100,90,60,0,Math.PI*2)
    ctx.fill();
	
	//Crateras
	ctx.fillStyle='#808080';
    ctx.beginPath();
    ctx.arc(1140,70,8,0,Math.PI*2)
    ctx.fill();
	
    ctx.arc(1120,120,12,0,Math.PI*2)
    ctx.fill();
	
	ctx.beginPath();
    ctx.arc(1070,110,20,0,Math.PI*2)
    ctx.fill();
	
    ctx.arc(1115,80,5,0,Math.PI*2)
    ctx.fill();
	
	ctx.beginPath();
    ctx.arc(1075,60,13,0,Math.PI*2)
    ctx.fill();
	
    ctx.arc(1115,45,10,0,Math.PI*2)
    ctx.fill();
	//Fim lua
    ctx.strokeStyle='#363636';//Comeco primeira Linha
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(10,450);
    ctx.lineTo(80,450);
    ctx.stroke();

    ctx.lineWidth='5';
    ctx.moveTo(120,450);
    ctx.lineTo(220,450);
    ctx.stroke();
    ctx.lineWidth='5';
   
    ctx.moveTo(275,450);
    ctx.lineTo(375,450);
    ctx.stroke();
    ctx.lineWidth='5';
   
    ctx.moveTo(450,450);
    ctx.lineTo(550,450);
    ctx.stroke();
    ctx.lineWidth='5';
   
    ctx.moveTo(550,450);
    ctx.lineTo(575,450);
    ctx.stroke();
    ctx.lineWidth='5';
   
    ctx.moveTo(600,450);
    ctx.lineTo(700,450);
    ctx.stroke();
    ctx.lineWidth='5';
   
    ctx.moveTo(750,450);
    ctx.lineTo(850,450);
    ctx.stroke();
    ctx.lineWidth='5';
   
    ctx.moveTo(900,450);
    ctx.lineTo(1000,450);
    ctx.stroke();
    ctx.lineWidth='5';
   
    ctx.moveTo(1050,450);
    ctx.lineTo(1150,450);
    ctx.stroke();
    ctx.lineWidth='5';
   
    ctx.moveTo(1250,450);
    ctx.lineTo(1350,450);
    ctx.stroke();
//começo da segunda linha
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(10,500);
    ctx.lineTo(100,500);
    ctx.stroke();
	
    ctx.moveTo(150,500);
    ctx.lineTo(250,500);
    ctx.stroke();
    ctx.lineWidth='5';
   
    ctx.moveTo(300,500);
    ctx.lineTo(400,500);
    ctx.stroke();
    ctx.lineWidth='5';
   
    ctx.moveTo(450,500);
    ctx.lineTo(550,500);
    ctx.stroke();
    ctx.lineWidth='5';
   
    ctx.moveTo(600,500);
    ctx.lineTo(700,500);
    ctx.stroke();
    ctx.lineWidth='5';
   
    ctx.moveTo(750,500);
    ctx.lineTo(800,500);
    ctx.stroke();
    ctx.lineWidth='5';
   
    ctx.moveTo(850,500);
    ctx.lineTo(950,500);
    ctx.stroke();
    ctx.lineWidth='5';
   
    ctx.moveTo(1000,500);
    ctx.lineTo(1150,500);
    ctx.stroke();
    ctx.lineWidth='5';
   
    ctx.moveTo(1200,500);
    ctx.lineTo(1300,500);
    ctx.stroke();

    ctx.lineWidth='5';
    ctx.moveTo(1250,500);
    ctx.lineTo(1350,500);
    ctx.stroke();
//começo da terceira linha
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(10,550);
    ctx.lineTo(100,550);
    ctx.stroke();
    ctx.lineWidth='5';

    ctx.moveTo(150,550);
    ctx.lineTo(250,550);
    ctx.stroke();

    ctx.lineWidth='5';
    ctx.moveTo(300,550);
    ctx.lineTo(400,550);
    ctx.stroke();

    ctx.lineWidth='5';
    ctx.moveTo(450,550);
    ctx.lineTo(550,550);
    ctx.stroke();

    ctx.lineWidth='5';
    ctx.moveTo(600,550);
    ctx.lineTo(700,550);
    ctx.stroke();

    ctx.lineWidth='5';
    ctx.moveTo(750,550);
    ctx.lineTo(800,550);
    ctx.stroke();

    ctx.lineWidth='5';
    ctx.moveTo(850,550);
    ctx.lineTo(950,550);
    ctx.stroke();
	
    ctx.lineWidth='5';
    ctx.moveTo(1000,550);
    ctx.lineTo(1150,550);
    ctx.stroke();

    ctx.lineWidth='5';
    ctx.moveTo(1200,550);
    ctx.lineTo(1300,550);
    ctx.stroke();

    ctx.lineWidth='5';
    ctx.moveTo(1250,550);
    ctx.lineTo(1350,550);
    ctx.stroke();
	ctx.closePath();
	//fim da terceira linha
    var imagem = new Image();
		imagem.onload=function(){
			ctx.drawImage(this, 1000, 250, 200, 200);}
			imagem.src = 'img/cacto.png';//cacto

	var imagem = new Image();
	imagem.onload=function(){
		ctx.drawImage(this, 400, 250, 200, 200);}
		imagem.src = 'img/cacto.png';//cacto
//Montando o dinossauro
	ctx.fillStyle ='#434445';
	ctx.fillRect(750,260,80,50);//cabeça

	ctx.fillStyle ='black';
	ctx.fillRect(760,270,10,10);//olho

	ctx.strokeStyle='#434445';//boca
    ctx.lineWidth='8';
    ctx.moveTo(820,320);
    ctx.lineTo(760,320);
    ctx.stroke();

    ctx.strokeStyle='#434445';//braço
    ctx.lineWidth='8';
    ctx.moveTo(820,340);
    ctx.lineTo(760,340);
    ctx.stroke();

    ctx.strokeStyle='#434445';//mão
    ctx.lineWidth='8';
    ctx.moveTo(820,336);
    ctx.lineTo(820,350);
    ctx.stroke();

	ctx.fillStyle ='#434445';
	ctx.fillRect(750,310,50,70);// corpo

	ctx.fillStyle ='#434445';
	ctx.fillRect(730,310,50,70);

	ctx.fillStyle ='#434445';
	ctx.fillRect(740,330,10,70);

	ctx.fillStyle ='#434445';
	ctx.fillRect(760,330,10,70);

	ctx.fillStyle ='#434445';
	ctx.fillRect(710,335,50,40);//rabo

	ctx.fillStyle ='#434445';
	ctx.fillRect(680,345,50,30);

//Estrelas em pares de codigos
	ctx.strokeStyle="white";
    ctx.lineWidth='2';
    ctx.beginPath();
    ctx.moveTo(820,40);
    ctx.lineTo(820,70);
    ctx.stroke();
	
    ctx.moveTo(830,55);
    ctx.lineTo(810,55);
    ctx.stroke();
	
    ctx.lineWidth='2';
    ctx.beginPath();
    ctx.moveTo(720,60);
    ctx.lineTo(720,90);
    ctx.stroke();
	
    ctx.moveTo(730,75);
    ctx.lineTo(710,75);
    ctx.stroke();
	
    ctx.lineWidth='2';
    ctx.beginPath();
    ctx.moveTo(970,60);
    ctx.lineTo(970,90);
    ctx.stroke();
	
    ctx.moveTo(980,75);
    ctx.lineTo(960,75);
    ctx.stroke();
	
	ctx.lineWidth='2';
    ctx.beginPath();
    ctx.moveTo(1200,20);
    ctx.lineTo(1200,50);
    ctx.stroke();
	
    ctx.moveTo(1190,35);
    ctx.lineTo(1210,35);
    ctx.stroke();
	
    ctx.beginPath();
    ctx.moveTo(1300,90);
    ctx.lineTo(1300,120);
    ctx.stroke();
	
    ctx.moveTo(1290,105);
    ctx.lineTo(1310,105);
    ctx.stroke();
	
	ctx.beginPath();
    ctx.moveTo(600,90);
    ctx.lineTo(600,120);
    ctx.stroke();
	
    ctx.moveTo(590,105);
    ctx.lineTo(610,105);
    ctx.stroke();
	
	ctx.beginPath();
    ctx.moveTo(600,90);
    ctx.lineTo(600,120);
    ctx.stroke();
	
    ctx.moveTo(590,105);
    ctx.lineTo(610,105);
    ctx.stroke();
	
	ctx.beginPath();
    ctx.moveTo(500,30);
    ctx.lineTo(500,60);
    ctx.stroke();
	
    ctx.moveTo(510,45);
    ctx.lineTo(490,45);
    ctx.stroke();
	
	ctx.beginPath();
    ctx.moveTo(350,30);
    ctx.lineTo(350,60);
    ctx.stroke();
	
    ctx.moveTo(340,45);
    ctx.lineTo(360,45);
    ctx.stroke();
	
	ctx.beginPath();
    ctx.moveTo(430,90);
    ctx.lineTo(430,120);
    ctx.stroke();
	
    ctx.moveTo(440,105);
    ctx.lineTo(420,105);
    ctx.stroke();
	
	ctx.beginPath();
    ctx.moveTo(150,5);
    ctx.lineTo(150,35);
    ctx.stroke();
	
    ctx.moveTo(140,20);
    ctx.lineTo(160,20);
    ctx.stroke();
	
	ctx.beginPath();
    ctx.moveTo(250,90);
    ctx.lineTo(250,120);
    ctx.stroke();
	
    ctx.moveTo(240,105);
    ctx.lineTo(260,105);
    ctx.stroke();
	
	ctx.beginPath();
    ctx.moveTo(50,90);
    ctx.lineTo(50,120);
    ctx.stroke();
	
    ctx.moveTo(40,105);
    ctx.lineTo(60,105);
    ctx.stroke();
	
	ctx.beginPath();
    ctx.moveTo(150,235);
    ctx.lineTo(150,265);
    ctx.stroke();
	
    ctx.moveTo(140,250);
    ctx.lineTo(160,250);
    ctx.stroke();