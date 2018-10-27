
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');


function getData(element) {
    inputRub.addEventListener('input', () => {
        let formData = new FormData(element);
        function getCourse(url) {
            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('GET', url, true);
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                request.addEventListener('load', function() {
                    if (request.status < 400) {
                        resolve(request.response);
                    }
                    else {
                        reject(Error(request.statusText));
                    }
                });
                request.send();
            });
        }
        
        getCourse('/current.json')
                    .then((response) => inputUsd.value = inputRub.value / JSON.parse(response).usd)
                    .catch(() => inputUsd.value = "Что-то пошло не так!");
    });
}

getData(inputRub);