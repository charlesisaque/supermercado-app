const firebaseConfig = {
  apiKey: "AIzaSyDJ4M5xWnkwUhTG3FKzNEbUxEp_Ks0i9AI",
  authDomain: "supermercadobahianorte-app.firebaseapp.com",
  projectId: "supermercadobahianorte-app",
  storageBucket: "supermercadobahianorte-app.appspot.com",
  messagingSenderId: "258971720750",
  appId: "1:258971720750:web:aabf4a1475a089b51293bf",
  measurementId: "G-C4S8VNZRLH",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const lista = document.getElementById("listaProdutos");

db.collection("catalogo")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      const produto = doc.data();
      const div = document.createElement("div");
      div.className = "produto";
      div.innerHTML = `
      <h3>${produto.nome}</h3>
      <p>Preço: R$ ${Number(produto.preco).toFixed(2)}</p>
    `;
      lista.appendChild(div);
    });
  })
  .catch((error) => {
    console.error("Erro ao buscar produtos:", error);
  });

// Seleciona todos os radios
const radios = document.querySelectorAll('input[name="nav"]');
const select = document.getElementById("subcategoria");
const options = select.querySelectorAll("option");

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const selectedClass = radio.id;
    let firstVisibleOption = null;

    options.forEach((option) => {
      if (option.classList.contains(selectedClass)) {
        option.style.display = "block";
        if (!firstVisibleOption) {
          firstVisibleOption = option;
        }
      } else {
        option.style.display = "none";
      }
    });

    // Define o primeiro visível como selecionado
    if (firstVisibleOption) {
      select.value = firstVisibleOption.value;
    } else {
      select.selectedIndex = -1;
    }
  });
});
