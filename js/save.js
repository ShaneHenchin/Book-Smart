 $('#btnSave').click(function(){
 	$.ajax({ 
		url: 'http://henchinshoodies.comuv.com/save.php',
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
    });

$('#searchBox').keyup(function(){
var textVal = $("#searchBox").val();
var data = {searchQuery: textVal};
$.ajax({ url: 'http://henchinshoodies.comuv.com/search2.php',
         dataType: "json",
         data: {searchQuery: textVal},
         type: 'post',
         success: function(output) {
            alert("success");
            /*alert(output);*/
                      $('#resultsDiv').html(output);
        },
        error: function (request, status, error) {
            alert('error');
           /* alert(error);*/
        }
});
});
