const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', sendEmail);

const serviceId = 'service_jf5ryoe';
const templateId = 'template_cwhmgfc';
const apikey = 'kxm8XVhLi058pgVeX';

function sendEmail(event) {
    event.preventDefault();
    emailjs.init(apikey); 

    emailjs.sendForm(serviceId, templateId, contactForm, apikey)
        .then(result => Swal.fire("Su mensaje se ha enviado con éxito!"))
        .catch(error => Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No fue posible enviar su mensaje",
        }));
}
