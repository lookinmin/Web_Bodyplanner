let next = document.getElementById("next");
let id = document.getElementById("id");
let pw = document.getElementById("pw");
let email = document.getElementById("email");
let nickname = document.getElementById("nickname");
let tel = document.getElementById("tel");

$('#overlap').click(()=>{
  var inputID = id.value;
});

$('#next').click(() => {
  var idLen = id.value.length;
  var pwLen = pw.value.length;
  var emailLen = email.value.length;
  var nicknameLen = nickname.value.length;
  var telLen = tel.value.length;

  if (idLen == 0 || pwLen == 0 || emailLen == 0 ||
    nicknameLen == 0 || telLen == 0) {
      alert("입력란을 모두 작성해주세요");
  }
  else{
    const req = {
      id: id.value,
      pw: pw.value,
      email: email.value,
      nickname: nickname.value,
      tel: tel.value
    };

    fetch("/Members2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, //내가 전달하는 데이터가 json데이터라고 알려줘야함
      body: JSON.stringify(req) //body로 데이터 전송
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          console.log('true');
        }
        else {
          alert(res.msg);
        }
      })
      //fetch().then() - > 서버에서 넘어온 데이터 받기
      //이 떄 promise 형식으로 넘어오는데 .then()을 한번 더 써주면 됨
      .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
      });
  }
});