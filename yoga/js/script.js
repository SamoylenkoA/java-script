window.addEventListener('DOMContentLoaded', function() {

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
        
    function hideTabContent(a){
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for( let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadline = "2019-09-05";

    function getTimeRemaining(endtime) {
        let option = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((option/1000) % 60),
            minutes = Math.floor((option/1000/60) % 60),
            hours = Math.floor((option/(1000*60*60)));

            return {
                'total': option,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            }
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
    
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let options = getTimeRemaining(endtime);
            hours.textContent = options.hours;
            minutes.textContent = options.minutes;
            seconds.textContent = options.seconds;
            if(options.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timer',deadline);
});