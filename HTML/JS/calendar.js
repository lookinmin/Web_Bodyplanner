var date_click; // 달력에서 선택한 날짜
{
  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜
  if (month <= 9) {
    month = "0" + month;
  }
  if (date <= 9) {
    date = "0" + date;
  }
  date_click = year + "-" + month + "-" + date;
  document.getElementById("date_click").innerHTML = date_click;
  document.querySelector(".show_date").innerHTML = date_click + '\t식단';
}

function Today() {
  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜
  if (month <= 9) {
    month = "0" + month;
  }
  if (date <= 9) {
    date = "0" + date;
  }
  date_click = year + "-" + month + "-" + date;
  document.getElementById("date_click").innerHTML = date_click;
  document.querySelector(".show_date").innerHTML = date_click + '\t식단';
}
//--------------------------날짜 출력 div 누르면 오늘 날짜로--------------------------


var calendar;
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'today'
    },
    businessHours: true, // display business hours
    editable: true,
    selectable: true,
    fixedWeekCount: false,
    dayMaxEventRows: true,
    select: function (arg) {
      date_click = arg.startStr;
      document.getElementById("date_click").innerHTML = date_click; //식단 입력 
      document.querySelector(".show_date").innerText = date_click + '\t식단'; //저장한 식단 출력
      // calendar.unselect(); //캘린더 클릭시 표시 바로 꺼짐
    },
    eventClick: function (arg) {
      if (confirm('선택한 식단을 삭제하시겠습니까?')) {
        arg.event.remove()//이벤트 삭제
      }
    },
    events: [
    ]
  });

  calendar.render();
});
//--------------------------캘린더 생성--------------------------

const day_meal1 = document.getElementsByClassName('day_print')[0];
const day_meal2 = document.getElementsByClassName('day_print')[1];

function AppendFirst() {
  for (let i = 0; i < document.querySelector('.day').childElementCount; i++) {
    if (document.getElementsByClassName('day_print')[i] != undefined) {
      document.getElementsByClassName('day_print')[i].disabled = false;
    }
  }
  day_meal1.disabled = true;
}

function AppendSecond() {
  for (let i = 0; i < document.querySelector('.day').childElementCount; i++) {
    if (document.getElementsByClassName('day_print')[i] != undefined) {
      document.getElementsByClassName('day_print')[i].disabled = false;
    }
  }
  day_meal2.disabled = true;
}

function AppendThird() {
  for (let i = 0; i < document.querySelector('.day').childElementCount; i++) {
    if (document.getElementsByClassName('day_print')[i] != undefined) {
      document.getElementsByClassName('day_print')[i].disabled = false;
    }
  }
  let day_meal3 = document.getElementsByClassName('day_print')[2];
  day_meal3.disabled = true;
}

function AppendFourth() {
  for (let i = 0; i < document.querySelector('.day').childElementCount; i++) {
    if (document.getElementsByClassName('day_print')[i] != undefined) {
      document.getElementsByClassName('day_print')[i].disabled = false;
    }
  }
  let day_meal4 = document.getElementsByClassName('day_print')[3];
  day_meal4.disabled = true;
}

function AppendFifth() {
  for (let i = 0; i < document.querySelector('.day').childElementCount; i++) {
    if (document.getElementsByClassName('day_print')[i] != undefined) {
      document.getElementsByClassName('day_print')[i].disabled = false;
    }
  }
  let day_meal5 = document.getElementsByClassName('day_print')[4];
  day_meal5.disabled = true;
}
//--------------------------클릭시 비활성화 -> 식단 입력 가능--------------------------

const day = document.getElementsByClassName('day')[0];
day.addEventListener('click', UnlockDisabled);
function UnlockDisabled(event) {
  let target = event.target;
  if (target != event.currentTarget.getElementsByClassName("btn-outline-warning")[0] && target != event.currentTarget.getElementsByClassName("btn-outline-warning")[1]
    && target != event.currentTarget.getElementsByClassName("btn-outline-warning")[2] && target != event.currentTarget.getElementsByClassName("btn-outline-warning")[3]
    && target != event.currentTarget.getElementsByClassName("btn-outline-warning")[4] || target == event.currentTarget.querySelector(".add_btn")) {

    day_meal1.disabled = false;
    day_meal2.disabled = false;

    let day_meal3 = document.getElementsByClassName('day_print')[2];
    if (day_meal3 != undefined) {
      day_meal3.disabled = false;
    }

    let day_meal4 = document.getElementsByClassName('day_print')[3];
    if (day_meal4 != undefined) {
      day_meal4.disabled = false;
    }

    let day_meal5 = document.getElementsByClassName('day_print')[4];
    if (day_meal5 != undefined) {
      day_meal5.disabled = false;
    }
  }
}
//--------------------------클릭시 전체 활성화 -> 식단 입력 x--------------------------

