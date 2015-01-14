/* 
 * This script contains the interaction logic of the Task: Aufmerksamkeit
 */


var trialsToAchieve = 5;
var trialsShown = 0;
var reactionExecuted = false;
var trialAlreadyShown = false;
var failedReactions = 0;

var switchToCirclePageTimer;
var switchToCrossPageTimer;



function goToDemo() {

    try
    {
        $.mobile.changePage('#aufmerksamkeitDemo1', {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


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