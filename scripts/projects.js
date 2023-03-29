function showProject(name) {
    let projectDcElement = document.getElementById(name);
    if(projectDcElement.style.display === "none") { projectDcElement.style.display = "block"; }
    else { projectDcElement.style.display = "none"; }
}
