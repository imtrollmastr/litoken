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

function getEmailFromJWT(token) {
    // Split the JWT into its three parts
    const parts = token.split('.');

    // Decode the payload (the second part) from base64url format
    const payload = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'));

    // Parse the payload into a JavaScript object
    const parsedPayload = JSON.parse(payload);

    // Access the 'email' field
    const email = parsedPayload.email;

    return email;
}

function handleCredentialResponse(response) {
    console.log("Credential: " + getCookie("LiTokens"))
    window.location.href="https://token.liquacious.org/"
}

if (getCookie("student_email") == "") {
    
} else {
    document.getElementById("googleWrapper").innerHTML = ""
}

if (getCookie("LiTokens") == "") {
    document.cookie = "LiTokens = 0"
} else {
    tokenElement.innerText = "Tokens: " + getCookie("LiTokens")
}