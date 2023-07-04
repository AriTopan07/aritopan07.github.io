var orderButton1 = document.getElementById('orderButton1');
var orderButton2 = document.getElementById('orderButton2');
var orderButton3 = document.getElementById('orderButton3');

var phoneNumber = '6282141938309'; // Ganti dengan nomor WhatsApp tujuan
var message = 'Halo, saya tertarik untuk memesan produk Anda'; // Ganti dengan pesan yang diinginkan

orderButton1.addEventListener('click', function() {
    openWhatsAppChat(message);
});

orderButton2.addEventListener('click', function() {
    openWhatsAppChat(message);
});

orderButton3.addEventListener('click', function() {
    openWhatsAppChat(message);
});

function openWhatsAppChat(message) {
    var encodedMessage = encodeURIComponent(message);
    var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + encodedMessage;
    window.open(whatsappLink, '_blank');
}