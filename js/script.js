const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

	ctx.canvas.width=window.innerWidth;
    ctx.canvas.height=window.innerHeight;
    ctx.fillStyle ='#9e9b70';
    ctx.fillRect(1,400,4000,900);

    
    ctx.fillStyle='grey';
    ctx.beginPath();
    ctx.arc(1100,90,60,0,Math.PI*2)
    ctx.fill();

    ctx.fillStyle='black';
    ctx.beginPath();
    ctx.arc(1100,90,60,Math.PI*1.5, Math.PI*0.5,true)
    ctx.fill();


    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(10,450);
    ctx.lineTo(80,450);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(120,450);
    ctx.lineTo(220,450);
    ctx.stroke();

    
    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(275,450);
    ctx.lineTo(375,450);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(450,450);
    ctx.lineTo(550,450);
    ctx.stroke();

    
    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(550,450);
    ctx.lineTo(575,450);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(600,450);
    ctx.lineTo(700,450);
    ctx.stroke();

    
    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(750,450);
    ctx.lineTo(850,450);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(900,450);
    ctx.lineTo(1000,450);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(1050,450);
    ctx.lineTo(1150,450);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(1250,450);
    ctx.lineTo(1350,450);
    ctx.stroke();

    ctx.strokeStyle='black';//começo da segunda linha
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(10,500);
    ctx.lineTo(100,500);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(150,500);
    ctx.lineTo(250,500);
    ctx.stroke();

    
    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(300,500);
    ctx.lineTo(400,500);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(450,500);
    ctx.lineTo(550,500);
    ctx.stroke();

    
    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(600,500);
    ctx.lineTo(700,500);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(750,500);
    ctx.lineTo(800,500);
    ctx.stroke();

    
    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(850,500);
    ctx.lineTo(950,500);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(1000,500);
    ctx.lineTo(1150,500);
    ctx.stroke();

     ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(1200,500);
    ctx.lineTo(1300,500);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(1250,500);
    ctx.lineTo(1350,500);
    ctx.stroke();

    ctx.strokeStyle='black';//começo da terceira linha
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(10,550);
    ctx.lineTo(100,550);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(150,550);
    ctx.lineTo(250,550);
    ctx.stroke();

    
    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(300,550);
    ctx.lineTo(400,550);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(450,550);
    ctx.lineTo(550,550);
    ctx.stroke();

    
    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(600,550);
    ctx.lineTo(700,550);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(750,550);
    ctx.lineTo(800,550);
    ctx.stroke();

    
    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(850,550);
    ctx.lineTo(950,550);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(1000,550);
    ctx.lineTo(1150,550);
    ctx.stroke();

     ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(1200,550);
    ctx.lineTo(1300,550);
    ctx.stroke();

    ctx.strokeStyle='black';
    ctx.lineWidth='5';
    ctx.beginPath();
    ctx.moveTo(1250,550);
    ctx.lineTo(1350,550);
    ctx.stroke();//fim da terceira linha

    

    var imagem = new Image();
imagem.onload=function(){
ctx.drawImage(this, 1000, 250, 200, 200);}
imagem.src = 'img/cacto.png';//cacto

var imagem = new Image();
imagem.onload=function(){
ctx.drawImage(this, 400, 250, 200, 200);}
imagem.src = 'img/cacto.png';//cacto

ctx.fillStyle ='#434445';
ctx.fillRect(750,260,80,50);//cabeça

ctx.fillStyle ='black';
ctx.fillRect(760,270,10,10);//olho

ctx.strokeStyle='#434445';//boca
    ctx.lineWidth='8';
    ctx.beginPath();
    ctx.moveTo(820,320);
    ctx.lineTo(760,320);
    ctx.stroke();

    ctx.strokeStyle='#434445';//braço
    ctx.lineWidth='8';
    ctx.beginPath();
    ctx.moveTo(820,340);
    ctx.lineTo(760,340);
    ctx.stroke();

    ctx.strokeStyle='#434445';//mão
    ctx.lineWidth='8';
    ctx.beginPath();
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
