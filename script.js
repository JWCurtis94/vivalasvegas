 $(document).ready(function () {
            $('a.nav-link').on('click', function (event) {
                if (this.hash !== "") {
                    event.preventDefault();
                    var hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function () {
                        window.location.hash = hash;
                    });
                }
            });
         });

         document.getElementById('newsletterForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (name && email) {
                document.getElementById('newsletterForm').style.display = 'none';
                document.getElementById('thankYouMessage').style.display = 'block';
            } else {
                alert('Please fill in all fields.');
            }
        });