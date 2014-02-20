 $('#searchBox').keyup(function(){

var textVal = $("#searchBox").val();    

var data = {searchQuery: textVal};     //linking the SQL query to the search box's input

//alert(textVal);

$.ajax({ url: 'http://henchinshoodies.comuv.com/search2.php',    //calling the hosted search php code

         dataType: "json",

         data: {searchQuery: textVal},   

         type: 'post',

         success: function(output) {

            //alert(output);

$('#resultsDiv').html("");
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