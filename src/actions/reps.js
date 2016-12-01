import * as CONSTANTS from 'actions/constants';

const receiveReps = (reps) => ({ type: CONSTANTS.RECEIVE_REPS, payload: reps })

export const getRepsByZip = (zip) => {
        return dispatch => {

          function createCORSRequest(method, url) {
            var xhr = new XMLHttpRequest();
            if ("withCredentials" in xhr) {

              // Check if the XMLHttpRequest object has a "withCredentials" property.
              // "withCredentials" only exists on XMLHTTPRequest2 objects.
              xhr.open(method, url, true);

            } else if (typeof XDomainRequest != "undefined") {

              // Otherwise, check if XDomainRequest.
              // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
              xhr = new XDomainRequest();
              xhr.open(method, url);

            } else {

              // Otherwise, CORS is not supported by the browser.
              xhr = null;

            }
            return xhr;
          }



          function makeCorsRequest() {
            // This is a sample server that supports CORS.
            const url = `http://whoismyrepresentative.com/getall_mems.php?output=json&zip=${zip}`;

            var xhr = createCORSRequest('GET', url);
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            if (!xhr) {
              alert('CORS not supported');
              return;
            }

            // Response handlers.
            xhr.onload = function() {
              // alert('Response from CORS request to ' + url + ': ' + title);
            };

            xhr.onerror = function() {
              // alert('Woops, there was an error making the request.');
            };

            xhr.send();

            return xhr;
          }


          // const header = new Headers({'Access-Control-Allow-Origin': '*'});
          // const init = {
          //   header,
          //   // headers: {'Access-Control-Allow-Origin': '*'},
          //   method: 'GET',
          //   mode: 'cors',
          //   cache: 'default'
          // };
          //
          // return fetch(`http://whoismyrepresentative.com/getall_mems.php?output=json&zip=${zip}`, init)
          // .then(response => response.json())
          // .then(json => {
          //   dispatch(receiveReps(json.results));
          // });
        }
      }
