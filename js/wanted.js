$('#btnWanted').click(function(){

    alert(book_details.bookName);

    var data = JSON.stringify(book_details);

    $.ajax({ 

        url: 'http://henchinshoodies.comuv.com/wanted.php',

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