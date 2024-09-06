const tokenElement = document.getElementById("tokenElement")
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

if (getCookie("student_email") == "3019011@student.isf.edu.hk") {
    tokenElement.innerText = "Tokens: 1000"
} if (getCookie("student_email") == "eddie@thegruproject.com") {
    tokenElement.innerText = "Tokens: 500"
} else {

}