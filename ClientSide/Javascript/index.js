
function GotoPage(Page)
{
    
    let Project = document.getElementById("Project");
    let Blog = document.getElementById("Blog");
    
    if (Project && Blog != null)
    {
        if (Page == "Home")
        {
            Project.style.display = "block";
            Blog.style.display = "none";
        }
        if (Page == "Blog")
        {
            Project.style.display = "none";
            Blog.style.display = "block";
        }
    }
}