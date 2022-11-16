let darkmode = true;

function toggle_darkmode()
{
    var btn = document.getElementById("darkmode-btn");
    if(darkmode === true)
    {
        darkmode = false;
        btn.innerHTML = "darkmode(off)";
    } else
    {
        darkmode = true;
        btn.innerHTML = "darkmode(on)";
    }
}