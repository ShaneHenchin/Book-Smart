 $('#btnSave').click(function(){
 	alert(book_details.title);
 	alert(book_details.authors);
 	alert(book_details.publisher);
 	$.ajax({ 
		url: 'http://booksmart.webege.com/save.php',
         dataType: "json",
         data: book_details,
         type: 'post',
         success: function(output) {
            alert("success");
         },
        error: function (request, status, error) {
            alert('error');
            alert(error);
        }
	});
    $.ajax({
        type: 'POST',
        url: 'http://booksmart.webege.com/save.php',
        dataType: "json",
        data: book_details,
        success: function (msg) {
            alert("success");
        },
        error: function (request, status, error) {
            alert('error');
            alert(error);
        }
    });
 });

 $('#searchBox').keyup(function(){
var textVal = $("#searchBox").val();
//alert(textVal);
$.ajax({ url: 'http://booksmart.webege.com/search.php',
         dataType: "json",
         data: {searchQuery: textVal},
         type: 'post',
         success: function(output) {
            alert(output);
                      $('#resultsDiv').html(output);
                  },
        error: function (request, status, error) {
            alert('error');
            alert(error);
        }
});
});