function SaveMeal() {
  let day_meal3 = document.getElementsByClassName('day_print')[2];
  let day_meal4 = document.getElementsByClassName('day_print')[3];
  let day_meal5 = document.getElementsByClassName('day_print')[4];

  if (day_meal1.disabled || day_meal2.disabled || (day_meal3 != undefined && day_meal3.disabled == true)
    || (day_meal4 != undefined && day_meal4.disabled == true) || (day_meal5 != undefined && day_meal5.disabled == true)) {
    if (day_meal1.disabled) {
      AddMeal('day_meal1');
      calendar.addEvent({ title: '1st Meal', start: date_click, color: 'red' });
    }
    else if (day_meal2.disabled) {
      AddMeal('day_meal2');
      calendar.addEvent({ title: '2nd Meal', start: date_click, color: 'blue' });
    }
    else if (day_meal3 != undefined && day_meal3.disabled) {
      AddMeal('day_meal3');
      calendar.addEvent({ title: '3rd Meal', start: date_click, color: 'green' });
    }
    else if (day_meal4 != undefined && day_meal4.disabled) {
      AddMeal('day_meal4');
      calendar.addEvent({ title: '4th Meal', start: date_click, color: 'black' });
    }
    else if (day_meal5 != undefined && day_meal5.disabled) {
      AddMeal('day_meal5');
      calendar.addEvent({ title: '5th Meal', start: date_click, color: 'yellow' });
    }
  }
  else {
    alert('식단을 추가하실 박스를 선택하세요');
  }
}
//--------------------------식단 추가 가능 여부 확인하고 추가할 박스 전달 -> AddMeal()--------------------------

function AddMeal(name) {
  CarboNum(name);
  ProNum(name);
  FatNum(name);
  OtherNum(name);
  SumTotalNutri();
  ResetValue();
}

function CarboNum(name) {
  let box = document.querySelector('.carbo_box');
  let list = document.querySelectorAll('.carbo_name');
  let tmp_map = new Map();
  for (let i = 0; i < box.length; i++) {
    if (box.elements[i].value >= 1) {
      tmp_map.set(list[i].innerText, box.elements[i].value);
      CheckBoxNum(name);
      TotalSumCarboList(i, list[i].innerText, box.elements[i].value);
    }
  }
  InputMealData(name, tmp_map);
}
function ProNum(name) {
  let box = document.querySelector('.pro_box');
  let list = document.querySelectorAll('.pro_name');
  let tmp_map = new Map();
  for (let i = 0; i < box.length; i++) {
    if (box.elements[i].value >= 1) {
      tmp_map.set(list[i - 1].innerText, box.elements[i].value);
      CheckBoxNum(name);
      TotalSumProList(i - 1, list[i - 1].innerText, box.elements[i].value);
    }
  }
  InputMealData(name, tmp_map);
}
function FatNum(name) {
  let box = document.querySelector('.fat_box');
  let list = document.querySelectorAll('.fat_name');
  let tmp_map = new Map();
  for (let i = 0; i < box.length; i++) {
    if (box.elements[i].value >= 1) {
      tmp_map.set(list[i - 1].innerText, box.elements[i].value);
      CheckBoxNum(name);
      TotalSumFatList(i - 1, list[i - 1].innerText, box.elements[i].value);
    }
  }
  InputMealData(name, tmp_map);
}
function OtherNum(name) {
  let box = document.querySelector('.other_box');
  let list = document.querySelectorAll('.other_name');
  let tmp_map = new Map();
  for (let i = 0; i < box.length; i++) {
    if (box.elements[i].value >= 1) {
      tmp_map.set(list[i - 1].innerText, box.elements[i].value);
      CheckBoxNum(name);
      TotalSumOtherList(i - 1, list[i - 1].innerText, box.elements[i].value);
    }
  }
  InputMealData(name, tmp_map);
}
//--------------------------개수 입력하고 저장 버튼 클릭하면 tmp_map에 식단 이름, 개수 저장--------------------------

function InputMealData(name, meal_map) {
  switch (name) {
    case 'day_meal1':
      for (const [key, value] of meal_map) {
        CreateNewDiv(key, value, 'day_meal1');
        CreateNewDiv(key, value, 'meal_list1');
      }
      break;
    case 'day_meal2':
      for (const [key, value] of meal_map) {
        CreateNewDiv(key, value, 'day_meal2');
        CreateNewDiv(key, value, 'meal_list2');
      }
      break;
    case 'day_meal3':
      for (const [key, value] of meal_map) {
        CreateNewDiv(key, value, 'day_meal3');
        CreateNewDiv(key, value, 'meal_list3');
      }
      break;
    case 'day_meal4':
      for (const [key, value] of meal_map) {
        CreateNewDiv(key, value, 'day_meal4');
        CreateNewDiv(key, value, 'meal_list4');
      }
      break;
    case 'day_meal5':
      for (const [key, value] of meal_map) {
        CreateNewDiv(key, value, 'day_meal5');
        CreateNewDiv(key, value, 'meal_list5');
      }
      break;
  }
}
//--------------------------map에 저장한 식단 목록을 <div>를 생성하는 함수로 보냄--------------------------

