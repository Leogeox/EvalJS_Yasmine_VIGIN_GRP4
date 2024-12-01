var button = document.getElementById ('button');

var body = document.getElementById ('body');

button.addEventListener('click', function(){
    body.classList.toggle('darkmode')
});


var tabs = document.querySelectorAll('.tab');

var divs = document.querySelectorAll('.content');



tabs.forEach((tab) => {
    tab.addEventListener('click', function(){
        tabs.forEach((tab) => {
            tab.classList.remove("tab_active")}) 
        this.classList.add('tab_active')
        divs.forEach((div) => {
            div.classList.remove('active')
            div.classList.add('content');
        })
        
        if(this.classList.contains('tab_1')) {
            divs[0].classList.add('active');
            divs[0].classList.remove('content')
            
        } 
        else if (this.classList.contains('tab_2')) {
            divs[1].classList.add('active');
            divs[1].classList.remove('content')
            
        } 
        else if (this.classList.contains('tab_3')) {
            divs[2].classList.add('active');
            divs[2].classList.remove('content')
            
        }
    })
})










