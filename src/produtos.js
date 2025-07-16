const firebaseConfig = {
  apiKey: "AIzaSyDJ4M5xWnkwUhTG3FKzNEbUxEp_Ks0i9AI",
  authDomain: "supermercadobahianorte-app.firebaseapp.com",
  projectId: "supermercadobahianorte-app",
  storageBucket: "supermercadobahianorte-app.appspot.com",
  messagingSenderId: "258971720750",
  appId: "1:258971720750:web:aabf4a1475a089b51293bf",
  measurementId: "G-C4S8VNZRLH"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const lista = document.getElementById('listaProdutos');

db.collection('catalogo').get().then(snapshot => {
  snapshot.forEach(doc => {
    const produto = doc.data();
    const div = document.createElement('div');
    div.className = 'produto';
    div.innerHTML = `
      <h3>${produto.nome}</h3>
      <p>Preço: R$ ${Number(produto.preco).toFixed(2)}</p>
    `;
    lista.appendChild(div);
  });
}).catch(error => {
  console.error("Erro ao buscar produtos:", error);
});
