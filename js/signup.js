window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.getElementById("submitBtn").addEventListener('click', onSubmitClick);
    document.getElementById("loginBtn").addEventListener('click', onLoginBtnClick);

    function onSubmitClick() {

        // alert("hi");
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var role = document.getElementById("role").value;
        var psw = document.getElementById("psw").value;

        var jsonObject = {
            "firstName": name,
            "username": email,
            "lastName": role,
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
                alert("Registration Successful! with response  "+jsonResponse.status );
            }
        }
        xhr.open("POST", "https://6331819ebeb5.ngrok.io/users/signup");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin",'*');
        xhr.send(jsonString);


    }

    function onLoginBtnClick() {
        // var name = document.getElementById("name").value;
        // var email = document.getElementById("email").value;
        var uname = document.getElementById("uname").value;
        var psw = document.getElementById("pswd").value;

        var jsonObject = {
            // "firstName": name,
            "username": uname,
            // "lastName": role,
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
                var status = jsonResponse.status;
                if (status == 200){
                    window.location.href = "loginSuccess.html";
                }
                else
                    alert("Wrong Credentials")
            }
        }
        xhr.open("POST", "https://6331819ebeb5.ngrok.io/users/login");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin",'*');
        xhr.send(jsonString);


    }


});

