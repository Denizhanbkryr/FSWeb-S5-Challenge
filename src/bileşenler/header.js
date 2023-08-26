const Header = (baslik, tarih, yazi) => {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const span = document.createElement("span");
  span.classList.add("date");
  span.textContent = tarih;

  const h1 = document.createElement("h1");
  h1.textContent = baslik;

  const span1 = document.createElement("span");
  span1.classList.add("temp");
  span1.textContent = yazi;

  headerDiv.append(span, h1, span1);

  return headerDiv;
};

// GÖREV 1
// ---------------------
// Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
// Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
//  <div class="header">
//    <span class="date">{ tarih }</span>
//    <h1>{ baslik }</h1>
//    <span class="temp">{ yazi }</span>
//  </div>
//

const headerEkleyici = (secici) => {
  const baslik = "Teknoloji Zamanı";
  const tarih = new Date(Date.now()).toLocaleString();
  const yazi = "Hoşgeldiniz";

  const header = Header(baslik, tarih, yazi);
  document.querySelector(secici).append(header);
};
// GÖREV 2
// ---------------------
// Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
// Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
// Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
//
// İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
// fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

export { Header, headerEkleyici };
