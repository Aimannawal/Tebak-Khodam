document.getElementById('tebakKodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('nameInput').value.trim();
    if (name === '') return;
    
    const kodams = [
        { name: 'Martabak Telur', img: 'Storage/martabak-telur.jpg' }, 
        { name: 'Lemper', img: 'Storage/lemper.jpg' }, 
        { name: 'Risol Mayo', img: 'Storage/risol-mayo.jpg' }, 
        { name: 'Onde-Onde', img: 'Storage/onde-onde.jpg' }, 
        { name: 'Es Doger', img: 'Storage/es-doger.jpg' }, 
        { name: 'Es Campur', img: 'Storage/es-campur.jpg' },
        { name: 'Bakso', img: 'Storage/bakso.jpg' },
        { name: 'Pempek', img: 'Storage/pempek.jpg' },
        { name: 'Sate', img: 'Storage/sate.jpg' },
        { name: 'Gado-Gado', img: 'Storage/gado-gado.jpg' },
        { name: 'Nasi Goreng', img: 'Storage/nasi-goreng.jpg' },
        { name: 'Mie Goreng', img: 'Storage/mie-goreng.jpg' },
        { name: 'Soto', img: 'Storage/soto.jpg' },
        { name: 'Rendang', img: 'Storage/rendang.jpg' },
        { name: 'Kue Lapis', img: 'Storage/kue-lapis.jpg' },
        { name: 'Sosis Solo', img: 'Storage/sosis-solo.jpg' },
        { name: 'Ayam Penyet', img: 'Storage/ayam-penyet.jpg' },
        { name: 'Es Pisang Hijau', img: 'Storage/es-pisang-hijau.jpg' },
        { name: 'Tempe Mendoan', img: 'Storage/tempe-mendoan.jpg' }
    ];

    const randomKodam = kodams[Math.floor(Math.random() * kodams.length)];

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <img src="${randomKodam.img}" alt="${randomKodam.name}">
        <p style="font-family: 'Poppins', sans-serif; font-weight: 400;">Kodam kamu adalah ${randomKodam.name}</p>
    `;
    
    resultDiv.classList.remove('show');
    setTimeout(() => {
        resultDiv.classList.add('show');
    }, 100);
});