function CreateNewDiv(key, value, name) {
  let newDiv = document.createElement('div');
  if(value == " "){
    newDiv.innerHTML = key;
  }
  else{
    newDiv.innerHTML = key + ', ' + value;
  }
  newDiv.setAttribute('class', 'newDiv');
  newDiv.style.border = "2px solid red";
  newDiv.style.marginTop = "10px";
  newDiv.style.height = "20px"
  newDiv.style.paddingLeft = "10px";

  switch (name) {
    case 'day_meal1':
      day_meal1.appendChild(newDiv);
      newDiv.addEventListener('dblclick', () => {
        let num;
        for (let i = 0; i < day_meal1.childNodes.length; i++) {
          if (newDiv.innerText == day_meal1.childNodes[i].innerText) {
            num = i;
          }
        }
        if (confirm('선택한 식단을 삭제하시겠습니까?')) {
          day_meal1.removeChild(newDiv);
          document.getElementsByClassName('meal_list')[0].removeChild
            (document.getElementsByClassName('meal_list')[0].childNodes[num]);
          MinusTotalSum('day_meal1', num);
          document.getElementById('total_kcal').innerText = total_sum[0] + 'kcal';
          document.getElementById('total_carbo').innerText = total_sum[1] + 'g';
          document.getElementById('total_pro').innerText = total_sum[2] + 'g';
          document.getElementById('total_fat').innerText = total_sum[3] + 'g';
        }
      });
      break;
    case 'day_meal2':
      day_meal2.appendChild(newDiv);
      newDiv.addEventListener('dblclick', () => {
        let num;
        for (let i = 0; i < day_meal2.childNodes.length; i++) {
          if (newDiv.innerText == day_meal2.childNodes[i].innerText) {
            num = i;
          }
        }
        if (confirm('선택한 식단을 삭제하시겠습니까?')) {
          day_meal2.removeChild(newDiv);
          document.getElementsByClassName('meal_list')[1].removeChild
            (document.getElementsByClassName('meal_list')[1].childNodes[num]);
          MinusTotalSum('day_meal2', num);
          document.getElementById('total_kcal').innerText = total_sum[0] + 'kcal';
          document.getElementById('total_carbo').innerText = total_sum[1] + 'g';
          document.getElementById('total_pro').innerText = total_sum[2] + 'g';
          document.getElementById('total_fat').innerText = total_sum[3] + 'g';
        }
      });
      break;
    case 'day_meal3':
      let day_meal3 = document.getElementsByClassName('day_print')[2];
      day_meal3.appendChild(newDiv);
      newDiv.addEventListener('dblclick', () => {
        let num;
        for (let i = 0; i < day_meal3.childNodes.length; i++) {
          if (newDiv.innerText == day_meal3.childNodes[i].innerText) {
            num = i;
          }
        }
        if (confirm('선택한 식단을 삭제하시겠습니까?')) {
          day_meal3.removeChild(newDiv);
          document.getElementsByClassName('meal_list')[2].removeChild
            (document.getElementsByClassName('meal_list')[2].childNodes[num]);
          MinusTotalSum('day_meal3', num);
          document.getElementById('total_kcal').innerText = total_sum[0] + 'kcal';
          document.getElementById('total_carbo').innerText = total_sum[1] + 'g';
          document.getElementById('total_pro').innerText = total_sum[2] + 'g';
          document.getElementById('total_fat').innerText = total_sum[3] + 'g';
        }
      });
      break;
    case 'day_meal4':
      let day_meal4 = document.getElementsByClassName('day_print')[3];
      day_meal4.appendChild(newDiv);
      newDiv.addEventListener('dblclick', () => {
        let num;
        for (let i = 0; i < day_meal4.childNodes.length; i++) {
          if (newDiv.innerText == day_meal4.childNodes[i].innerText) {
            num = i;
          }
        }
        if (confirm('선택한 식단을 삭제하시겠습니까?')) {
          day_meal4.removeChild(newDiv);
          document.getElementsByClassName('meal_list')[3].removeChild
            (document.getElementsByClassName('meal_list')[3].childNodes[num]);
          MinusTotalSum('day_meal4', num);
          document.getElementById('total_kcal').innerText = total_sum[0] + 'kcal';
          document.getElementById('total_carbo').innerText = total_sum[1] + 'g';
          document.getElementById('total_pro').innerText = total_sum[2] + 'g';
          document.getElementById('total_fat').innerText = total_sum[3] + 'g';
        }
      });
      break;
    case 'day_meal5':
      let day_meal5 = document.getElementsByClassName('day_print')[4];
      day_meal5.appendChild(newDiv);
      newDiv.addEventListener('dblclick', () => {
        let num;
        for (let i = 0; i < day_meal5.childNodes.length; i++) {
          if (newDiv.innerText == day_meal5.childNodes[i].innerText) {
            num = i;
          }
        }
        if (confirm('선택한 식단을 삭제하시겠습니까?')) {
          day_meal5.removeChild(newDiv);
          document.getElementsByClassName('meal_list')[4].removeChild
            (document.getElementsByClassName('meal_list')[4].childNodes[num]);
          MinusTotalSum('day_meal5', num);
          document.getElementById('total_kcal').innerText = total_sum[0] + 'kcal';
          document.getElementById('total_carbo').innerText = total_sum[1] + 'g';
          document.getElementById('total_pro').innerText = total_sum[2] + 'g';
          document.getElementById('total_fat').innerText = total_sum[3] + 'g';
        }
      });
      break;
    case 'meal_list1':
      document.getElementsByClassName('meal_list')[0].appendChild(newDiv);
      break;
    case 'meal_list2':
      document.getElementsByClassName('meal_list')[1].appendChild(newDiv);
      break;
    case 'meal_list3':
      document.getElementsByClassName('meal_list')[2].appendChild(newDiv);
      break;
    case 'meal_list4':
      document.getElementsByClassName('meal_list')[3].appendChild(newDiv);
      break;
    case 'meal_list5':
      document.getElementsByClassName('meal_list')[4].appendChild(newDiv);
      break;
    default:
      break;
  }
}
//--------------------------<p>를 새로 생성하고 입력한 식단 박스에 출력--------------------------

