function form() {
    let message = {
        loading: '<img src="/img/ajax-loader.gif">',
        success: '<img src="/img/success.svg">',
        failure: '<img src="/img/error.svg">'
    };

    let form = document.querySelector('.main-form'),
        feedbackForm = document.querySelector('.feedback-form'),
        input = form.getElementsByTagName('input'),
        feedbackInput = feedbackForm.getElementsByTagName('input'),
        statusIcon = document.createElement('div');

    function sendJSONData(element, status) {
        element.addEventListener('submit', function(e) {
            e.preventDefault();
            statusIcon.classList.add(status);
            element.appendChild(statusIcon);
            let formData = new FormData(element);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', '/server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function() {
                        if (request.readyState < 4) {
                            resolve();
                        }
                        else if (request.readyState === 4) {
                            if (request.status == 200) {
                                resolve();
                            }
                            else {
                                reject();
                            }
                        }
                    }
                    request.send(data);
                });
            }

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
                        .then(() => statusIcon.innerHTML = message.loading)
                        .then(() => statusIcon.innerHTML = message.success)
                        .catch(() => statusIcon.innerHTML = message.failure)
                        .then(clearInput);
        });
    }

    sendJSONData(form, 'status-abs');
    sendJSONData(feedbackForm, 'status');
}

module.exports = form;