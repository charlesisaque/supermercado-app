// cadastro.js

// Pega as instâncias já inicializadas no firebase-config.js
const auth = window.auth;
const firestore = window.firestore;

document.getElementById('formCadastro').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Pega os valores do formulário
  const email = document.getElementById('emailCadastro').value.trim();
  const senha = document.getElementById('senhaCadastro').value.trim();
  const nomeCompleto = document.getElementById('nomeCompleto').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const bairro = document.getElementById('bairro').value;

  try {
    // Cria usuário no Firebase Authentication
    const usuario = await auth.createUserWithEmailAndPassword(email, senha);

    // Salva dados adicionais no Firestore, dentro da coleção 'usuarios', usando UID como doc ID
    await firestore.collection('usuarios').doc(usuario.user.uid).set({
      email: email,
      nomeCompleto: nomeCompleto,
      telefone: telefone,
      bairro: bairro,
      criadoEm: new Date()
    });

    alert('✅ Cadastro realizado com sucesso!');
    window.location.href = 'home.html'; // redireciona para home
  } catch (erro) {
    alert('❌ Erro no cadastro: ' + erro.message);
  }
});