function ResetValue() {
  for (let i = 0; i < document.querySelectorAll('.carbo_num').length; i++) {
    document.getElementsByClassName('carbo_num')[i].firstChild.value = "";
  }
  for (let i = 0; i < document.querySelectorAll('.pro_num').length; i++) {
    document.getElementsByClassName('pro_num')[i].firstChild.value = "";
  }
  for (let i = 0; i < document.querySelectorAll('.fat_num').length; i++) {
    document.getElementsByClassName('fat_num')[i].firstChild.value = "";
  }
  for (let i = 0; i < document.querySelectorAll('.other_num').length; i++) {
    document.getElementsByClassName('other_num')[i].firstChild.value = "";
  }
}
//--------------------------식단 입력 끝나면 이전 숫자 초기화--------------------------

function CreateNewDayMeal() {
  if (document.querySelector('.day').childElementCount < 6) {
    let day_meal = document.createElement('div');
    day_meal.setAttribute('class', 'day_meal');
    let day_btn = document.createElement('div');
    day_btn.setAttribute('class', 'day_btn');
    let btn = document.createElement('button');
    btn.setAttribute('class', 'btn');
    btn.setAttribute('class', 'btn-outline-warning');
    btn.setAttribute('type', 'button');

    switch (document.querySelector('.day').childElementCount) {
      case 3:
        MakeShowMeal(3);
        btn.innerHTML = '3rd Meal'
        btn.setAttribute('onclick', 'AppendThird');
        btn.addEventListener('click', () => {
          for (let i = 0; i < document.querySelector('.day').childElementCount; i++) {
            if (document.getElementsByClassName('day_print')[i] != undefined) {
              document.getElementsByClassName('day_print')[i].disabled = false;
            }
          }
          document.getElementsByClassName('day_print')[2].disabled = true;
        });
        break;
      case 4:
        MakeShowMeal(4);
        btn.innerHTML = '4th Meal'
        btn.setAttribute('onclick', 'AppendFourth');
        btn.addEventListener('click', () => {
          for (let i = 0; i < document.querySelector('.day').childElementCount - 1; i++) {
            if (document.getElementsByClassName('day_print')[i] != undefined) {
              document.getElementsByClassName('day_print')[i].disabled = false;
            }
          }
          document.getElementsByClassName('day_print')[3].disabled = true;
        });
        break;
      case 5:
        MakeShowMeal(5);
        btn.innerHTML = '5th Meal'
        btn.setAttribute('onclick', 'AppendFifth');
        btn.addEventListener('click', () => {
          for (let i = 0; i < 5; i++) {
            if (document.getElementsByClassName('day_print')[i] != undefined) {
              document.getElementsByClassName('day_print')[i].disabled = false;
            }
          }
          document.getElementsByClassName('day_print')[4].disabled = true;
        });
        break;
    }

    let day_print = document.createElement('div');
    day_print.setAttribute('class', 'day_print');

    let delete_btn = document.createElement('div');
    delete_btn.setAttribute('class', 'delete_btn');

    let btn_close = document.createElement('button');
    btn_close.setAttribute('class', 'btn-close');
    btn_close.setAttribute('type', 'button');
    btn_close.setAttribute('aria-label', 'Close');

    delete_btn.appendChild(btn_close);
    day_btn.appendChild(btn);
    day_meal.appendChild(day_btn);
    day_meal.appendChild(day_print);
    day_meal.appendChild(delete_btn);

    btn_close.addEventListener('click', () => {
      document.querySelector('.day').removeChild(day_meal);
      switch (day_meal.innerText) {
        case '3rd Meal':
          document.querySelector('.show_meal').removeChild(document.getElementsByClassName('meal_print')[2]);
          break;
        case '4th Meal':
          document.querySelector('.show_meal').removeChild(document.getElementsByClassName('meal_print')[3]);
          break;
        case '5th Meal':
          document.querySelector('.show_meal').removeChild(document.getElementsByClassName('meal_print')[4]);
          break;
      }
      console.log(day_meal.innerText);
      if (document.querySelector('.day').childElementCount < 6) {
        let add_btn = document.querySelector('.add_btn');
        add_btn.style.display = 'grid';
      }
    });

    document.querySelector('.day').insertBefore(day_meal, document.querySelector('.add_btn'));
  }
  if (document.querySelector('.day').childElementCount == 6) {
    let add_btn = document.querySelector('.add_btn');
    add_btn.style.display = 'none';
  }
}
//--------------------------입력한 식단 새로 만드는 함수--------------------------

