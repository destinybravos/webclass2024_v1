<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Blog</title>
    <link rel="stylesheet" href="css/app.css">
    <script src="js/app.js"></script>
</head>
<body>

    <form name="frmLogin" id="frmLogin" class="mx-auto max-w-sm mt-10" method="post">
        <div class="">
            <input type="text" name="uname" id="uname" class="border border-slate-500 rounded-md outline-none ring-0 px-2 py-1">
        </div>
        <div class="mt-4">
            <input type="password" name="pass" id="pass" class="border border-slate-500 rounded-md outline-none ring-0 px-2 py-1">
        </div>
        <div class="mt-4">
            <button class="py-1 px-3 bg-slate-800 text-white rounded-lg">
                Login
            </button>
        </div>
    </form>
    




    <script>
        let baseUrl = 'http://localhost/webclass2024_v1/js_class/Module3/sample';


        axios.get(`${baseUrl}/api/users/fetch_all.php`)
        .then((res) => {
            console.log(res.data);
        })

        document.forms['frmLogin'].addEventListener('submit', (ev) => {
            ev.preventDefault();
            let username = document.forms['frmLogin']['uname'].value;
            let password = document.forms['frmLogin']['pass'].value;

            // Create a JavaScript FormData object
            let formData = new FormData();
                formData.append('username', username);
                formData.append('password', password);

            // SYNTAX axios.method(url, [[data], option])
            axios.post(`${baseUrl}/api/users/store.php`, formData)
            .then((res) => {
                // console.log(res.data);
            })
            .catch((abc) => {
                console.log(abc.response.statusText);
            })


        });
    </script>
</body>
</html>