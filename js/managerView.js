// $(function() {
//     $.ajax({
//         type: 'GET',
//         url: 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=1',
//         jsonpCallback: 'JSONCALLBACK', //specify callback name
//         contentType: 'application/json',
//         dataType: 'jsonp', //specify jsonp
//         success: function(response) {
//             var data = response.results;
//             for (var i=0; i<data.length; i++) {
//                 var row = "<tr>";
//
//                 row += "<td>";
//                 row += data[i].title;
//                 row += "</td>";
//                 row += "<td>";
//                 row += data[i].ingredients;
//                 row += "</td>";
//                 row += "<td><img src='" + data[i].thumbnail + "' title='" + data[i].title + "' /></td>";
//                 row += "</tr>";
//
//                 $('#output tbody').append(row);
//             }
//         },
//         error: function(e) {
//             console.log('error', e);
//         }
//     });
// });
//
// function applyleave(){
//     window.location.href = "leaveRequest.html";
// }
