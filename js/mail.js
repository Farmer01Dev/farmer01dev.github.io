function sendEmail() {
    var subject = document.getElementById("subject").value.trim();
    var text = document.getElementById("theText").value.trim();
    
    if (subject.length < 1) {
        alert("You do not have a subject!");
        return false;
    } else if (text.length < 1) {
        alert("You have not written anything!");
        return false;
    }
    
    var link = "mailto:soccer_dude2001@hotmail.com" 
            + "?cc="
            + "&subject=" + escape(document.getElementById("subject").value)
            + "&body=" + escape(document.getElementById("theText").value);
    window.location.href = link;
}