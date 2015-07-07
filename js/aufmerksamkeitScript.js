/* 
 * This script contains the interaction logic of the Task: Aufmerksamkeit
 */


// alertness variables
var trialsToAchieve = 5;
var trialsToAchieveSubtask2 = 6;
var trialsToAchieveSubtask3 = 6;
var trialsShownSubtask1 = 0;
var trialsShownSubtask2 = 0;
var trialsShownSubtask3 = 0;
var executionsToAchieve = 50;
var executionsToAchieveSubtask2 = 73;
var executionsToAchieveSubtask3 = 62;
var executionsShown = 0;
var executionsShownSubtask2 = 0;
var executionsShownSubtask3 = 0;
var reactionExecuted = false;
var reactionExecutedSubtask2 = false;
var reactionExecutedSubtask3 = false;
var trialAlreadyShownSubtask1 = false;
var trialAlreadyShownSubtask2 = false;
var trialAlreadyShownSubtask3 = false;
var failedReactions = 0;
var trialExecutionsCount = 0;
var trialExecutionsCount2 = 0;
var trialExecutionsCount3 = 0;
var crossShowDurations = new Array(3000, 3100, 2900, 2800, 2900, 2700, 2900, 3000, 2900, 2800, 2900, 2700, 2900, 2800, 3000, 2900, 2800, 3100, 2900, 3000, 2900, 2700, 2900, 2800, 3000, 2900, 2800, 3000, 2900, 3100, 2900, 2800, 2700, 2900, 3000, 2900, 3000, 2800, 2900, 3100, 2900, 2800, 2900, 3000, 2900, 2700, 2800, 3000, 3100, 2900);
var crossShowDurationsPointer = 0;
var crossShowDurationsSubtask2 = new Array(3400, 3300, 2500, 3200, 2700, 3500, 3000, 3400, 3100, 2900, 3300, 2800, 2600, 2500, 3000, 3200, 2700, 3500, 3000, 3400, 2800, 3100, 2900, 2600, 3400, 2700, 3000, 3300, 3200, 2900, 2500, 2800, 2600, 3500, 3000, 3300, 2700, 3100, 3200, 3400, 2900, 2500, 2800, 2600, 3500, 3200, 2800, 3100, 2900, 3000, 2600, 3400, 2500, 3500, 2900, 3200, 2600, 3100, 2700, 2800, 3100, 3300, 3000, 3500, 2900, 3400, 2700, 3200, 2500, 2800, 3100, 3300, 2600);
var crossShowDurationsPointerSubtask2 = 0;
var crossShowDurationsSubtask3 = new Array(3000, 3500, 2900, 2700, 2500, 3100, 3300, 3500, 3000, 2500, 3500, 3100, 2700, 3300, 2900, 3000, 2700, 3300, 2500, 2900, 3100, 3000, 2700, 3300, 2500, 3100, 2900, 3500, 2700, 3300, 3100, 3500, 3000, 2500, 2900, 3500, 2700, 2900, 2500, 3100, 3300, 3500, 2900, 3100, 2700, 3000, 3300, 2500, 3500, 2700, 2900, 3000, 2500, 3100, 3300, 3500, 2900, 3000, 2700, 3100, 3300, 2500);
var crossShowDurationsPointerSubtask3 = 0;

// time value variables
var switchToCirclePageTimerTrial;
var switchToCrossPageTimerTrial;
var switchToCirclePageTimer;
var switchToCrossPageTimer;

var switchToCirclePageTimerTrialSubtask2;
var switchToCrossPageTimerTrialSubtask2;
var switchToCirclePageTimerSubtask2;
var switchToCrossPageTimerSubtask2;

var switchToCirclePageTimerTrialSubtask3;
var switchToCrossPageTimerTrialSubtask3;
var switchToCirclePageTimerSubtask3;
var switchToCrossPageTimerSubtask3;

var hostingRectangleColorsTrial = new Array("blue", "green", "green", "red", "green", "yellow");
var selectiveKreisColorsTrial = new Array("red", "blue", "yellow", "yellow", "yellow", "red");
var hostingRectangleColorsPointerTrial = 0;
var selectiveKreisColorsPointerTrial = 0;
var targetStimulationsCount = 0;
var targetStimulationsToAchieve = 2;

