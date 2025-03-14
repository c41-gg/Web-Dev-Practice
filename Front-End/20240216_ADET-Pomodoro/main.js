(function () {

    /**
    * Declare vars	
    */
    const pomoBody = document.body;
    const workDurationInput = document.getElementById('work-duration');
    const restDurationInput = document.getElementById('rest-duration');
    const timerTime = document.getElementById('timer-time');
    const circleProgress = document.querySelector('.circle-progress');

    let workDuration = parseInt(workDurationInput.value) * 60;
    let restDuration = parseInt(restDurationInput.value) * 60;
    let remainingTime = workDuration;
    let isPaused = true;
    let isWorking = true;
    let intervalId;

    const completedSessionsElement = document.getElementById("completed-sessions");
    const totalMinutesElement = document.getElementById("total-minutes");
 
    let completedSessions = 0; //database entry here
    let totalMinutes = 0; //database entry here



 
    /** 
    *
    */
    window.addEventListener("load", () => {
       pomoBody.classList.add('page-loaded');
    }); 


    const startBtn = document.getElementById("start-btn");
    startBtn.addEventListener("click", () => {
        isPaused = false;

        pomoBody.classList.add('timer-running');

        if (isWorking) {
            pomoBody.classList.remove('timer-paused');
        }
        else {
            pomoBody.classList.add('rest-mode');
            pomoBody.classList.remove('timer-paused');
        }

        if (!intervalId) {
            intervalId = setInterval(updateTimer, 1000);
        }
    });

    const pauseBtn = document.getElementById("pause-btn");
        pauseBtn.addEventListener("click", () => {
        isPaused = true;

        pomoBody.classList.remove('timer-running');
        pomoBody.classList.add('timer-paused');

    });


    const btnToggleSettings = document.getElementById('toggle-settings');
    const btnCloseSettings = document.getElementById('close-settings');
    
    workDurationInput.addEventListener("change", () => {
        workDuration = parseInt(workDurationInput.value) * 60;
        if (isWorking) {
           remainingTime = workDuration;
           updateProgress();
        }
     });
     
     restDurationInput.addEventListener("change", () => {
        restDuration = parseInt(restDurationInput.value) * 60;
        if (!isWorking) {
           remainingTime = restDuration;
           updateProgress();
        }
    });


    function setBodySettings() {
        pomoBody.classList.contains('settings-active') ? pomoBody.classList.remove('settings-active') : pomoBody.classList.add('settings-active');
    }

    function toggleSettings() {
        if (event.type === 'click') {
            setBodySettings();
        }
        else if((event.type === 'keydown' && event.keyCode === 27)) {
            pomoBody.classList.remove('settings-active');
        }
    }

    btnToggleSettings.addEventListener('click', toggleSettings);
    btnCloseSettings.addEventListener('click', toggleSettings);
    document.addEventListener('keydown', toggleSettings);

    function updateTimer() {
        
        let playAlarm

        const workFinished = document.getElementById("workFinished");
        const restFinished = document.getElementById("restFinished");

        if (!isPaused) {
            remainingTime--;
            
     
            if (remainingTime <= 0) {
                isWorking = !isWorking;
                remainingTime = isWorking ? workDuration : restDuration;
                    
                if(!isWorking) {
                    pomoBody.classList.add('rest-mode');
                    pomoBody.classList.remove('timer-running');
                
                    completedSessions++;
                    completedSessionsElement.textContent = completedSessions;
                    totalMinutes = totalMinutes + (workDuration/60);
                    totalMinutesElement.textContent = totalMinutes;
                
                } 
                else {
                    pomoBody.classList.remove('rest-mode');
                    pomoBody.classList.remove('timer-running'); 
                } 

                playAlarm = isWorking ? restFinished : workFinished;
                playAlarm.play();
     
                isPaused = true;
                pomoBody.classList.remove('timer-work-active');
            }

            document.title = timerTime.textContent = formatTime(remainingTime);
            updateProgress();
            
     
            console.log(remainingTime);
     
        }
     }
    
    function updateProgress() {
        const radius = 45;
        const circumference = 2 * Math.PI * radius;
     
        const totalDuration = isWorking ? workDuration : restDuration;
        const dashOffset = circumference * remainingTime / totalDuration;
     
        circleProgress.style.strokeDashoffset = dashOffset;
        timerTime.textContent = formatTime(remainingTime);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
     }
     
     updateProgress();

 
 })();