
## <p style="text-align: center;">Deserto Jurássico</p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Olá, estamos aqui para mais um projeto. Dessa vez iremos criar um cenário inspirado em um jogo Offline do Google, o jogo do T-Rex que tem que pular vários cactos e chegar o mais longe possível. É extremamente recomendado que veja o nosso [último trabalho](https://github.com/miguel-oliveira-araujo/Atividade-canvas) sobre o canvas, onde testamos os comandos do canvas (usado nesse projeto) para entender melhor a explicação a seguir.

> <font color="yellow">:warning: Atenção: Todos os códigos do Canvas foram feitos com base na resolução dos sites do Firefox. Portanto, se for abrir o site desse projeto, abra-o no Firefox para evitar erros.</font>

## Fase inicial
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criamos as pastas para cada arquivo do site. Começamos a pensar no que deveríamos criar e chegamos na ideia do jogo Offline do Google. Ficamos em dúvida se deveríamos fazer o jogo em preto e branco (como no jogo original) ou se deveríamos fazer algo mais colorido. Acabamos decidindo fazer os desenhos coloridos.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criamos os códigos bases para o Index.html, linkando o Javascript e o CSS. Depois partimos para colocar a mão na massa.

## Desenhando o chão
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Utilizamos o comando para criar base do chão:
- `ctx.fillRect(1, 400, 4000, 900)`<br>
É vários comandos de:
- `ctx.strokeStyle = '#363636';`
- `ctx.lineWidth = 5;`
- `ctx.beginPath();`
- `ctx.moveTo(x, y);`
- `ctx.lineTo(x, y);`
- `ctx.stroke();`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Esses comandos criam as linhas no chão, simulando as linhas que existem no jogo real e para simular textura. Os únicos comandos que não foram usados no último trabalho de Canvas são:
- `ctx.strokeStyle = "cor de preferência";` (define a cor da linha)
- `ctx.lineWidth = "tamanho";` (define a espessura da linha)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estávamos enfrentando um certo erro no meio do trabalho, onde percebemos que os desenhos do canvas tinham um limite. Com a ajuda da nossa professora, descobrimos dois comandos:
- `ctx.canvas.width = window.innerWidth;`
- `ctx.canvas.height = window.innerHeight;`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Esses comandos definem o limite do Canvas como a tela inteira, permitindo desenhar em todo o monitor, sem limitações.

## "Desenhando" os Cactos
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A ideia inicial era pegarmos um cacto do jogo original e colocarmos no site. Até mesmo fomos no jogo original e pegamos os sprites do cacto, depois os repintamos. Porém, acabamos optando por pegar uma imagem pronta de um cacto na internet. Utilizamos o seguinte comando:

	var imagem = new Image();
	imagem.onload = function() {
    	ctx.drawImage(this, 1000, 250, 200, 200);
	}
		imagem.src = 'img/cacto.png'; // cacto

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Esse comando foi utilizado duas vezes para criar dois cactos (a única coisa que muda entre eles é a posição).
## Desenhando o T-Rex

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Desenhar o T-Rex do jogo não é algo tão difícil. Utilizamos vários comandos para desenhar retângulos, mudando a posição, tamanho e cor. Também utilizamos o comando de linha, como pode ser visto abaixo:

	ctx.fillStyle = '#434445';
	ctx.fillRect(750, 260, 80, 50); // cabeça

	ctx.fillStyle = 'black';
	ctx.fillRect(760, 270, 10, 10); // olho

	ctx.strokeStyle = '#434445'; // boca
	ctx.lineWidth = 8;
	ctx.moveTo(820, 320);
	ctx.lineTo(760, 320);
	ctx.stroke();

	ctx.strokeStyle = '#434445'; // braço
	ctx.lineWidth = 8;
	ctx.moveTo(820, 340);
	ctx.lineTo(760, 340);
	ctx.stroke();

	ctx.strokeStyle = '#434445'; // mão
	ctx.lineWidth = 8;
	ctx.moveTo(820, 336);
	ctx.lineTo(820, 350);
	ctx.stroke();

	ctx.fillStyle = '#434445';
	ctx.fillRect(750, 310, 50, 70); // corpo

	ctx.fillStyle = '#434445';
	ctx.fillRect(730, 310, 50, 70);

	ctx.fillStyle = '#434445';
	ctx.fillRect(740, 330, 10, 70);

	ctx.fillStyle = '#434445';
	ctx.fillRect(760, 330, 10, 70);

	ctx.fillStyle = '#434445';
	ctx.fillRect(710, 335, 50, 40); // rabo

	ctx.fillStyle = '#434445';
	ctx.fillRect(680, 345, 50, 30);

## Plano de Fundo

Usando o seguinte comando no CSS:



	body {
    background-image: linear-gradient(#000000, #261464);
	}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Podemos transformar o plano de fundo em um degradê de cores. Utilizamos o preto e o roxo para simular a noite, já que parte do jogo Offline fica à noite. Além disso, permite a inclusão de elementos como estrelas e a lua, deixando a cena mais bonita.<br>
 ## Lua e Estrelas

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nessa parte, resolvemos criar outra branch com o nome dessa fase, pois na teoria o site já tinha tudo o que precisava e essa parte era apenas para deixar a cena mais bonita. Também tivemos um problema com a resolução, pois o site foi codificado em navegadores diferentes e deixei a resolução oficial no site do Firefox.

Para desenhar a lua, utilizamos o seguinte comando:

	ctx.fillStyle = '#A9A9A9';
	ctx.beginPath();
	ctx.arc(1100, 90, 60, 0, Math.PI * 2);
	ctx.fill();

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Utilizamos a cor cinza. E utilizamos vários desses mesmos comandos com um tom de cinza mais escuro, mudando a posição e o raio para simular as crateras da lua.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para as estrelas, utilizamos comandos de linhas, da mesma forma que fizemos na parte em que estávamos desenhando o chão. Fazemos a linha se cruzar com outra, formando uma cruz, como abaixo:

	ctx.strokeStyle = "white";
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(820, 40);
	ctx.lineTo(820, 70);
	ctx.stroke();

	ctx.moveTo(830, 55);
	ctx.lineTo(810, 55);
	ctx.stroke();

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Utilizamos a cor branca e deixamos a linha mais fina, para simular estrelas de verdade. Depois so repetimos esse mesmo codígo alterando a posicão deles, para colocar outras estrelas no céu.Quando terminamos, so juntamos uma branch com a outra e pronto, o cenario estava feito.
