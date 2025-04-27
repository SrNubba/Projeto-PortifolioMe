function enviarMensagem(event) {
    event.preventDefault() // Impede que a tela recarregue ao enviar o formulário

    var name = document.getElementById('nome').value;
    var mensagem = document.getElementById('mensagem').value;
    var telefone = '5561996093879' // Número de telefone fixo para o WhatsApp

    var texto = `Olá, meu nome é ${name}. ${mensagem}`
    var msgfomatada = encodeURIComponent(texto)
    var url = `https://wa.me/${telefone}?text=${msgfomatada}`

    console.log(url)

    window.open(url, '_blank')

}