let next = document.getElementById("next");
let id = document.getElementById("id");
let pw = document.getElementById("pw");
let email = document.getElementById("email");
let nickname = document.getElementById("nickname");
let tel = document.getElementById("tel");
let age = document.getElementById("age");
let height = document.getElementById("Height");
let weight = document.getElementById("Weight");

let kakaoCheck;
document.getElementsByName('permission').forEach((node) => {
  if (node.checked) {
    kakaoCheck = node.value;
  }
});

let genderCheck;
document.getElementsByName('gender').forEach((node) => {
  if (node.checked) {
    genderCheck = node.value;
  }
});

let actCheck;
document.getElementsByName('activity').forEach((node) => {
  if (node.checked) {
    actCheck = node.value;
  }
});

let goalCheck;
document.getElementsByName('goal').forEach((node) => {
  if (node.checked) {
    goalCheck = node.value;
  }
});

var idFlag = false;

$('#overlap').click(()=>{
  const req = { id: id.value };
  fetch("/Members", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, //내가 전달하는 데이터가 json데이터라고 알려줘야함
    body: JSON.stringify(req) //body로 데이터 전송
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.success);
      if (res.success) {
        alert("사용가능한 아이디");
        idFlag = true;
        // location.href = "http://localhost:8080/Members2";
      }
      else {
        alert(res.msg);
      }
    })
    //fetch().then() - > 서버에서 넘어온 데이터 받기
    //이 떄 promise 형식으로 넘어오는데 .then()을 한번 더 써주면 됨
    .catch((err) => {
      console.error(new Error("아이디 중복 검사 중 에러 발생")+err);
    });

});

$('#btn_complete').click(() => {
  console.log("btn_complete")
  alert("회원가입 완료");
  var idLen = id.value.length;
  var pwLen = pw.value.length;
  var emailLen = email.value.length;
  var nicknameLen = nickname.value.length;
  var telLen = tel.value.length;

  console.log('idflag: '+idFlag);
  if (idFlag ==  false) {
    alert("아이디를 다시 선택해주세요");
  }

  if (idLen == 0 || pwLen == 0 || emailLen == 0 ||
    nicknameLen == 0 || telLen == 0) {
    alert("입력란을 모두 작성해주세요");
  }
  else {
    const req = {
      id: id.value,
      pw: pw.value,
      email: email.value,
      nickname: nickname.value,
      permission: kakaoCheck,
      tel: tel.value,
      age: age.value,
      height: height.value,
      weight: weight.value,
      gender: genderCheck,
      activity: actCheck,
      goal: goalCheck
    };

    console.log(req);

    fetch("/StartPage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, //내가 전달하는 데이터가 json데이터라고 알려줘야함
      body: JSON.stringify(req) //body로 데이터 전송
    })
      .then((res) => console.log(res.json()))
      .then((res) => {
        if (res.success) {
          console.log('true');
          // location.href = "http://localhost:8080/Members2";
        }
        else {
          alert(res.msg);
        }
      })
      //fetch().then() - > 서버에서 넘어온 데이터 받기
      //이 떄 promise 형식으로 넘어오는데 .then()을 한번 더 써주면 됨
      .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생")+err);
      });
  }
});






