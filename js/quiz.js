const total = 1;
        let time = total*60;
        const cdelement = document.getElementById('countdown');

        setInterval(updatecd, 1000);

        function updatecd() {
            let minute = Math.floor(time/60);
            let second = time%60;
            if(time<=0)
            {
                getScore(document.forms[0]);
            }
            else{
                if(minute<10)
                {
                    minute="0"+minute;
                }
                if(second<10)
                {
                    second="0"+second;
                }
                cdelement.innerHTML= minute + ":" +second;
            }
            time--;

        }

        var numQues = 5;
    
        var numChoi = 3;
        
        var answers = new Array(5);

        var scores=   document.getElementById('mark');
        
        answers[0] = "Narendra Modi";
        
        answers[1] = "Ramnath kovind";
        
        answers[2] = "Ashok Gehlot";
        
        answers[3] = "delhi";
        
        answers[4] = "jaipur";
    
        
        function getScore(form) {

                
        
                var score = 0;
                
                var curr;
                
                var option;
                
                for (i=0; i<numQues; i++) {
                
                curr = i*numChoi;
                
                answered=false;
                
                for (j=0; j<numChoi; j++) {
                
                option = form.elements[curr + j];
                
                if (option.checked) {
                
                answered=true;
                
                if (option.value == answers[i]) {
                
                score++;
                
                break;
                
                }
                
                }
                
                }
                
                }
                
                
    
                scores.innerHTML=`Your score is ${score} out of 5`;
                return false;
                
                
                }