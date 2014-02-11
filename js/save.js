 $('#btnSave').click(function(){
 	alert('About to call AJAX');
        $.ajax({
            type: 'POST',
            url: 'http://booksmart.webege.com/save.php',
            dataType: "json",
            data: book_details,
            success: function (msg) {
                alert("success");
            },
            error: function (request, status, error) {
                alert(error);
            }
        });
 });