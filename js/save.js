 $('#btnSave').click(function(){
 	alert(book_details.title);
 	alert(book_details.authors);
 	alert(book_details.publisher);
    var data = JSON.stringify(book_details);
 	$.ajax({ 
		url: 'http://booksmart.webege.com/save.php',
         dataType: "json",
         data: data,
         type: 'post',
         success: function(output) {
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
var data = JSON.stringify({searchQuery: textVal});
//alert(textVal);
$.ajax({ url: 'http://booksmart.webege.com/search.php',
         dataType: "json",
         data: data,
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
