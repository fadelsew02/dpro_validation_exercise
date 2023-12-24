function emailValidation() {
    const form = document.getElementById('form');
    const email_confirmation = document.getElementById('email_confirm');
    const element = document.createElement('p');
    const message = document.createTextNode("Eメールが一致しません");
    const contentField = document.getElementById('content_field');
    element.appendChild(message);
    element.setAttribute('id', 'alert');
    element.classList.add("alert_color");
    email_confirmation.addEventListener('keyup', e => {
      if(form.email.value !== form.email_confirm.value) {
        if (!document.getElementById('alert')) {
            console.log(contentField.parentNode)
          contentField.parentNode.insertBefore(element, contentField);
          email_confirmation.classList.add("alert_bg");
        }
      } else {
        email_confirmation.classList.remove("alert_bg");
        element.parentNode.removeChild(element);
      }
    });
  };
  
  window.onload = function() {
    emailValidation();
  };
  
  
  