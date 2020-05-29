function startGame() {
    // document.getElementById("button").innerHTML = "Let's begin the quiz!";
    alert ("Welcome to the Wellness Quiz. \nAnswer the following questions as honestly as you can, analysing how you have been feeling over the last 2 weeks. ");
    var mood = window.prompt ("How is your mood? \n1. Always in a good mood \n2. Mostly happy, the odd bad day \n3. More good days than bad \n4. More bad days than good \n5. Always feel extremely low")
    console.log(mood)


     if (mood <= "5") {
        var sleep = window.prompt ("How well do you sleep? \n1. Always sleep well \n2. Have the odd bad night \n3. More good nights than bad \n4. Sleep badly most of the time \n5. Extremely sleep deprived")
        console.log(sleep)
    } if (sleep <= "5") {
        var anxious = prompt ("How anxious or on edge do you feel? \n1. Not anxious at all \n2. Rarely anxious \n3. Sometimes anxious \n4. Anxious most of the time \n5. Always extremely anxious")
         console.log(anxious)  
    } if (anxious <= "5") {
        var stress = prompt ("How stressed do you feel? \n1. Never stressed \n2. Rarely stressed \n3. Sometimes stressed \n4. Stressed most days \n5. Extreme feelings of stress all the time")
        console.log(stress)
    } if (stress <= "5") {
        var active = prompt ("How many days of the week are you active? \n 1. 5 or more times a week \n2. Four times a week \n3. 2-3 times a week \n4. Once a week \n5. I am not physically active")
        console.log(active) 
    } if (active <= "5")
        var score = alert ("Let us generate your wellness score");
    

    var mood = Number("mood", 10);
    console.log(typeof mood);
    var sleep = Number("sleep", 10);
    console.log(typeof sleep); 
    var anxious = Number("anxious", 10);
    console.log(typeof anxious);
    var stress = Number("stress", 10);
    console.log(typeof stress);
    var active = Number("active", 0);
    console.log(typeof active);

    document.write("My wellness score is...");

        function add(mood, sleep, anxious, stress, active) {
        let score = mood + sleep + anxious + stress + active
        return score
        console.log(score);
    }

    // function addNums(...nums){
    //     let res = nums.reduce((mood, ))
    // }

    // var wellnessScore = sum ("mood" + "sleep" + "anxious" + "stress" + "activity"
    // startGame = "mood" + "sleep" + "anxious" + "stress" + "activity"

    // alert (`Your wellness score is ${sumAnswer}`);

    // function sumAnswer (mood, sleep, anxious, stress, active){
    //     return mood + sleep + anxious + stress + active;
    // }

    // var sumInput = {
    //     mood: Number (),
    //     sleep: Number (),
    //     anxious: Number (),
    //     stress: Number (),
    //     Active: Number (),
    // }
    
    // var sumAnswer = sum(sumInput.mood, sumInput.sleep, sumInput.anxious, sumInput.stress, sumInput.active);
    // console.log(sumAnswer);
    // alert (`Your Wellnes score is ${sumAnswer}`);
   
    // document.write("My wellness score is


        // var sumAnswer = sum(sumInput.mood, sumInput.sleep, sumInput.anxious, sumInput.stress, sumInput.active);
        // console.log(sumAnswer);
        // alert (`Your wellness score is ${sumAnswer}`);
         // console.log("Your wellness score is " + "sumInput.mood" +  ")
  

// document.write("My wellness score is = ("mood" + "sleep" + "anxious" + "stress" + "activity");
    }
    