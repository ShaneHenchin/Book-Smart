$('#btnSave').click(function(){

    var title=book_details.title;
    var authors=book_details.authors;
    var publisher=book_details.publisher;
    var textSnippet=book_details.textSnippet;

    alert(title);

     $.ajax({ url: 'http://henchinshoodies.comuv.com/save.php',

         dataType: "json",

         data: {title:title, authors:authors, publisher:publisher, textSnippet:textSnippet},

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
