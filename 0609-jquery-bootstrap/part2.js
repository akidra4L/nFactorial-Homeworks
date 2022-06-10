$('document').ready(function() {
    $('#calculate-btn').on('click', function() {
        let w = $('#image-width').val();
        let h = $('#image-height').val();
        let clrs = $('#colors').val();

        let ans = $('#image-width').val() * $('#image-height').val() * $('#colors').val() / 8 / 1024;
        if(ans < 64){
            $('#output').html('File is ' + ans + 'KB which is ok');
        } else {
            $('#output').html('Please fill in the blanks at the top!!!');
        }

        // if(w.isNumeric() && h.isNumeric() && clrs.isNumeric()){
        //     let ans = $('#image-width').val() * $('#image-height').val() * $('#colors').val() / 8 / 1024;
        //     $('#output').html('File is ' + ans + 'KB which is ok');
        // } else {
        //     $('#output').html('Please fill in the blanks at the top!!!');
        // }
    })
})