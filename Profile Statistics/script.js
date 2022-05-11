const counterEl = document.querySelectorAll(".counter");

counterEl.forEach((counterEl) => {
    counterEl.innerText = "0"; //now its string

    incrementCounter();
    function incrementCounter(){
        let currentNum = +counterEl.innerText;//converting string to integer
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increment = dataCeil/10;
        currentNum = Math.ceil(currentNum+increment);

        if(currentNum < dataCeil){
            counterEl.innerText = currentNum;
            setTimeout(incrementCounter,50);
        }
        else{
            counterEl.innerText = dataCeil;
        }
    }
});