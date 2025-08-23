document.addEventListener('DOMContentLoaded', function() {
    // Profile page edit functionality
    const editIcons = document.querySelectorAll('.edit-icon');
    const saveButton = document.querySelector('.save-button');
    let activeEditField = null;
    
    // Handle edit icon clicks
    editIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            // Get the related input field
            const inputField = this.closest('.form-group').querySelector('input');
            
            // Disable any previously active field
            if (activeEditField && activeEditField !== inputField) {
                activeEditField.disabled = true;
                activeEditField.parentElement.classList.remove('editing');
            }
            
            // Toggle the disabled state
            inputField.disabled = !inputField.disabled;
            
            // Add visual feedback
            if (!inputField.disabled) {
                inputField.parentElement.classList.add('editing');
                inputField.focus();
                activeEditField = inputField;
            } else {
                inputField.parentElement.classList.remove('editing');
                activeEditField = null;
            }
        });
    });
    
    // Handle save button click
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            // Disable all input fields
            document.querySelectorAll('.form-section input').forEach(input => {
                input.disabled = true;
                input.parentElement.classList.remove('editing');
            });
            
            activeEditField = null;
            
            // You could add code here to save the data to a backend
            alert('Profile information saved!');
        });
    }
    
    // Form validation
    const loginForm = document.querySelector('form');
    const emailInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isValid = true;
            
            // Simple validation
            if (!emailInput.value.trim()) {
                showError(emailInput, 'Email or username is required');
                isValid = false;
            } else {
                removeError(emailInput);
            }
            
            if (!passwordInput.value.trim()) {
                showError(passwordInput, 'Password is required');
                isValid = false;
            } else {
                removeError(passwordInput);
            }
            
            if (isValid) {
                // For demo purposes - in production this would be an API call
                // alert('Login successful! This is a demo.');
                
                // Simulate login success - in production, redirect after successful API response
                window.location.href = 'home.html';
            }
        });
    }
    
    // Social login buttons
    const socialButtons = document.querySelectorAll('.btn-social');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            // In production, this would initiate OAuth flow with respective provider
            const provider = this.querySelector('img').alt.toLowerCase();
            alert(`${provider} login initiated. This is a demo.`);
        });
    });
    
    // Helper functions for form validation
    function showError(input, message) {
        const formGroup = input.parentElement;
        if (formGroup.querySelector('.invalid-feedback')) {
            formGroup.querySelector('.invalid-feedback').textContent = message;
        } else {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'invalid-feedback d-block';
            errorDiv.textContent = message;
            formGroup.appendChild(errorDiv);
        }
        input.classList.add('is-invalid');
    }
    
    function removeError(input) {
        const formGroup = input.parentElement;
        if (formGroup.querySelector('.invalid-feedback')) {
            formGroup.querySelector('.invalid-feedback').remove();
        }
        input.classList.remove('is-invalid');
    }
});
