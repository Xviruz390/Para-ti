onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener('click', function() {
        var audio = new Audio('MP3_20240212.mp3');
        audio.loop = true;
        audio.play(); 
        document.removeEventListener('click', arguments.callee);
    });
    
