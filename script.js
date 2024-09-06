document.addEventListener('DOMContentLoaded', () => {
  const btn1 = document.getElementById('btn-1');
  const btn2 = document.getElementById('btn-2');
  const btn3 = document.getElementById('btn-3');
  const factContainer = document.getElementById('fact-text');

  btn1.addEventListener('click', (e) => {
    e.preventDefault();
    factContainer.innerHTML = 'Hector foi o jogador que mais sofreu faltas na partida. <span class="highlight">5</span>';
  });

  btn2.addEventListener('click', (e) => {
    e.preventDefault();
    factContainer.innerHTML = 'Hector acertou a trave 1 vez em um total de 1 chute. <span class="highlight">1/1</span>';
  });
});         
