let canvas, ctx, Altura, Largura, frame, dados = 0;

let chao = {
          y: 450,
          altura: 150,
          cor: 'saddlebrown',

          desenhar: function () {
                    ctx.fillStyle = this.cor;
                    ctx.fillRect(0, this.y, Largura, this.altura);
                    }
          },

          bloco = {
                    x: 280,
                    y: 0,
                    altura: 40,
                    largura: 40,
                    cor: 'gray',
                    gravidade: 2, //pegar_Dados()
                    velocidade: 0,
                    // forcaDoPulo: 25,

                    // pula: function () {
                    //           this.velocidade = -this.forcaDoPulo;
                    // },

                    atualizar: function () {
                              this.velocidade += this.gravidade;
                              this.y += this.velocidade;

                              if (this.y > chao.y - this.altura) {
                                        this.y = chao.y - this.altura;
                              }

                    },

                    desenhar: function () {
                              ctx.fillStyle = this.cor;
                              ctx.fillRect(this.x, this.y, this.largura, this.altura);
                    }
          };

// function pegar_Dados () {
//           let input = document.getElementsByClassName('dados');
//           input.addEventListener('submit', function(e){
//                      dados.push();
//                     console.log(dados.value);
//                     e.preventDefault();
//           })
// }

// let clique = function (event) {
//           bloco.pula();
// }

let principal = function() {
          Largura = window.innerHeight;
          Altura = window.innerWidth;

          if (Largura >= 500) {
                    Largura = 600;
                    Altura = 600;

          canvas = document.createElement('canvas');
          canvas.width = Largura;
          canvas.height = Altura;
          ctx = canvas.getContext('2d');
          document.querySelector('div.align-canvas').appendChild(canvas);
          document.addEventListener('keyup', function(e) {
              e.preventDefault();
              if (e.keyCode === 32) {
                  bloco.velocidade = -20
              }
          }, false);

          roda();

}

function roda() {
          atualizar();
          desenhar();

          window.requestAnimationFrame(roda);
}

function atualizar() {
          frame++;
          bloco.atualizar();
}

function desenhar()     {
          ctx.fillStyle = 'cyan';
          ctx.fillRect(0, 0, Largura, Altura)
          chao.desenhar();
          bloco.desenhar();
}
}

principal();
