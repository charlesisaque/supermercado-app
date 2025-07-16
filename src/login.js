firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

document.getElementById('formLogin').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('emailLogin').value;
  const senha = document.getElementById('senhaLogin').value;

  auth.signInWithEmailAndPassword(email, senha)
    .then((credenciais) => {
      alert('✅ Login realizado com sucesso!');
      console.log(credenciais.user);
      window.location.href = 'home.html';
    })
    .catch((erro) => {
      alert('❌ Erro no login: ' + erro.message);
    });
});

document.getElementById('btnGoogle').addEventListener('click', () => {
  auth.signInWithPopup(provider)
    .then((resultado) => {
      alert('✅ Login com Google realizado com sucesso!');
      console.log(resultado.user);
      window.location.href = 'home.html';
    })
    .catch((erro) => {
      alert('❌ Erro no login com Google: ' + erro.message);
    });
});
