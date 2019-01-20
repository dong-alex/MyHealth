// Copyright 2018, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// Import the Dialogflow module and response creation dependencies from the 
// Actions on Google client library.
const {
  dialogflow,
  Permission,
  Suggestions,
  DialogflowApp,
} = require('actions-on-google');

const axios = require('axios');


// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

exports.googleHomeSMS = functions.https.onRequest((request, response) => {
    const app2 = new DialogflowApp({ request, response })
    console.log(`Request Headers: ${JSON.stringify(request.headers)}`)
    console.log(`Request Body: ${JSON.stringify(request.body)}`)
    app2.handleRequest(actionMap)
})

var ID = 0;
// Handle the Dialogflow intent named 'See My Health'.
// The intent collects a parameter named 'color'.
app.intent('Open MyHealth', (conv, {number}) => {
	const audioSound = 'https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg';
	if (conv.user.storage.userName) {
    conv.ask(`<speak>Okay ${conv.user.storage.userName}, I am bringing up the health network for ${number}.` +
    	`<audio src="${audioSound}"></audio>` +  
    	"What would you like to know?</speak>"
    	);
    conv.ask(new Suggestions('Check Medication', 'Doctor note'));
  } else {
    conv.ask(`<speak>Looking up the health network for ${number}.`+ 
    	`<audio src="${audioSound}"></audio>` +  
    	"What would you like to know?</speak>"
    	);
    conv.ask(new Suggestions('Check Medication', 'Doctor note'));
  }
  ID = number;
});

app.intent('Open MyHealth - Medication', (conv, {checking_req , medication}) => {
  
  const actionMap = new Map()
  actionMap.set(getMedication )
  
  conv.ask("This " + ID);

});

function getMedication(app) {
  let instance = axios.create({
        baseURL: 'http://127.0.0.1:8081/api/',
        })
          instance.get('patients?id=3')
  .then(function (response) {
    // handle success
    conv.ask("Logging into database");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    conv.ask("got into here atleast")
  });
    
    conv.ask('left Function')
  }



// Handle the Dialogflow intent named 'Default Welcome Intent'.
app.intent('Default Welcome Intent', (conv) => {
 //conv.user.storage = {};	
 const name = conv.user.storage.userName;
 if (!name) {
   // Asks the user's permission to know their name, for personalization.
   conv.ask(new Permission({
     context: 'Hi there, to get to know you better',
     permissions: 'NAME',
   }));
 } else {
   conv.ask(`Hi again, ${name}. What can I do for you`);
 }
});

// Handle the Dialogflow intent named 'actions_intent_PERMISSION'. If user
// agreed to PERMISSION prompt, then boolean value 'permissionGranted' is true.
app.intent('actions_intent_PERMISSION', (conv, params, permissionGranted) => {
  if (!permissionGranted) {
    conv.ask(`Did you want to check your health information?`);
  } else {
    conv.user.storage.userName = conv.user.name.display;
    conv.ask(`Thanks, ${conv.user.storage.userName}. Live long and prosper`);
  }
});

// Handle the Dialogflow NO_INPUT intent.
// Triggered when the user doesn't provide input to the Action
app.intent('actions_intent_NO_INPUT', (conv) => {
  // Use the number of reprompts to vary response
  const repromptCount = parseInt(conv.arguments.get('REPROMPT_COUNT'));
  if (repromptCount === 0) {
    conv.ask('What would you like to know about your health?');
  } else if (repromptCount === 1) {
    conv.ask(`Do you want to hear about your health?.`);
  } else if (conv.arguments.get('IS_FINAL_REPROMPT')) {
    conv.close(`You seem to be busy, goodbye and stay safe!`);
  }
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);