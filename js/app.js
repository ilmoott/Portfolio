;(function(){

    let projects, projectsArray;

    projects = document.getElementsByClassName('project');
    projectsArray = Array.from(projects);
        //Array.from is used to convert an Html collection to an array



    window.sr = ScrollReveal();
    projectsArray.forEach(function(e){
        sr.reveal(e,{duration: 1500})
    });


})();

