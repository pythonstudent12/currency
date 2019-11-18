
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    console.log ('1111111');
    
    request.addEventListener('readystatechange', function() {

        function postData () {

          return new Promise (function (resolve, reject){


            if (request.readyState === 4 && request.status == 200) {
               resolve();
            } else {
              reject();
           }
        });
        }
   

    postData()
    .then(()=>{
    let data = JSON.parse(request.response);
    inputUsd.value = inputRub.value / data.usd;
    let obj = { rub :1,
        usd: 68
    };
    console.log(obj);
    })
.catch(()=>{inputUsd.value = "Что-то пошло не так!";})
.finally(() => alert("Промис завершён"))
});
});