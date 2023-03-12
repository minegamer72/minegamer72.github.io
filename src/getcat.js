$(document).ready(function() {
    // Make a request to the API to get a list of 3 random cat images
    $.get('https://api.thecatapi.com/v1/images/search?limit=3', function(data) {
        // Loop through the first 3 images and add them to the page
        $.each(data.slice(0, 1), function(index, image) { // this could be different but i'm referencing previous code and i'm lazy soooo
            const imgtag = '<img src="' + image.url + '" '
            const imgtag2 = 'alt="Theres supposed to be a cat here." class="cat">'
            const ctag = imgtag + imgtag2 // ctag means completed tag, because i was having user-error issues
            $('#cat-images').append(ctag);            
        });
    });
});