function MakeShowMeal(text) {
  let meal_print = document.createElement('div');
  meal_print.setAttribute('class', 'meal_print');
  let show_txt = document.createElement('div');
  show_txt.setAttribute('class', 'show_txt');

  switch (text) {
    case 3:
      show_txt.innerHTML = '3rd Meal';
      break;
    case 4:
      show_txt.innerHTML = '4th Meal';
      break;
    case 5:
      show_txt.innerHTML = '5th Meal';
      break;
  }
  let meal_list = document.createElement('div');
  meal_list.setAttribute('class', 'meal_list');

  meal_print.appendChild(show_txt);
  meal_print.appendChild(meal_list);

  document.querySelector('.show_meal').appendChild(meal_print);

}
//--------------------------버튼 눌러서 식단 입력 박스 생기면 같이 출력박스 생김--------------------------

let total_list = new Array();
let total_kcal = new Array();
let total_carbo = new Array();
let total_pro = new Array();
let total_fat = new Array();

function TotalSumCarboList(n, name, cnt) {
  total_list.push(name);
  switch (n) {
    case 1:
      total_kcal.push(195 * cnt);
      total_carbo.push(43 * cnt);
      total_pro.push(4 * cnt);
      total_fat.push(1.4 * cnt);
      break;
    case 2:
      total_kcal.push(310 * cnt);
      total_carbo.push(70 * cnt);
      total_pro.push(5 * cnt);
      total_fat.push(1.5 * cnt);
      break;
    case 3:
      total_kcal.push(247 * cnt);
      total_carbo.push(41 * cnt);
      total_pro.push(13 * cnt);
      total_fat.push(4 * cnt);
      break;
    case 4:
      total_kcal.push(80 * cnt);
      total_carbo.push(15.2 * cnt);
      total_pro.push(2.3 * cnt);
      total_fat.push(1 * cnt);
      break;
    case 5:
      total_kcal.push(155 * cnt);
      total_carbo.push(37 * cnt);
      total_pro.push(1.4 * cnt);
      total_fat.push(0 * cnt);
      break;
    case 6:
      total_kcal.push(86 * cnt);
      total_carbo.push(20 * cnt);
      total_pro.push(1.9 * cnt);
      total_fat.push(0.1 * cnt);
      break;
    case 7:
      total_kcal.push(105 * cnt);
      total_carbo.push(27 * cnt);
      total_pro.push(1.3 * cnt);
      total_fat.push(0.4 * cnt);
      break;
    case 8:
      total_kcal.push(49 * cnt);
      total_carbo.push(11.7 * cnt);
      total_pro.push(1.4 * cnt);
      total_fat.push(0.4 * cnt);
      break;
    case 9:
      total_kcal.push(110 * cnt);
      total_carbo.push(21 * cnt);
      total_pro.push(3 * cnt);
      total_fat.push(2 * cnt);
      break;
    default:
      break;
  }
}
function TotalSumProList(n, name, cnt) {
  total_list.push(name);
  switch (n) {
    case 0:
      total_kcal.push(109 * cnt);
      total_carbo.push(0 * cnt);
      total_pro.push(23 * cnt);
      total_fat.push(1.2 * cnt);
      break;
    case 1:
      total_kcal.push(141 * cnt);
      total_carbo.push(1 * cnt);
      total_pro.push(25 * cnt);
      total_fat.push(2 * cnt);
      break;
    case 2:
      total_kcal.push(142.3 * cnt);
      total_carbo.push(8.2 * cnt);
      total_pro.push(22.5 * cnt);
      total_fat.push(2.2 * cnt);
      break;
    case 3:
      total_kcal.push(140 * cnt);
      total_carbo.push(20 * cnt);
      total_pro.push(14 * cnt);
      total_fat.push(0 * cnt);
      break;
    case 4:
      total_kcal.push(482 * cnt);
      total_carbo.push(0 * cnt);
      total_pro.push(40 * cnt);
      total_fat.push(28.6 * cnt);
      break;
    case 5:
      total_kcal.push(544 * cnt);
      total_carbo.push(1 * cnt);
      total_pro.push(53 * cnt);
      total_fat.push(35.4 * cnt);
      break;
    case 6:
      total_kcal.push(528 * cnt);
      total_carbo.push(1.3 * cnt);
      total_pro.push(34.2 * cnt);
      total_fat.push(40.2 * cnt);
      break;
    case 7:
      total_kcal.push(661 * cnt);
      total_carbo.push(1.2 * cnt);
      total_pro.push(34.5 * cnt);
      total_fat.push(56.4 * cnt);
      break;
    case 8:
      total_kcal.push(68 * cnt);
      total_carbo.push(0.5 * cnt);
      total_pro.push(6 * cnt);
      total_fat.push(5 * cnt);
      break;
    case 9:
      total_kcal.push(110 * cnt);
      total_carbo.push(0 * cnt);
      total_pro.push(20 * cnt);
      total_fat.push(4 * cnt);
      break;
    case 10:
      total_kcal.push(10 * cnt);
      total_carbo.push(1.5 * cnt);
      total_pro.push(21 * cnt);
      total_fat.push(2 * cnt);
      break;
    default:
      break;
  }
}
function TotalSumFatList(n, name, cnt) {
  total_list.push(name);
  switch (n) {
    case 0:
      total_kcal.push(161 * cnt);
      total_carbo.push(8.6 * cnt);
      total_pro.push(2 * cnt);
      total_fat.push(15 * cnt);
      break;
    case 1:
      total_kcal.push(50 * cnt);
      total_carbo.push(1 * cnt);
      total_pro.push(2 * cnt);
      total_fat.push(4 * cnt);
      break;
    case 2:
      total_kcal.push(50 * cnt);
      total_carbo.push(1 * cnt);
      total_pro.push(2 * cnt);
      total_fat.push(4 * cnt);
      break;
    case 3:
      total_kcal.push(130 * cnt);
      total_carbo.push(9 * cnt);
      total_pro.push(69 * cnt);
      total_fat.push(8 * cnt);
      break;
    default:
      break;
  }
}
function TotalSumOtherList(n, name, cnt) {
  total_list.push(name);
  switch (n) {
    case 0:
      total_kcal.push(85 * cnt);
      total_carbo.push(11 * cnt);
      total_pro.push(3 * cnt);
      total_fat.push(4 * cnt);
      break;
    case 1:
      total_kcal.push(72 * cnt);
      total_carbo.push(19 * cnt);
      total_pro.push(0.3 * cnt);
      total_fat.push(0.2 * cnt);
      break;
    case 2:
      total_kcal.push(188 * cnt);
      total_carbo.push(20 * cnt);
      total_pro.push(6 * cnt);
      total_fat.push(10 * cnt);
      break;
    case 3:
      total_kcal.push(249 * cnt);
      total_carbo.push(21 * cnt);
      total_pro.push(12 * cnt);
      total_fat.push(13 * cnt);
      break;
    case 3:
      total_kcal.push(20 * cnt);
      total_carbo.push(0 * cnt);
      total_pro.push(4 * cnt);
      total_fat.push(0 * cnt);
      break;
    default:
      break;
  }
}
//--------------------------추가한 식단을 계산하기위해 일단 배열에 저장--------------------------

