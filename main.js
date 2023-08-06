function openStep(evt, stepName)
{
    //variables
    var i, tabcontent, tablinks;

    //Get all elements by class "tabconent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i< tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    // Get all tablink elements and remove "active"
    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("active","");
    }

    // Show the current tab
    document.getElementById(stepName).style.display = "block";
    evt.currentTarget.className += " active";
}