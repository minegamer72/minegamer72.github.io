        /* small easter egg */
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var main = document.getElementById("main").innerHTML;

        today = mm + '/' + dd;

        if(today === "07/15"){
            document.body.innerHTML = '<html><head><title>HELLO!</title></head><body><hr size=5><font color="red"><p align="center">Welcome to http://www.worm.com !<br><br>Hacked By Chinese!</font></hr></body><br><br><br><br><br><br><br><br><br><button onclick="restore()">Restore</button> </html>';

        function restore(){
        document.body.innerHTML = main;
        }
    }
