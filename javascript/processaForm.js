document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Exibe o alerta personalizado usando SweetAlert2
    Swal.fire({
        title: 'Sucesso!',
        text: 'Obrigado pela sua sugestão, nossa equipe irá avaliá-la em breve.',
        icon: 'success',
        iconColor: '#FF7E00',
        confirmButtonText: 'OK',
        confirmButtonColor: '#FF7E00',
        customClass:{
            popup: 'sweetalert-popup',
            title: 'sweetalert-title',
            content: 'sweetalert-text',
        }
    });

    // Opcionalmente, você pode limpar o formulário após o envio
    document.getElementById('feedback-form').reset();
});