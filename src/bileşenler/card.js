import axios from "axios";

const Card = (makale) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const h2 = document.createElement("div");
  h2.classList.add("headline");
  h2.textContent = makale.anabaslik;

  const yazar = document.createElement("div");
  yazar.classList.add("author");

  const imgClass = document.createElement("div");
  imgClass.classList.add("img-container");

  const img = document.createElement("img");
  /*img.classList.add("src");
  img.textContent = "yazarFoto";*/
  img.src = makale.yazarFoto;

  const span = document.createElement("span");
  span.textContent = `${makale.yazarAdi} tarafından`;

  imgClass.append(img);
  yazar.append(imgClass, span);
  card.append(h2, yazar);

  card.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });
  return card;
};

// GÖREV 5
// ---------------------

// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdı } tarafından</span>
//   </div>
// </div>
//

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  axios
    .get(`http://localhost:5001/api/makaleler`)
    .then((response) => {
      const location = document.querySelector(secici);
      const makaleler = response.data.makaleler;
      for (let key in makaleler) {
        makaleler[key].forEach((makale) => {
          location.append(Card(makale));
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
export { Card, cardEkleyici };
