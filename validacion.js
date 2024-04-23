    const boton = document.getElementById('top');
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let asunto = document.getElementById("asunto");
    let mensaje = document.getElementById("mensaje");
    let submit = document.getElementById("submit");
    const btn = document.getElementById('button');
    const form = document.getElementById("form");

    // Evento que permite visualizar el boton
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            boton.style.display = 'block';
        } else {
            boton.style.display = 'none';
        }
    });  

    // evento del btn que nos permite regresar al nav
    boton.addEventListener("click", () =>{
        document.documentElement.scrollTop = 0;
    })
    // automatizacion del email
        form.addEventListener('submit', function(e) {
            e.preventDefault();
                btn.value = 'Enviando...';
                const serviceID = 'service_h21zge5';
                const templateID = 'template_84owd2k';
        emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar Email';
            alert('Enviado!');
        }, (err) => {
            btn.value = 'Enviar Email';
            alert(JSON.stringify(err));
        });
    });