var jogadorNome;
			var jogadorPontos = 0;
			var computadorPontos = 0;
			var computadorEscolha = 0;
			var jogadorEscolha = 0;


			//exibe mensagem no console
			function mensagem(texto){
				document.getElementById('mensagem').innerHTML = texto;
			}
			
			// Sortear a jogada do computador
			function sortear(min,max){
		
				return Math.floor(Math.random() * (max - min + 1)) + min;
				// Floor: arredonda um número de um random
				// Faz com que o random fique preso entre os numeros passados no parametro
			}
			
			
			function somarPontoJogador(){
				jogadorPontos++;
				document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
			}
			// Somar os pontos
			function somarPontoBot(){
				computadorPontos++;
				document.getElementById('computador-pontos').innerHTML = computadorPontos;
			}
			// Adiciona classe selecionado
			function selecionar(tipo, escolha){
				document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
			}
			// Remove a calsse selecionado
			function deselecionar(tipo, escolha){
				document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
			}
			
			// Escolhe a jogada do usuário
			// 1- pedra
			// 2- papel
			// 3- Tesoura

			function calcularEscolha(jogador, computador){
				if(jogador == 1 && computador == 1){
					return 0;
				}else if(jogador == 1 && computador == 2){
					return 2;
				}else if(jogador == 1 && computador == 3){
					return 1;
				}else if(jogador == 2 && computador == 1){
					return 1;
				}else if(jogador == 2 && computador == 2){
					return 0;
				}else if(jogador == 2 && computador == 3){
					return 2;
				}else if(jogador == 3 && computador == 1){
					return 2;
				}else if(jogador == 3 && computador == 2){
					return 1;
				}else if(jogador == 3 && computador == 3){
					return 0;
				}
			}

			// Calcular e retorna quem ganhou
			// 0 = empate
			// 1 = jogador
			// 2 = computador

			function jogar(escolha){
			// escolha atribuida em jogador escolha e sorteada em calcular escolha
				jogadorEscolha = escolha;
			// 	Function selecionar mão 
				selecionar('jogador', jogadorEscolha);

			// Sortear a jogada do computador
				computadorEscolha = sortear(1,3);
			// Function selecionar mão 
				selecionar('computador', jogadorEscolha);
		
				var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha)
				
				if(ganhador == 0){
					mensagem('empate');
				}else if (ganhador == 1) {
					mensagem('Ponto para : ' + jogadorNome);
					somarPontoJogador();

				}else if (ganhador == 2) {
					mensagem('O computador ganhou!');
					somarPontoBot();
				}

			setTimeout(function() {
				deselecionar('jogador', jogadorEscolha);
				deselecionar('computador', computadorEscolha);
				mensagem(jogadorNome + 'escolha uma opção acima...');
			}, 3500);
			}

			// Opção que o jogador escolheu

			document.getElementById('jogador-escolha-1').onclick = function() {
			 
			 (jogar(1));

			}

			document.getElementById('jogador-escolha-2').onclick = function(){
				(jogar(2));
			}

			document.getElementById('jogador-escolha-3').onclick = function(){
				(jogar(3));
			}

		// Pergunta e mostra na tela

			jogadorNome = prompt('Qual é seu nome?');  

		//manipulou a div mensagem e atribuiu o texto.. função do Dom através do InnerHTML

			mensagem('Bem-vindo ' + jogadorNome + ', escolha uma opção acima...'); //utilizando function 

			document.getElementById('jogador-nome').innerHTML = jogadorNome;
			// sem utilizar function