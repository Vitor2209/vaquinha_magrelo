document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('payment-form');
  const payButton = document.querySelector('.btn-pay');
  const buttonText = payButton.querySelector('.btn-text');
  const spinner = payButton.querySelector('.spinner');
  const confirmBtn = document.getElementById('confirm-btn');

  // Animações de entrada
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Simula pagamento (integrar ao gateway real quando necessário)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buttonText.style.display = 'none';
    spinner.style.display = 'inline-block';
    payButton.disabled = true;

    setTimeout(() => {
      spinner.style.display = 'none';
      buttonText.style.display = 'inline';
      payButton.disabled = false;
      alert('Pagamento processado com sucesso! Obrigado pela doação.');
    }, 2000);
  });

  // Confirmar programa
  confirmBtn.addEventListener('click', () => {
    alert('SEU PROGRAMA FOI AGENDADO COM SUCESSO PARA AMANHÃ AS 10h');
  });
});
