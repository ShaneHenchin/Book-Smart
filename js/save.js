 $('#btnSave').click(function(){

    //alert(book_details.title);

    //alert(book_details.authors);

    //alert(book_details.publisher);

    //var data = JSON.stringify(book_details);

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

//alert(textVal);

$.ajax({ url: 'http://henchinshoodies.comuv.com/search2.php',

         dataType: "json",

         data: {searchQuery: textVal},

         type: 'post',

         success: function(output) {

            //alert(output);

for(i=0; i<output.length; i++) {
//alert(output[i].title);
$('#resultsDiv').append(output[i].title+'<br>');
}                      

                  },

        error: function (request, status, error) {

            alert('error');

            alert(error);

        }

});

});
