/* Wheelhouse Analytics Test
   Author: Dustin Moore
   Created: May 25, 2017
   Last Updated: May 21, 2021
*/

console.log(`%c
 __      __      /\\ 
/  \\    /  \\    / / 
\\   \\/\\/   /   / /  
 \\        /   / /   
  \\__/\\  /   / /    
       \\/    \\/     
`, "font-family:monospace");

console.log(`%c 
Thank you for your interest in our Engineering position!

In this exercise we are going to work with Google Tag Manager
to add a GA tag to the GTM container on this page.

We then would like you to setup 2 events; one on our modal launch
button (more on that in a moment), and one on the form that pops up.

You should have recieved an invite via email to the Test GTM container,
if not, please email the person you sent you this test.

To continue please use the "testCLI" object methods in your console to get the GA ID,
Show Your Test Button and get the Details on the Events we Want to fire. 

`, "font-family:monospace");



var testCLI = {
	help: function(){
		console.log(`%c
Please create a Google Account and setup a clean GA and GTM environment, copy your IDs for use in the event steps below:
testCLI.showButton(); //Shows the button for Event 1
testCLI.eventOneDetails(); //Instructions for Event 1
testCLI.eventTwoDetails(); //Instructions for Event 2
`, "font-family:monospace");
	},
	getGAID: function(){
		console.log(`%c
Please Add a GA Tag to GTM with the following ID:
UA-54233301-11
`, "font-family:monospace");
	},
	showButton: function(){
        var button = document.getElementById("testButton");
		button.style.display = "block";
	},
	eventOneDetails: function(){
		console.log(`%c
When a user clicks the "Show test Popup" button we should fire
an event to GA.

Event one should report to GA as follows:

Event Category: "Button Interaction"
Event Action: "Click"
Event Label: {{ButtonText}} //This should be dynamic
`, "font-family:monospace");
	},
	eventTwoDetails: function(){
		console.log(`%c
When a user uses the "Say it!" button to "Say Hello" we should fire
an event to GA.

Event two should report to GA as follows:

Event Category: "Say Hello"
Event Action: "Say It!"
Event Label: {{SayFieldValue}} //This should be dynamic
`, "font-family:monospace");	
	}
};

function hideModal(){
	var modal = document.getElementById("testModal");
	modal.style.display = "none";
}

function sayHello(){
	var hello = document.getElementById("say").value;
	alert(hello);
}


function loadPopup() {
	var popUp = `
	<div class="default-max-width">
        <div id="testModal" class="modal" tabindex="-1" role="dialog" style="display:block">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" onclick="hideModal();" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Test Popup!</h4>
              </div>
              <div class="modal-body">
                <p>
                  <form>
                    <div class="form-group">
                      <label for="say">Say Hello:</label>
                      <input type="text" id="say" class="form-control" placeholder="Hello Wheelhouse!" name="say">
                    </div>
                  </form>
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" onclick="hideModal();" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="submit" onclick="sayHello();" class="btn btn-primary">Say It!</button>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
      </div>
      `;

      var content = document.getElementById("mainContent");
      content.innerHTML = popUp;
}
