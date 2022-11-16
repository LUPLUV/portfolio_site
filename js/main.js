let darkmode = true;
let menu_open = false;

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

function toggle_menu()
{
    const nav_items_links = document.querySelector("#nav-items-links");
    if(menu_open === false)
    {
        menu_open = true;
        console.log("Menu open");
        nav_items_links.classList.add('nav-items-links-menu');
    } else
    {
        menu_open = false;
        console.log("Menu close");
        nav_items_links.classList.remove('nav-items-links-menu');
    }
}