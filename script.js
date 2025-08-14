// Função que alterna o modo claro/escuro e troca a imagem
function toggleMode() {

  // Pega o elemento raiz <html> da página
  const html = document.documentElement;

  // Alterna a classe "light" no <html>
  // Se não tiver, adiciona. Se já tiver, remove.
  html.classList.toggle("light");

  // Seleciona a imagem que está dentro do elemento com id="profile"
  const img = document.querySelector("#profile img");

  // Verifica se o <html> está com a classe "light"
  if (html.classList.contains("light")) {

      // Se estiver no modo claro, troca a imagem para avatar-light.png
      img.setAttribute("src", "./assets/avatar-light.png");

  } else {

      // Se estiver no modo escuro, troca para avatar.png
      img.setAttribute("src", "./assets/avatar.png");
  }
}
