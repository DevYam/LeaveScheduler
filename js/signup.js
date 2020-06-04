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
            "name": name,
            "email": email,
            "role": role,
            "password": psw
        }
    // console.log(jsonObject);
        // console.log(jsonObject);
        // //TODO Pass this jsonObject to the ajax call

        // const dummyData = {
        //     "name": "test",
        //     "salary": "123",
        //     "age": "23"
        // };

        const jsonString = JSON.stringify(jsonObject);
        // console.log(jsonString);
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                // alert(xhr.responseText);
                // console.log(xhr.responseText);
                var datatext = xhr.responseText;
                var jsonResponse = JSON.parse(datatext);
                // console.log("Your id is "+jsonResponse.id);
                alert("Registration Successful! Your id is "+jsonResponse.id );
            }
        }
        xhr.open("POST", "https://6331819ebeb5.ngrok.io/register");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin",'*');
        xhr.send(jsonString);


    }


});

