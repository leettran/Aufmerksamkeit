/* 
 * This script contains the interaction logic of the Task: Aufmerksamkeit
 */


// alertness variables
var trialsToAchieve = 5;
var trialsShown = 0;
var executionsToAchieve = 50;
var executionsShown = 0;
var reactionExecuted = false;
var trialAlreadyShown = false;
var failedReactions = 0;
var crossShowDurations = new Array(3000,3100,2900,2800,2900,2700,2900,3000,2900,2800,2900,2700,2900,2800,3000,2900,2800,3100,2900,3000,2900,2700,2900,2800,3000,2900,2800,3000,2900,3100,2900,2800,2700,2900,3000,2900,3000,2800,2900,3100,2900,2800,2900,3000,2900,2700,2800,3000,3100,2900);
var crossShowDurationsPointer = 0;

// time value variables
var switchToCirclePageTimerTrial;
var switchToCrossPageTimerTrial;
var switchToCirclePageTimer;
var switchToCrossPageTimer;




// slides to demo page start
function goToDemo() {

    try
    {
        $.mobile.changePage('#aufmerksamkeitDemo1', {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// shows countdown page
function showCountDown() {

    try
    {
        var pageID = $.mobile.activePage.attr('id');
        if (pageID === "startTaskAlertness") {

            trialAlreadyShown = true;
        }
        
        // reset counter of failed reactions
        if (failedReactions > 0)
            failedReactions = 0;
        // reset counter of trails shown
        if(trialsShown>0)
            trialsShown=0;
        
        $.mobile.changePage('#countdownPage', {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// shows next trial page (cross page)
function showNextTrial() {

    try
    {
        // if more trials should be shown
        if (trialsShown < trialsToAchieve) {

            $.mobile.changePage('#trialPageCross', {transition: "none"});
            // set flag
            reactionExecuted = true;
            // reset failed reactions number
            failedReactions = 0;
        }
        // if max. number of trials is reached
        else {
            // if user didn't successively reacted twice 
            if (failedReactions >= 2) {
                
                $.mobile.changePage('#hintPageTrial', {transition: "flip"});
            }

            else {

                $.mobile.changePage('#startTaskAlertness', {transition: "flip"});
            }
        }

    }

    catch (error) {

        console.log("An error has been occured! " + error);
    }
}


// shows next execution page (cross page)
function showNext() {

    try
    {
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

    }

    catch (error) {

        console.log("An error has been occured! " + error);
    }
}