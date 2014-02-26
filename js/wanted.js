$('#btnWanted').click(function(){

    var bookName=wanted.bookName;

    alert(wanted.bookName);

    $.ajax({ 

        url: 'http://henchinshoodies.comuv.com/wanted.php',

         dataType: "json",

         data: {bookName:bookName},

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