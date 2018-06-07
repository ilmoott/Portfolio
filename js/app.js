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
    
    // removeName();
    //This animation is still in the planning stage

    var test = document.querySelector('#logo');
    test.parentNode.style.position = 'relative';
    test.style.perspective = '50px';

    var counter = 0;

    var move = function (){
        
        test.style.transform = `rotateX(${counter}deg) rotate(${counter}deg)`;
        counter+=1;
    };

    var oneTest = setInterval(move,30);

})();