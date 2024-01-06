
document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelectorAll('.item');
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            let content = this.nextElementSibling;
            content.classList.toggle('show');
            this.classList.toggle('active');
        });
    });
});