document.addEventListener('DOMContentLoaded', function() {
            const contactButtons = document.querySelectorAll('.btn-contact');
            
            contactButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const agentName = this.closest('.agent-card').querySelector('.agent-name').textContent;
                    alert(`Contact form will open for ${agentName}`);
                    // In a real application, this would open a modal or redirect to a contact form
                });
                
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });