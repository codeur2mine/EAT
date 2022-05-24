

    let aside = document.querySelector('aside');
    let icon = aside.querySelector('.menu-icon');
    let li = aside.getElementsByClassName('nav-item');

    icon.onclick = ()=>{
        aside.classList.toggle('expand');
    }

    for(let i of li){
        i.onclick = activeLi;
    }
    function activeLi(){
        const List = Array.from(li);
        List.forEach(e=>e.classList.remove('nav-item'));
        this.classList.add('nav-item')
    }