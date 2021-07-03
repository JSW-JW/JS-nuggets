// 1. fetching data using callback function.

function getData(callbackFunc) {
    $.get('url 주소/products/1', function(response) {
      callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
    });
  }
  
  getData(function(tableData) {
    console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
  });


// 2. fetching data using promise object
function getData() {
    return new Promise(function(resolve, reject) {
      $.get('url 주소/products/1', function(response) {
        if (response) {
          resolve(response);
        }
        reject(new Error("Request is failed"));
      });
    });
  }
  
  // 위 $.get() 호출 결과에 따라 'response' 또는 'Error' 출력
  getData().then(function(data) {
    console.log(data); // response 값 출력
  }).catch(function(err) {
    console.error(err); // Error 출력
  });


// 3. Practical use cases - user login process

let userInfo = {
    id: 'test@abc.com',
    pw: '****'
};
  
function parseValue() {
    return new Promise({
        // ...
    });
}
function auth() {
    return new Promise({
        // ...
    });
}
function display() {
    return new Promise({
        // ...
    });
}

getData(userInfo)
  .then(parseValue)
  .then(auth)
  .then(diaplay);