document.addEventListener('DOMContentLoaded', () => {
  const listArray = document.getElementById('listArray');
  const tombolPush = document.getElementById('tombolPush');
  const tombolPop = document.getElementById('tombolPop');
  const tombolUnshift = document.getElementById('tombolUnshift');
  const tombolShift = document.getElementById('tombolShift');
  const tombolSortAsc = document.getElementById('tombolSortAsc');
  const tombolSortDesc = document.getElementById('tombolSortDesc');
  const tombolReset = document.getElementById('tombolReset');

  const buatArrayAcak = () => {
    let arrayAcak = [];

    for (let i = 0; i < 10; i++) {
      let angka = Math.floor(Math.random() * 10);
      arrayAcak.push(angka);
    }

    return arrayAcak;
  };

  let arrayAcak = buatArrayAcak();
  listArray.innerText = `Array : ${arrayAcak.join(', ')}`;

  tombolPush.addEventListener('click', () => {
    arrayAcak.push(Math.floor(Math.random() * 10));

    listArray.innerText = `Array : ${arrayAcak.join(', ')}`;
  });

  tombolPop.addEventListener('click', () => {
    arrayAcak.pop();

    listArray.innerText = `Array : ${arrayAcak.join(', ')}`;
  });

  tombolUnshift.addEventListener('click', () => {
    arrayAcak.unshift(Math.floor(Math.random() * 10));

    listArray.innerText = `Array : ${arrayAcak.join(', ')}`;
  });

  tombolShift.addEventListener('click', () => {
    arrayAcak.shift();

    listArray.innerText = `Array : ${arrayAcak.join(', ')}`;
  });

  tombolSortAsc.addEventListener('click', () => {
    arrayAcak.sort((a, b) => a - b);

    listArray.innerText = `Array : ${arrayAcak.join(', ')}`;
  });

  tombolSortDesc.addEventListener('click', () => {
    arrayAcak.sort((a, b) => b - a);

    listArray.innerText = `Array : ${arrayAcak.join(', ')}`;
  });

  tombolReset.addEventListener('click', () => {
    arrayAcak = buatArrayAcak();

    listArray.innerText = `Array : ${arrayAcak.join(', ')}`;
  });
});
