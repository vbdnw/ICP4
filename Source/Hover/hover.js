function upDate(previewPic) {
    /* In this function you should
       1) change the url for the background image of the div with the id = "image"
       to the source file of the preview image
       */

    let x = "url('" + $(previewPic).attr('src') + "')";
    $("#image").css('background-image', x);


       /*
       2) Change the text  of the div with the id = "image"
       to the alt text of the preview image
       */

    $("#image").text($(previewPic).attr('alt'));
}

function unDo() {
    /* In this function you should
   1) Update the url for the background image of the div with the id = "image"
   back to the original-image.  You can use the css code to see what that original URL was
   */

    $("#image").css('background-image', "none");

    /*
   2) Change the text  of the div with the id = "image"
   back to the original text.  You can use the html code to see what that original text was
   */

    $("#image").text("Hover over an image below.");
}
