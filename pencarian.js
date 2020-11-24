document.addEventListener('DOMContentLoaded', () => {
  const inputCari = document.getElementById('cari');
  const listBarang = document.getElementById('listBarang');

  const buatListBarang = () => [
    'Topi',
    'Baju',
    'Celana',
    'Sepatu',
    'Bakso',
    'Martabak',
    'Nasi Goreng',
    'Sate Ayam'
  ];

  const barangBarang = buatListBarang();

  barangBarang.forEach((barang) => {
    listBarang.innerHTML += `<p>${barang}</p>`;
  });

  const cariBarang = (inputValue) =>
    barangBarang.filter((barang) => {
      if (!inputValue) return true;

      return (
        barang.toLocaleLowerCase().indexOf(inputValue.toLocaleLowerCase()) > -1
      );
    });

  inputCari.addEventListener('search', (e) => {
    if (!e.target.value) {
      listBarang.innerHTML = '';

      barangBarang.forEach((barang) => {
        listBarang.innerHTML += `<p>${barang}</p>`;
      });
    }
  });

  inputCari.addEventListener('keyup', (e) => {
    const barangFilter = cariBarang(e.target.value);

    listBarang.innerHTML = '';

    barangFilter.forEach((barang) => {
      listBarang.innerHTML += `<p>${barang}</p>`;
    });
  });
});
