$('#btnSave').click(function(){

    alert(book_details.title);

    alert(book_details.authors);

    alert(book_details.publisher);

    var data = JSON.stringify(book_details);

    $.ajax({ url: 'http://henchinshoodies.comuv.com/save.php',

         dataType: "json",

         data: {searchQuery: textVal},

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
