function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const icon = document.querySelector('.mobile-menu-icon i');

    // 1. Alterna a classe 'active' na lista de links (mostra/esconde)
    navLinks.classList.toggle('active');

    // 2. (Opcional) Troca o ícone de "Barras" para "X" quando aberto
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark'); // Ícone de fechar
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars'); // Ícone de menu
    }
}