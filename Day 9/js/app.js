const sounds = ["applause" ,"boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach(sound =>{
    const button = document.createElement('button');
    button.classList.add('btn');

    button.innerText = sound;

    

    button.addEventListener('click', ()=>{
        
        stopPlaying();

        document.getElementById(sound).play();
    })

    document.querySelector('.buttons').appendChild(button);
});

function stopPlaying(){

    sounds.forEach(sound =>{

        const audio = document.getElementById(sound);

        audio.pause()
        audio.currentTime = 0;
    })


}