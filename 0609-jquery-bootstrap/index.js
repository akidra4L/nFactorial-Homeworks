$('document').ready(function() {
    $('#story-btn').on('click', function() {
        let name = $('#person-name').val();
        let character = $('#character').val();
        let verb = $('#verb').val();
        let adjective = $('#adjective').val();
        if(!!name && !!character && !!verb && !!adjective){
            $('#output').html('Once ' + name + ' came to nFactorial Incubator, and noticed that Murat was ' + character + '. This very minute, ' + name + ' was ' + verb + ' because Dalida learned HTML/CSS and was ' + adjective + '.');
        } else {
            $('#output').html('Please fill in the blanks at the top!!!');
        }
    })
})