const total = 1;
        let time = total*60;
        const cdelement = document.getElementById('countdown');

        setInterval(updatecd, 1000);

        function updatecd() {
            let minute = Math.floor(time/60);
            let second = time%60;
            if(time<=0)
            {
                document.getElementById('form1').submit();
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