let total_sum = [0, 0, 0, 0];
function SumTotalNutri() {
  let tmp = [total_sum[0], total_sum[1], total_sum[2], total_sum[3]];
  for (let idx of total_kcal) {
    total_sum[0] += idx;
  }
  for (let idx of total_carbo) {
    total_sum[1] += idx;
  }
  for (let idx of total_pro) {
    total_sum[2] += idx;
  }
  for (let idx of total_fat) {
    total_sum[3] += idx;
  }
  for (let i = 0; i < 4; i++) {
    total_sum[i] -= tmp[i];
    total_sum[i].toFixed(2);
  }
  document.getElementById('total_kcal').innerText = total_sum[0] + 'kcal';
  document.getElementById('total_carbo').innerText = total_sum[1] + 'g';
  document.getElementById('total_pro').innerText = total_sum[2] + 'g';
  document.getElementById('total_fat').innerText = total_sum[3] + 'g';
}
//--------------------------추가한 식단을 계산후 출력--------------------------


let meal_num = [0, 0, 0, 0, 0]; //식단 박스에 추가한 식단 개수 체크
function CheckBoxNum(name) {
  //total 배열은 식단 박스에 관계없이 저장하므로 각각의 식단박스일 때
  //저장한 식품의 개수를 meal_num 배열에 저장
  //ex) day_meal2일때 저장한 식품의 개수 -> meal_num[1]
  switch (name) {
    case 'day_meal1':
      meal_num[0]++;
      break;
    case 'day_meal2':
      meal_num[1]++;
      break;
    case 'day_meal3':
      meal_num[2]++;
      break;
    case 'day_meal4':
      meal_num[3]++;
      break;
    case 'day_meal5':
      meal_num[4]++;
      break;
  }
}
//--------------------------식단 박스 호출 횟수 저장 -> 추가한 식단 삭제시 인덱스 계산할때 씀--------------------------

