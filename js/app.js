;(function(){

    let projects, projectsArray, name, logo, title;

    projects = document.getElementsByClassName('project');
    projectsArray = Array.from(projects);
        //Array.from is used to convert an Html collection to an array



    window.sr = ScrollReveal();
    projectsArray.forEach(function(e){
        sr.reveal(e,{duration: 1500})
    });

 

    logo = document.getElementById('logo');
    name = document.getElementById('name');
    title = document.querySelectorAll('.project__title');

    title.forEach((e)=>{
        e.addEventListener('mouseover',function(){
            for(let i = 0; i< e.textContent.length; i++){
                e.textContent[i].offsetTop = '-2px';
            }
        });
    })

    let opacity = 1;
    
    setTimeout(() => {
        name.style.opacity = 0;        
    }, 4100);

    //function to show name slowly
    
    let animateTitle = function(){

    }
    
    //removeName();
    //This animation is still in the planning stage

    var test = document.querySelector('#logo');
    test.parentNode.style.position = 'relative';
    test.style.perspective = '50px';

    var counter = 0;

    var move = function (){
        
        test.style.transform = `rotateX(${counter}deg) rotate(${counter}deg)`;
        counter+=1;
    };

    // var oneTest = setInterval(move,30);




})();