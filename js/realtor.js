document.addEventListener('DOMContentLoaded', function() {
            // Toggle brokerage field visibility
            const brokerageCheckbox = document.getElementById('brokerageAffiliation');
            const brokerageSection = document.getElementById('brokerageSection');
            
            brokerageCheckbox.addEventListener('change', function() {
                brokerageSection.style.display = this.checked ? 'block' : 'none';
            });
            
            // Form validation and submission
            const form = document.getElementById('realtorApplicationForm');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic validation
                let isValid = true;
                const requiredFields = form.querySelectorAll('[required]');
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.classList.add('is-invalid');
                    } else {
                        field.classList.remove('is-invalid');
                    }
                });
                
                if (isValid) {
                    // Show success message (in a real application, this would submit to a server)
                    alert('Application submitted successfully! We will review your information and get back to you soon.');
                    form.reset();
                    brokerageSection.style.display = 'none';
                } else {
                    alert('Please fill in all required fields.');
                }
            });
            
            // Add input validation styling
            const inputs = form.querySelectorAll('input, select');
            inputs.forEach(input => {
                input.addEventListener('input', function() {
                    if (this.value.trim()) {
                        this.classList.remove('is-invalid');
                    }
                });
            });
        });