var n = 3 // Set nilai yang kamu mau isi (1-4)
var komentarMatkul = [
  'Mata kuliah sudah disampaikan dengan baik, hanya saja untuk beban fp yang mendadak saya merasa sangat keberatan, dan harapannya agar dipertimbangkan kembali beban sks nya',
  'Mata kuliah sudah disampaikan dengan baik', 
  'Mata kuliah yang saya dapat tidak sebanding dengan fp yang saya kerjakan, mungkin bisa dipertimbangkan untuk beban sksnya'
]
var komentarDosen =
  'Bapak / ibu dosen sudah menyampaikan mata kuliah dengan baik'

$(`input[type="radio"][id$="${n}1"]`).prop('checked', true) //Dosen
$(`input[type="radio"][id$="${n}"]`).prop('checked', true) // MK
// $('#txtKomentar').val(komentarMatkul[1]) // Komentar MK
$('#txtKomentar').val(komentarDosen) // Komentar Dosen
$('#chkPermanent').prop('checked', true) // Konfirmasi Data Benar
