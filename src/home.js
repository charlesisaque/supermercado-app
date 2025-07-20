// Não inicialize o Firebase aqui de novo!
// Apenas pegue as instâncias globais criadas no firebase-config.js
const auth = window.auth;
const firestore = window.firestore;

// Agora pode usar auth e firestore normalmente
// Exemplo: buscar dados, escutar alterações, etc.

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     document.getElementById(
//       "userInfo"
//     ).textContent = `Você está logado como: ${user.email}`;
//   } else {
//     window.location.href = "login.html";
//   }
// });

// document.getElementById("btnLogout").addEventListener("click", () => {
//   auth
//     .signOut()
//     .then(() => {
//       alert("Você saiu com sucesso!");
//       window.location.href = "login.html";
//     })
//     .catch((erro) => {
//       alert("Erro ao sair: " + erro.message);
//     });
// });

const inputNumero = document.getElementById("UN1");
const botaoAumentar = document.getElementById("aumentar");
const botaoDiminuir = document.getElementById("diminuir");

botaoAumentar.addEventListener("click", () => {
  inputNumero.value = parseInt(inputNumero.value || 0) + 1;
});

botaoDiminuir.addEventListener("click", () => {
  inputNumero.value = parseInt(inputNumero.value || 0) - 1;
});
