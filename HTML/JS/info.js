
//수정 버튼 누르면 save버튼 보이기 + text값 clear
$('#nick_btn').click(function(){
  $('#nick_ch').css("visibility","visible");       //저장버튼 보이기
  $('#now_nick').val('');                          //text값 clear
});

$('#height_btn').click(function(){
  $('#height_ch').css("visibility","visible");
  $('#now_height').val('');
});

$('#weight_btn').click(function(){
  $('#weight_ch').css("visibility","visible");
  $('#now_weight').val('');
});

$('#age_btn').click(function(){
  $('#age_ch').css("visibility","visible");
  $('#now_age').val('');
});

$('#sex_btn').click(function(){
  $('#sex_ch').css("visibility","visible");
  $('.act').prop("checked", false);
});

$('#act_btn').click(function(){
  $('#act_ch').css("visibility","visible");
  Popup1();
  $('#now_act').val('');
});

$('#goal_btn').click(function(){
  $('#goal_ch').css("visibility","visible");
  $('#now_goal').val('');
});

$('#mail_btn').click(function(){
  $('#mail_ch').css("visibility","visible");
  $('#now_mail').val('');
});

$('#kakao_btn').click(function(){
  Popup2();
});


$('button.save').click(function(){
  alert("저장되었습니다.");
})

$('button.save2').click(function(){
  alert("저장되었습니다.");
})

function Popup1(){
  window.open("act_change.html","act_change","width=500,height=350,left=100,top=50");
}

function Popup2(){
  window.open("kakao_change.html","act_change","width=300,height=350,left=100,top=50");
}


