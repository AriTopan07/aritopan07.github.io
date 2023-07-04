let orderButton = document.getElementById('orderButton');
let phoneNumber = '6281234567890'; // Ganti dengan nomor WhatsApp tujuan
let message = 'Halo, saya tertarik untuk membeli produk Anda'; // Ganti dengan pesan yang diinginkan

orderButton.addEventListener('click', function() {
  let encodedMessage = encodeURIComponent(message);
  let whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + encodedMessage;
  window.open(whatsappLink, '_blank');
});