function MinusTotalSum(name, num) {
  switch (name) {
    case 'day_meal1':
      let cnt = 0;
      for (let i = 0; i < meal_num[0]; i++) {
        if (cnt == num) {
          //day_meal1이므로 0부터 day_meal1일때 입력한 식품의 개수까지
          //식단 박스에서 삭제한 식품의 인덱스(num)를 넘겨 cnt를 0부터 증가시켜
          //cnt가 num과 같을 때 i가 배열에서 삭제된 항목의 인덱스
          total_sum[0] -= total_kcal[i];
          total_sum[1] -= total_carbo[i];
          total_sum[2] -= total_pro[i];
          total_sum[3] -= total_fat[i];

          total_sum[0].toFixed(2);
          total_sum[1].toFixed(2);
          total_sum[2].toFixed(2);
          total_sum[3].toFixed(2);

          total_list.splice(i, 1);
          total_kcal.splice(i, 1);
          total_carbo.splice(i, 1);
          total_pro.splice(i, 1);
          total_fat.splice(i, 1);
          //해당 배열에서 i번째 인덱스부터 1개만큼 삭제
        }
        cnt++;
      }
      break;
    case 'day_meal2':
      let cnt1 = 0;
      for (let i = meal_num[0]; i < (meal_num[0] + meal_num[1]); i++) {
        if (cnt1 == num) {
          //total 배열은 식단 박스에 관계없이 저장하므로 각각의 식단박스일 때
          //저장한 식품의 개수를 meal_num 배열에 저장
          //ex) day_meal2일때 저장한 식품의 개수 -> meal_num[1]
          total_sum[0] -= total_kcal[i];
          total_sum[1] -= total_carbo[i];
          total_sum[2] -= total_pro[i];
          total_sum[3] -= total_fat[i];

          total_sum[0].toFixed(2);
          total_sum[1].toFixed(2);
          total_sum[2].toFixed(2);
          total_sum[3].toFixed(2);

          total_list.splice(i, 1);
          total_kcal.splice(i, 1);
          total_carbo.splice(i, 1);
          total_pro.splice(i, 1);
          total_fat.splice(i, 1);
        }
        cnt1++;
      }
      break;
    case 'day_meal3':
      let cnt2 = 0;
      for (let i = (meal_num[0] + meal_num[1]);
        i < (meal_num[0] + meal_num[1] + meal_num[2]); i++) {
        if (cnt2 == num) {
          total_sum[0] -= total_kcal[i];
          total_sum[1] -= total_carbo[i];
          total_sum[2] -= total_pro[i];
          total_sum[3] -= total_fat[i];

          total_sum[0].toFixed(2);
          total_sum[1].toFixed(2);
          total_sum[2].toFixed(2);
          total_sum[3].toFixed(2);

          total_list.splice(i, 1);
          total_kcal.splice(i, 1);
          total_carbo.splice(i, 1);
          total_pro.splice(i, 1);
          total_fat.splice(i, 1);
        }
        cnt2++;
      }
      break;
    case 'day_meal4':
      let cnt3 = 0;
      for (let i = (meal_num[0] + meal_num[1] + meal_num[2]);
        i < (meal_num[0] + meal_num[1] + meal_num[2] + meal_num[3]); i++) {
        if (cnt3 == num) {
          total_sum[0] -= total_kcal[i];
          total_sum[1] -= total_carbo[i];
          total_sum[2] -= total_pro[i];
          total_sum[3] -= total_fat[i];

          total_sum[0].toFixed(2);
          total_sum[1].toFixed(2);
          total_sum[2].toFixed(2);
          total_sum[3].toFixed(2);

          total_list.splice(i, 1);
          total_kcal.splice(i, 1);
          total_carbo.splice(i, 1);
          total_pro.splice(i, 1);
          total_fat.splice(i, 1);
        }
        cnt3++;
      }
      break;
    case 'day_meal5':
      let cnt4 = 0;
      for (let i = (meal_num[0] + meal_num[1] + meal_num[2] + meal_num[3]);
        i < (meal_num[0] + meal_num[1] + meal_num[2] + meal_num[3] + meal_num[4]); i++) {
        if (cnt4 == num) {
          total_sum[0] -= total_kcal[i];
          total_sum[1] -= total_carbo[i];
          total_sum[2] -= total_pro[i];
          total_sum[3] -= total_fat[i];

          total_sum[0].toFixed(2);
          total_sum[1].toFixed(2);
          total_sum[2].toFixed(2);
          total_sum[3].toFixed(2);

          total_list.splice(i, 1);
          total_kcal.splice(i, 1);
          total_carbo.splice(i, 1);
          total_pro.splice(i, 1);
          total_fat.splice(i, 1);
        }
        cn4t++;
      }
      break;
  }

}
//--------------------------총합에서 클릭한 항목 빼줌--------------------------

