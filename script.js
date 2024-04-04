
        var images = [
            "img1.jpg",
            "img2.jpg",
            "img3.jpg"
            // edhr images daal dena
        ];

        document.getElementById("registrationForm").addEventListener("submit", function(event) {
            event.preventDefault(); 

            var randomIndex1 = Math.floor(Math.random() * images.length);
            var randomIndex2 = Math.floor(Math.random() * images.length);
            var selectedImage1 = images[randomIndex1];
            var selectedImage2 = images[randomIndex2];
            window.location.href = "nextPage.html?submitted=true&image1=" + encodeURIComponent(selectedImage1) + "&image2=" + encodeURIComponent(selectedImage2);
        });
