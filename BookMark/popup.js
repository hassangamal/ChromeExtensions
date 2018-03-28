chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function(tabs) {
    $('#greet').text('Hello' + $(location).attr('href'));
    var url = tabs[0].url;
    document.getElementById('greet').innerHTML = url;
    var params = {
        // The ID of the spreadsheet to update.
        spreadsheetId: '1Ll_6phU9TpP3wZcwWtAxKt6kWHF2WqeUT6KGumr5TwY', // TODO: Update placeholder value.

        // The A1 notation of a range to search for a logical table of data.
        // Values will be appended after the last row of the table.
        range: 'bookmark', // TODO: Update placeholder value.

        // How the input data should be interpreted.
        valueInputOption: 'RAW', // TODO: Update placeholder value.

        // How the input data should be inserted.
         insertDataOption: string, // TODO: Update placeholder value.
    };

    var valueRangeBody = {
        // TODO: Add desired properties to the request body.
        "values": url
    };

    var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
    request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        console.log(response.result);
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
    initClient();
});

function initClient() {
    var API_KEY = 'AIzaSyD77FdFtmQ_-W2LuVNk6_DDt_JyzYYwlbc'; // TODO: Update placeholder with desired API key.

    var CLIENT_ID = '1074461782686-jpjkoqk18e14r4co4b57ilhf16ssh86q.apps.googleusercontent.com'; // TODO: Update placeholder with desired client ID.

    // TODO: Authorize using one of the following scopes:
    //   'https://www.googleapis.com/auth/drive'
    //   'https://www.googleapis.com/auth/drive.file'
    //   'https://www.googleapis.com/auth/spreadsheets'
    var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

    gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}
/*
https://docs.google.com/spreadsheets/d/1Ll_6phU9TpP3wZcwWtAxKt6kWHF2WqeUT6KGumr5TwY/edit?usp=sharing
*/
