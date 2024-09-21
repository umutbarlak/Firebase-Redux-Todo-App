export const catColors = [
  "#ffadad",
  "#ffd6a5",
  "#fdffb6",
  "#caffbf",
  "#d5aaee",
  "#b9fbc0",
  "#a0c4ff",
  "#d4a5a5",
  "#ff677d",
  "#f6d743",
  "#3a86ff",
  "#00bfae",
  "#a2d2ff",
  "#efcb68",
  "#ff9f9f",
  "#c6e2f0",
  "#b9e1f6",
  "#f3a683",
  "#d9d9d9",
  "#c4e2f9",
];

export const categoriesOptions = [
  { value: "Kişisel", label: "Kişisel" },
  { value: "Çalışma", label: "Çalışma" },
  { value: "Eğlence", label: "Eğlence" },
  { value: "Ev", label: "Ev" },
  { value: "Sağlık", label: "Sağlık" },
  { value: "Alışveriş", label: "Alışveriş" },
  { value: "Projeler", label: "Projeler" },
  { value: "Eğitim", label: "Eğitim" },
  { value: "Finans", label: "Finans" },
  { value: "Sosyal", label: "Sosyal" },
  { value: "Teknoloji", label: "Teknoloji" },
  { value: "Günlük", label: "Günlük" },
  { value: "Hobi", label: "Hobi" },
  { value: "Yapılacaklar", label: "Yapılacaklar" },
  { value: "Randevular", label: "Randevular" },
  { value: "Temizlik", label: "Temizlik" },
  { value: "İletişim", label: "İletişim" },
  { value: "Yemek", label: "Yemek" },
  { value: "Dersler", label: "Dersler" },
  { value: "Hedefler", label: "Hedefler" },
];

export const statusOptions = [
  { value: "Devam Ediyor", label: "Devam Ediyor" },
  { value: "Tamamlandı", label: "Tamamlandı" },
  { value: "Erteleme", label: "Erteleme" },
  { value: "Beklemede", label: "Beklemede" },
  { value: "İptal Edildi", label: "İptal Edildi" },
];

export const statusColors = {
  "Devam Ediyor": "#42A5F5", // Mavi (devam eden işlerin sakinliğini yansıtır)
  Tamamlandı: "#66BB6A", // Yeşil (tamamlanan işler için başarıyı ifade eder)
  Erteleme: "#FF7043", // Turuncu (erteleme için sıcak, dikkat çeken bir ton)
  Beklemede: "#FFCA28", // Sarı (beklemede olan işler için nötr, uyarıcı ton)
  "İptal Edildi": "#EF5350", // Kırmızı (iptal edilen işler için uyarı tonu)
};

export const importanceOptions = [
  { value: "Günlük", label: "Günlük" },
  { value: "Orta Öncelikli", label: "Orta Öncelikli" },
  { value: "Önemli", label: "Önemli" },
  { value: "Kritik", label: "Kritik" },
  { value: "Opsiyonel", label: "Opsiyonel" },
];

export const importanceColors = {
  Günlük: "#E0E0E0", // Günlük - Gri (daha az önemli)
  "Orta Öncelikli": "#FFDD57", // Orta Öncelikli - Sarı (orta önem)
  Önemli: "#FF6B6B", // Önemli - Kırmızı (yüksek önem)
  Kritik: "#D7263D", // Kritik - Koyu Kırmızı (en yüksek önem)
  Opsiyonel: "#A9A9A9", // Opsiyonel - Açık Gri (önemi düşük)
};