// contains a 73 color strings
var hostingRectangleColors = new Array("yellow", "blue", "green", "red", "green", "green", "yellow", "green", "blue", "green", "red", "green", "yellow", "green", "blue", "red", "green", "green", "red", "blue", "green", "yellow", "green", "green", "red", "green", "green", "blue", "green", "yellow", "green", "yellow", "green", "red", "green", "blue", "yellow", "green", "green", "green", "blue", "blue", "green", "green", "yellow", "red", "green", "red", "green", "green", "yellow", "blue", "green", "yellow", "green", "red", "green", "blue", "green", "red", "green", "green", "yellow", "green", "blue", "red", "green", "green", "blue", "green", "yellow", "red", "green");
var selectiveKreisColors = new Array("red", "green", "yellow", "blue", "yellow", "blue", "green", "yellow", "yellow", "red", "yellow", "yellow", "blue", "yellow", "red", "yellow", "blue", "yellow", "green", "yellow", "yellow", "green", "yellow", "red", "green", "yellow", "red", "yellow", "yellow", "red", "yellow", "blue", "blue", "yellow", "yellow", "green", "green", "yellow", "red", "yellow", "red", "yellow", "blue", "yellow", "green", "yellow", "yellow", "blue", "yellow", "blue", "green", "yellow", "yellow", "blue", "yellow", "yellow", "red", "green", "yellow", "blue", "blue", "yellow", "red", "yellow", "yellow", "green", "red", "yellow", "red", "yellow", "green", "yellow", "yellow");
var hostingRectangleColorsPointer = 0;
var selectiveKreisColorsPointer = 0;

var shapeTypesTrial = new Array("kreis", "square", "triangle", "star", "triangle", "triangle");
var shapeColorsTrial = new Array("green", "yellow", "red", "blue", "red", "green");
var shapeTypesPointerTrial = 0;
var shapeColorsPointerTrial = 0;
var targetStimulationsCount2 = 0;
var targetStimulationsToAchieve2 = 1;

var shapeTypes = new Array("square", "triangle", "kreis", "triangle", "triangle", "square", "triangle", "triangle", "star", "triangle", "star", "triangle", "triangle", "square", "triangle", "square", "kreis", "triangle", "kreis", "triangle", "star", "triangle", "square", "kreis", "triangle", "kreis", "triangle", "square", "triangle", "kreis", "square", "triangle", "triangle", "kreis", "triangle", "triangle", "star", "star", "star", "triangle", "triangle", "star", "triangle", "star", "triangle", "kreis", "triangle", "triangle", "square", "triangle", "kreis", "triangle", "triangle", "square", "star", "triangle", "kreis", "triangle", "star", "triangle", "square", "triangle");
var shapeColors = new Array("blue", "red", "yellow", "red", "yellow", "red", "green", "red", "green", "red", "red", "green", "blue", "red", "red", "yelllow", "green", "red", "red", "red", "blue", "red", "yellow", "red", "red", "green", "red", "red", "blue", "red", "green", "yellow", "red", "blue", "red", "green", "yellow", "red", "blue", "red", "blue", "red", "red", "yelllow", "red", "red", "yellow", "green", "blue", "red", "blue", "red", "yellow", "red", "green", "red", "yellow", "red", "red", "blue", "green", "red");
var shapeTypesPointer = 0;
var shapeColorsPointer = 0;





