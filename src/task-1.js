
// Change us!

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } throw Error(response.statusText);
}

function json(response) {
    return response.json();
}

function getJSON(url) {
    return window.fetch(url)
        .then(status)
        .then(json);
}


export { status, json, getJSON };
//
// function status(response) {
//     if (response.status >= 200 && response.status < 300) {
//         return Promise.resolve(response);
//     } else {
//         return Promise.reject(new Error(response.statusText));
//     }
// }
//
// function json(response) {
//     return response.json();
// }
//
// window.fetch('.json')
//     .then(status)
//     .then(json)
//     .then(function(data) {
//         console.log('Request succeeded with JSON response', data);
//     }).catch(function(error) {
//     console.log('Request failed', error);
// });