function UserIuputSave(){
  if(document.getElementsByClassName('input_name')[1].value != ""){
    let name = document.getElementsByClassName('input_name')[1];
    let kcal = document.getElementsByClassName('input_kcal')[1];
    let carbo = document.getElementsByClassName('input_carbo')[1];
    let pro = document.getElementsByClassName('input_pro')[1];
    let fat = document.getElementsByClassName('input_fat')[1];

    let input;
    input = [name.value, kcal.value, carbo.value, pro.value, fat.value];

    let day_meal3 = document.getElementsByClassName('day_print')[2];
    let day_meal4 = document.getElementsByClassName('day_print')[3];
    let day_meal5 = document.getElementsByClassName('day_print')[4];

    total_list.push(name.value);
    total_kcal.push(kcal.value);
    total_carbo.push(carbo.value);
    total_pro.push(pro.value);
    total_fat.push(fat.value);

    SumTotalNutri();
  
    if (day_meal1.disabled || day_meal2.disabled || (day_meal3 != undefined && day_meal3.disabled == true)
      || (day_meal4 != undefined && day_meal4.disabled == true) || (day_meal5 != undefined && day_meal5.disabled == true)) {
      if (day_meal1.disabled) {
        CheckBoxNum('day_meal1');
        console.log(name);
        CreateNewDiv(name.value, " ", 'day_meal1');
        CreateNewDiv(name.value, " ", 'meal_list1');
      }
      else if (day_meal2.disabled) {
        CheckBoxNum('day_meal2');
        CreateNewDiv(name.value, " ", 'day_meal2');
        CreateNewDiv(name.value, " ", 'meal_list2');
      }
      else if (day_meal3 != undefined && day_meal3.disabled) {
        CheckBoxNum('day_meal3');
        CreateNewDiv(name.value, " ", 'day_meal3');
        CreateNewDiv(name.value, " ", 'meal_list3');
      }
      else if (day_meal4 != undefined && day_meal4.disabled) {
        CheckBoxNum('day_meal4');
        CreateNewDiv(name.value, " ", 'day_meal4');
        CreateNewDiv(name.value, " ", 'meal_list4');
      }
      else if (day_meal5 != undefined && day_meal5.disabled) {
        CheckBoxNum('day_meal5');
        CreateNewDiv(name.value, " ", 'day_meal5');
        CreateNewDiv(name.value, " ", 'meal_list5');
      }
    }
    else {
      alert('식단을 추가하실 박스를 선택하세요');
    }

    name.value = "";
    kcal.value = "";
    carbo.value = "";
    pro.value = "";
    fat.value = "";

  }
}
//--------------------------사용자가 입력한 식단 추가--------------------------



// const newDiv = document.querySelectorAll('.new')

// const total_kcal = document.getElementById('total_kcal');
// const total_carbo = document.getElementById('total_carbo');
// const total_pro = document.getElementById('total_pro');
// const total_fat = document.getElementById('total_fat');

// const fisrt_meal = document.getElementById('first_meal');
// const second_meal = document.getElementById('second_meal');
// const third_meal = document.getElementById('third_meal');

// function SumTotalNutri(name){
//   switch(name){
//     case 'first_meal':
//       console.log(fisrt_meal.childNodes);
//       break;
//     case 'second_meal':
//       break;
//     case 'third_meal':
//       break;
//   }
// }

// jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
// jQuery('.quantity').each(function() {
//   var spinner = jQuery(this),
//     input = spinner.find('input[type="number"]'),
//     btnUp = spinner.find('.quantity-up'),
//     btnDown = spinner.find('.quantity-down'),
//     min = input.attr('min'),
//     max = input.attr('max');

//   btnUp.click(function() {
//     var oldValue = parseFloat(input.val());
//     if (oldValue >= max) {
//       var newVal = oldValue;
//     } else {
//       var newVal = oldValue + 1;
//     }
//     spinner.find("input").val(newVal);
//     spinner.find("input").trigger("change");
//   });

//   btnDown.click(function() {
//     var oldValue = parseFloat(input.val());
//     if (oldValue <= min) {
//       var newVal = oldValue;
//     } else {
//       var newVal = oldValue - 1;
//     }
//     spinner.find("input").val(newVal);
//     spinner.find("input").trigger("change");
//   });

// });
//--------------------------식단 개수 입력 input--------------------------