// slides to alertness demo page start
function goToAlertnessDemo() {

    try
    {
        $.mobile.changePage('#aufmerksamkeitDemo1', {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// shows hint page and then the given next page as param
function showHintPage(hintPage, nextPage) {

    try
    {
        // show hint page
        $.mobile.changePage('#' + hintPage, {transition: "flip"});


        if (nextPage !== 'null') {
            // then show next page 
            setTimeout(function () {
                $.mobile.changePage('#' + nextPage, {transition: "none"});
            }, 3000);
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}



// makes a div blinking
function blink(divId, count) {

    try
    {

        // change bgd
        $('#' + divId).css("background", "red");

        setTimeout(function () {

            for (var i = 0; i < count; i++) {

                $('#' + divId).fadeTo(200, 0.1).fadeTo(200, 1.0);

            }


        }, 500);

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}



// slides to selektive aufmerksamkeit demo page start
function goToSelectiveAttentionDemo() {

    try
    {
        $.mobile.changePage('#selectiveAttentionDemo1', {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// slides to geteilte aufmerksamkeit demo page start
function goToSeparatedAttentionDemo() {

    try
    {
        $.mobile.changePage('#separatedAttentionDemo1', {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// shows countdown page
function showCountDownSubtask1() {

    try
    {
//        var pageID = $.mobile.activePage.attr('id');
//        if (pageID === "startTaskAlertness") {
//
//            trialAlreadyShownSubtask1 = true;
//        }

        // reset counter of failed reactions
        if (failedReactions > 0)
            failedReactions = 0;
        // reset counter of trails shown
        if (trialsShownSubtask1 > 0)
            trialsShownSubtask1 = 0;

        $.mobile.changePage('#countdownPage', {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}



// shows countdown page
function showCountDownSubtask2() {

    try
    {
//        var pageID = $.mobile.activePage.attr('id');
//        if (pageID === "startTaskSelectiveAttention") {
//
//            trialAlreadyShownSubtask2 = true;
//        }


        // reset counter of trails shown
        if (trialsShownSubtask2 > 0)
            trialsShownSubtask2 = 0;

        $.mobile.changePage('#countdownPage2', {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// shows countdown page
function showCountDownSubtask3() {

    try
    {
        var pageID = $.mobile.activePage.attr('id');
        if (pageID === "startTaskSeparatedAttention") {

            trialAlreadyShownSubtask3 = true;
        }


        // reset counter of trails shown
        if (trialsShownSubtask3 > 0)
            trialsShownSubtask3 = 0;

        $.mobile.changePage('#countdownPage3', {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// shows next trial page (cross page)
function showNextTrial() {

    try
    {


        setTimeout(function () {
            
            
            
            // if more trials should be shown
            if (trialsShownSubtask1 < trialsToAchieve) {

                $.mobile.changePage('#trialPageCross', {transition: "none"});
                // set flag
                reactionExecuted = true;
                // reset failed reactions number
//                failedReactions = 0;
            }
            // if max. number of trials is reached
            else {
                // if user didn't successively reacted twice 
                if (failedReactions > 1 && trialExecutionsCount < 3) {
                    // increment counter
                    trialExecutionsCount++;
                    // go to hint page
                    $.mobile.changePage('#hintPageTrial', {transition: "flip"});
                }

                else {

                    trialAlreadyShownSubtask1 = true;

                    $.mobile.changePage('#startTaskAlertness', {transition: "flip"});
                }
            }

        }, 100);

    }

    catch (error) {

        console.log("An error has been occured! " + error);
    }
}


// shows next trial page (cross page)
function showNextTrialSubtask2() {

// don't switch to next trial page after clicking! This method will only register the reaction!
    try
    {
        setTimeout(function () {
            
            // check if it was a target stimulus
            var bgdColor = $("#hostingRectangleIdTrial").css('background-color');
            var fgdColor = $("#selectiveKreisIdTrial").css('background-color');
            // if yellow circle on green rectangle
            if(bgdColor === "rgb(0, 128, 0)" && fgdColor === "rgb(255, 255, 0)")
               targetStimulationsCount++; 
           
            // if more trials should be shown
            if (trialsShownSubtask2 < trialsToAchieveSubtask2) {

                $.mobile.changePage('#trialPageCrossSubtask2', {transition: "none"});
                // set flag
                reactionExecutedSubtask2 = true;

            }
            // if max. number of trials is reached
            else {

                // if user didn't successively reacted twice 
                if ((failedReactions > 1 || targetStimulationsCount < targetStimulationsToAchieve) && trialExecutionsCount2 < 1) {
                    // increment counter
                    trialExecutionsCount2++;
                    failedReactions = 0;
                    targetStimulationsCount = 0;
                    // reset pointers
                    hostingRectangleColorsPointerTrial = 0;
                    selectiveKreisColorsPointerTrial = 0;
                    // go to hint page
                    $.mobile.changePage('#hintPageTrial2', {transition: "flip"});
                }

                else {

                    trialAlreadyShownSubtask2 = true;
                    $.mobile.changePage('#startTaskSelectiveAttention', {transition: "flip"});

                }

            }

        }, 100);

    }

    catch (error) {

        console.log("An error has been occured! " + error);
    }
}


// shows next trial page (cross page)
function showNextSubtask2() {

// don't switch to next trial page after clicking! This method will only register the reaction!
    try
    {
        setTimeout(function () {
            // if more executions should be shown
            if (executionsShownSubtask2 < executionsToAchieveSubtask2) {

                $.mobile.changePage('#pageCrossSubtask2', {transition: "none"});
                // set flag
                reactionExecutedSubtask2 = true;

            }
            // if max. number of executions is reached
            else {

                $.mobile.changePage('#separatedAttentionStart', {transition: "flip"});

            }

        }, 100);

    }

    catch (error) {

        console.log("An error has been occured! " + error);
    }
}


// shows next trial page (cross page)
function showNextTrialSubtask3() {

// don't switch to next trial page after clicking! This method will only register the reaction!
    try
    {
        setTimeout(function () {
            
            // check for right stimulus
            var shapeType = $("#shapeIdTrial").attr('class');
            var shapeColor = $("#shapeIdTrial").css('border-bottom');
            if(shapeType === "triangle" && shapeColor === "200px solid rgb(255, 0, 0)")
                targetStimulationsCount2++;
            
            // if more trials should be shown
            if (trialsShownSubtask3 < trialsToAchieveSubtask3) {

                $.mobile.changePage('#trialPageCrossSubtask3', {transition: "none"});
                // set flag
                reactionExecutedSubtask3 = true;

            }
            // if max. number of trials is reached
            else {

                // if user didn't successively reacted twice 
                if ((failedReactions > 1 || targetStimulationsCount2 < targetStimulationsToAchieve2) && trialExecutionsCount3 < 1) {
                    // increment counter
                    trialExecutionsCount3++;
                    // reset pointers
                    shapeTypesPointerTrial = 0;
                    shapeColorsPointerTrial = 0;
                    failedReactions = 0;
                    targetStimulationsCount2 = 0;
                    
                    $("#shapeIdTrial").remove();
                    // go to hint page
                    $.mobile.changePage('#hintPageTrial3', {transition: "flip"});
                }

                else {

                    trialAlreadyShownSubtask3 = true;
                    $.mobile.changePage('#startTaskSeparatedAttention', {transition: "flip"});

                }

            }

        }, 100);

    }

    catch (error) {

        console.log("An error has been occured! " + error);
    }
}

// shows next trial page (cross page)
function showNextSubtask3() {

// don't switch to next trial page after clicking! This method will only register the reaction!
    try
    {
       setTimeout(function () {
            // if more executions should be shown
            if (executionsShownSubtask3 < executionsToAchieveSubtask3) {

                $.mobile.changePage('#pageCrossSubtask3', {transition: "none"});
                // set flag
                reactionExecutedSubtask3 = true;

            }
            // if max. number of executions is reached
            else {

                $.mobile.changePage('#endPage', {transition: "flip"});

            }

        }, 100);
    }

    catch (error) {

        console.log("An error has been occured! " + error);
    }
}


// shows next execution page (cross page)
function showNext() {

    try
    {

        setTimeout(function () {
            // if more executions should be shown
            if (executionsShown < executionsToAchieve) {

                $.mobile.changePage('#pageCross', {transition: "none"});
                // set flag
                reactionExecuted = true;

            }
            // if max. number of executions is reached
            else {

                $.mobile.changePage('#selectiveAttentionStart', {transition: "flip"});

            }

        }, 100);

    }

    catch (error) {

        console.log("An error has been occured! " + error);
    }
}