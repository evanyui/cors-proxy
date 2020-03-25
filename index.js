const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const cors_api_url = 'https://cors-anywhere.herokuapp.com/';

function doCORSRequest(options, printResult) {
  const x = new XMLHttpRequest();
  x.open(options.method, cors_api_url + options.url);
  x.onload = x.onerror = function() {
    printResult(
      options.method + ' ' + options.url + '\n' +
      x.status + ' ' + x.statusText + '\n\n' +
      (x.responseText || '')
    );
  };
  x.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With');
  x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  x.send("");
}

function main(url) {
  doCORSRequest({
    method: 'GET',
    url: url,
  }, function printResult(result) {
    console.log(result);
  });
}

main(process.argv[2]);

