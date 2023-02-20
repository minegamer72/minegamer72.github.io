/* small easter egg i thought was cool. CR stands for Code Red, explained later in the code. */

/* build the current date like legos because JS is too cool to not do this automatically */
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var main = document.getElementById("main").innerHTML;

/* concatenate month and day */
today = mm + '/' + dd;

/* if what was created is 7/15 or July 15th */
if(today === "07/15"){
        /* replace all website content with the HTML found in the code red virus (awesome video by danooct1 shows what it does: https://youtu.be/iu48QBJP_p0 ) */
        /* also adds a restore button to allow the user to go back to regularly scheduled bob. TODO: make a cookie that will stop this after the first time. */
        document.body.innerHTML = '<html><head><title>HELLO!</title></head><body><hr size=5><font color="red"><p align="center">Welcome to http://www.worm.com !<br><br>Hacked By Chinese!</font></hr></body><br><br><br><br><br><br><br><br><br><button onclick="restore()">Restore</button> </html>';
        /* function restore restores the page from the div variable named "main". it's fired when the button is clicked. */
        function restore(){
        document.body.innerHTML = main;
        }
}
