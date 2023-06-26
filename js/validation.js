const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });

  const formInputs = contactForm.querySelectorAll('input, textarea');

  formInputs.forEach(function(input) {
    input.addEventListener('blur', function() {
      validateField(input);
    });
  });

  // Function to validate the entire form
  function validateForm() {
    formInputs.forEach(function(input) {
      validateField(input);
    });
  }

  // Function to validate individual fields
  function validateField(input) {
    const inputValue = input.value.trim();
    const errorElement = input.parentElement.querySelector('.error-message');

    if (inputValue === '') {
      showError(input, errorElement, 'يرجى إدخال قيمة صحيحة');
    } else {
      showSuccess(input, errorElement);
    }

    if (input.id === 'name') {
      if (/\d/.test(inputValue)) {
        showError(input, errorElement, 'الاسم غير صالح');
      }else if(inputValue.length > 50){
        showError(input, errorElement, 'الاسم يجب ان يتكون من 15 حرف فقط');
      }
    }
    if (input.id === 'email') {
        if (!isValidEmail(inputValue)) {
          showError(input, errorElement, 'الايميل غير صالح');
        }
      }

    if (input.id === 'subject') {
      if (inputValue.length > 50) {
        showError(input, errorElement, 'العدد المسموح له للعنوان 50 حرف');
      }
    }
    if (input.id === 'message') {
        if (inputValue.length > 150) {
          showError(input, errorElement, 'يجب ان لاتزيد احرف الرسالة عن 150 حرف');
        }
      }
  }

  // Function to show error message for input
  function showError(input, errorElement, message) {
    errorElement.innerText = message;
    errorElement.style.color = 'red';
    input.classList.add('error');
  }

  // Function to show success state for input
  function showSuccess(input, errorElement) {
    errorElement.innerText = '';
    input.classList.remove('error');
  }

  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }