
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.getElementById("submitBtn").addEventListener('click', onSubmitClick);

    function onSubmitClick() {
        // alert("hi");
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var role = document.getElementById("role").value;
        var psw = document.getElementById("psw").value;

        var jsonObject = {
            "name" : name,
            "emal": email,
            "role" : role,
            "pasword" : psw
        }

        console.log(jsonObject);
        //TODO Pass this jsonObject to the ajax call

        const dummyData = {
            "name":"test",
            "salary":"123",
            "age":"23"
        };

        const jsonString = JSON.stringify(dummyData);
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                alert(xhr.responseText);
            }
        }
        xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(jsonString);






    }


});

