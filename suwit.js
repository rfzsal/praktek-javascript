document.addEventListener('DOMContentLoaded', () => {
  const semuaTombol = document.querySelectorAll('.tombol');

  const suitJawa = (valueTombol) => {
    let jawabanKomputer, hasil;

    const angkaRandom = Math.floor(Math.random() * 9) + 1;
    if (angkaRandom <= 3) {
      jawabanKomputer = 'SEMUT';
    } else if (angkaRandom > 3 && angkaRandom <= 6) {
      jawabanKomputer = 'ORANG';
    } else {
      jawabanKomputer = 'GAJAH';
    }

    if (valueTombol === jawabanKomputer) {
      hasil = 'SERI';
    } else if (valueTombol === 'SEMUT') {
      hasil = 'MENANG';
      if (jawabanKomputer === 'ORANG') hasil = 'KALAH';
    } else if (valueTombol === 'ORANG') {
      hasil = 'MENANG';
      if (jawabanKomputer === 'GAJAH') hasil = 'KALAH';
    } else if (valueTombol === 'GAJAH') {
      hasil = 'MENANG';
      if (jawabanKomputer === 'SEMUT') hasil = 'KALAH';
    }

    console.log(`Jawaban Komputer adalah ${jawabanKomputer}`);
    console.log(`Jawaban User adalah ${valueTombol}`);
    console.log(`Hasilnya adalah ${hasil}`);
    console.log('');

    return hasil;
  };

  semuaTombol.forEach((tombol) => {
    tombol.addEventListener('click', (e) => {
      const hasil = suitJawa(e.target.innerText);

      if (hasil === 'SERI') {
        alert(`Hasilnya ${hasil}`);
      } else {
        alert(`Anda ${hasil}`);
      }
    });
  });
});
