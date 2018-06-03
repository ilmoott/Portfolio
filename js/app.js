;(function(){

    let projects, projectsArray, name, logo;

    projects = document.getElementsByClassName('project');
    projectsArray = Array.from(projects);
        //Array.from is used to convert an Html collection to an array



    window.sr = ScrollReveal();
    projectsArray.forEach(function(e){
        sr.reveal(e,{duration: 1500})
    });

    let removeName = function (){

        logo = document.getElementById('logo');
        name = document.getElementById('name');
        logo.addEventListener('click',function(){
            logo.style.display = 'none';
            name.style.display = 'block';
        })
    }
    
    removeName();

})();


