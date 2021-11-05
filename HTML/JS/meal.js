function CarboList(){
  document.querySelector(".carbo_list").style.width = "250px";
  document.querySelector(".pro_list").style.width = "0px";
  document.querySelector(".fat_list").style.width = "0px";
  document.querySelector(".other_list").style.width = "0px";
  document.getElementById("carbo_txt").style.color = "orange";
  document.getElementById("pro_txt").style.color = "white";
  document.getElementById("fat_txt").style.color = "white";
  document.getElementById("other_txt").style.color = "white";
}
function ProList(){
  document.querySelector(".pro_list").style.width = "270px";
  document.querySelector(".carbo_list").style.width = "0px";
  document.querySelector(".fat_list").style.width = "0px";
  document.querySelector(".other_list").style.width = "0px";
  document.getElementById("carbo_txt").style.color = "white";
  document.getElementById("pro_txt").style.color = "orange";
  document.getElementById("fat_txt").style.color = "white";
  document.getElementById("other_txt").style.color = "white";
}
function FatList(){
  document.querySelector(".fat_list").style.width = "250px";
  document.querySelector(".carbo_list").style.width = "0px";
  document.querySelector(".pro_list").style.width = "0px";
  document.querySelector(".other_list").style.width = "0px";
  document.getElementById("carbo_txt").style.color = "white";
  document.getElementById("pro_txt").style.color = "white";
  document.getElementById("fat_txt").style.color = "orange";
  document.getElementById("other_txt").style.color = "white";
}
function OtherList(){
  document.querySelector(".other_list").style.width = "250px";
  document.querySelector(".carbo_list").style.width = "0px";
  document.querySelector(".pro_list").style.width = "0px";
  document.querySelector(".fat_list").style.width = "0px";
  document.getElementById("carbo_txt").style.color = "white";
  document.getElementById("pro_txt").style.color = "white";
  document.getElementById("fat_txt").style.color = "white";
  document.getElementById("other_txt").style.color = "orange";
}
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  // window.scrollTo(0, 150); -> 스크롤 자동이동
}
// 음식 목록 사이드 메뉴

function closeNav() {
  document.querySelector(".carbo_list").style.width = "0px";
  document.querySelector(".pro_list").style.width = "0px";
  document.querySelector(".fat_list").style.width = "0px";
  document.querySelector(".other_list").style.width = "0px";
  document.getElementById("mySidenav").style.width = "0";
  // window.scrollTo(0, 0);
}
function closeNav2() {
  document.querySelector(".carbo_list").style.width = "0px";
  document.querySelector(".pro_list").style.width = "0px";
  document.querySelector(".fat_list").style.width = "0px";
  document.querySelector(".other_list").style.width = "0px";
  document.getElementById("carbo_txt").style.color = "white";
  document.getElementById("pro_txt").style.color = "white";
  document.getElementById("fat_txt").style.color = "white";
  document.getElementById("other_txt").style.color = "white";
}
//닫기 버튼으로 닫기

$('ul.carbo li').click(function(){
  $(this).css("color", "orange"); 
  $(this).siblings().css("color", "white");  
  let idx = $(this).index()//선택한 인덱스 출력
  let info = PrintIdx("carbo_arr", idx);
  // let nutri = document.getElementsByClassName("main_name")[0];
  // nutri.innerHTML = "탄수화물";
  let name = document.getElementsByClassName("meal_name")[0];
  name.innerHTML = info[0];
  let kcal = document.getElementById('kcal');
  kcal.innerHTML = info[1]+"kcal";
  let carbo = document.getElementById('carbo');
  carbo.innerHTML = info[2]+"g";
  let pro = document.getElementById('pro');
  pro.innerHTML = info[3]+"g";
  let fat = document.getElementById('fat');
  fat.innerHTML = info[4]+"g";
  let path = SetCarboPicURL(idx);
  document.getElementById("meal_img").src = path[0];
  document.getElementById("img1").src = path[1];
  document.getElementById("img2").src = path[2];
  console.log(path);

  $("div.list1").click(function(){
    window.location.href = path[3];
  });
  $("div.list2").click(function(){
    window.location.href = path[4];
  });
});
$('ul.protein li').click(function(){
  $(this).css("color", "orange"); 
  $(this).siblings().css("color", "white");  
  let idx = $(this).index()//선택한 인덱스 출력
  let info = PrintIdx("pro_arr", idx);
  // let nutri = document.getElementsByClassName("main_info")[0];
  // nutri.innerHTML = "단백질";
  let name = document.getElementsByClassName("meal_name")[0];
  name.innerHTML = info[0];
  let kcal = document.getElementById('kcal');
  kcal.innerHTML = info[1]+"kcal";
  let carbo = document.getElementById('carbo');
  carbo.innerHTML = info[2]+"g";
  let pro = document.getElementById('pro');
  pro.innerHTML = info[3]+"g";
  let fat = document.getElementById('fat');
  fat.innerHTML = info[4]+"g";
  let path = SetProPicURL(idx);
  console.log(path);
  document.getElementById("meal_img").src = path[0];
  document.getElementById("img1").src = path[1];
  document.getElementById("img2").src = path[2];
  $("div.list1").click(function(){
    window.location.href = path[3];
  });
  $("div.list2").click(function(){
    window.location.href = path[4];
  });
});
$('ul.fat li').click(function(){
  $(this).css("color", "orange"); 
  $(this).siblings().css("color", "white");  
  let idx = $(this).index()//선택한 인덱스 출력
  let info = PrintIdx("fat_arr", idx);
  // let nutri = document.getElementsByClassName("main_info")[0];
  // nutri.innerHTML = "지방";
  let name = document.getElementsByClassName("meal_name")[0];
  name.innerHTML = info[0];
  let kcal = document.getElementById('kcal');
  kcal.innerHTML = info[1]+"kcal";
  let carbo = document.getElementById('carbo');
  carbo.innerHTML = info[2]+"g";
  let pro = document.getElementById('pro');
  pro.innerHTML = info[3]+"g";
  let fat = document.getElementById('fat');
  fat.innerHTML = info[4]+"g";
  let path = SetFatPicURL(idx);
  console.log(path);
  document.getElementById("meal_img").src = path[0];
  document.getElementById("img1").src = path[1];
  document.getElementById("img2").src = path[2];
  $("div.list1").click(function(){
    window.location.href = path[3];
  });
  $("div.list2").click(function(){
    window.location.href = path[4];
  });
});
$('ul.other li').click(function(){
  $(this).css("color", "orange"); 
  $(this).siblings().css("color", "white");  
  let idx = $(this).index()//선택한 인덱스 출력
  let info = PrintIdx("other_arr", idx);
  // let nutri = document.getElementsByClassName("main_info")[0];
  // nutri.innerHTML = "기타";
  let name = document.getElementsByClassName("meal_name")[0];
  name.innerHTML = info[0];
  let kcal = document.getElementById('kcal');
  kcal.innerHTML = info[1]+"kcal";
  let carbo = document.getElementById('carbo');
  carbo.innerHTML = info[2]+"g";
  let pro = document.getElementById('pro');
  pro.innerHTML = info[3]+"g";
  let fat = document.getElementById('fat');
  fat.innerHTML = info[4]+"g";
  let path = SetOtherPicURL(idx);
  console.log(path[3]);
  document.getElementById("meal_img").src = path[0];
  document.getElementById("img1").src = path[1];
  document.getElementById("img2").src = path[2];
  $("div.list1").click(function(){
    // window.location.href = path[3];
    window.open(path[3], '_blank');
  });
  $("div.list2").click(function(){
    window.location.href = path[4];
  });
});
/* ---------------------식단 카테고리 및 항목 선택시 경로 리턴--------------------- */

let carbo_arr = ["현미밥/195/43/4/1.4", "흰쌀밥/310/70/5/1.5", "통밀빵/247/41/13/4"
, "식빵/80/15.2/2.3/1", "고구마/155/37/1.4/0", "감자/86/20/1.9/0.1", "바나나/105/27/1.3/0.4"
, "단호박/49/11.7/1.4/0.4", "오트밀/110/21/3/2"];

let pro_arr = ["닭가슴살/109/0/23/1.2", "훈제 닭가슴살/141/1/25/2", "닭가슴살 스테이크/142.3/8.2/22.5/2.2"
, "닭가슴살 샐러드/140/20/14/0", "소 등심/482/0/40/28.6", "소 부채살/544/1/53/35.4" 
, "돼지 목살/528/1.3/34.2/40.2", "돼지 삼겹살/661/1.2/34.5/56.4", "계란/68/0.5/6/5"
, "훈제 연어/110/0/20/4", "프로틴/10/1.5/21/2"];

let fat_arr = ["아보카도/161/8.6/2/15", "슬라이스 치즈/50/1/2/4", "그릭 요거트/50/1/2/4"
, "우유/130/9/69/8"];

let other_arr = ["견과류/85/11/3/4", "사과/72/19/0.3/0.2", "에너지바/188/20/6/10"
, "프로틴바/249/21/12/13", "BCAA/20/0/4/0"];


function SpiltInfo(info){
  tmp_info = info.split("/");
  let tmp_arr = new Array();
  for(let idx of tmp_info){
    tmp_arr.push(idx);
  }
  return tmp_arr;
}
//음식명/칼로리/탄단지 분리후 리턴

function PrintIdx(arr_name, idx_num){
  let print_info = new Array();//식품 정보 담는 배열
  switch(arr_name){
    case "carbo_arr":
      print_info = SpiltInfo(carbo_arr[idx_num]);
      break;
    case "pro_arr":
      print_info = SpiltInfo(pro_arr[idx_num]);
      break; 
    case "fat_arr":
      print_info = SpiltInfo(fat_arr[idx_num]);
      break;   
    case "other_arr":
      print_info = SpiltInfo(other_arr[idx_num]);
      break;      
  }
  return print_info;
}
//음식 선택하면 배열이름과 클릭한 인덱스를 넘겨 비교후 리턴값 배열에 저장

function SetCarboPicURL(idx){
  let path = new Array();
  // let str = "http://127.0.0.1:5500/Body%20Planner/";
  let str = "";

  switch(idx){
    case 0://현미밥
      path.push(str + "images/brownrice/brownrice1.jpg");
      path.push(str + "images/brownrice/brownrice2.jpg");      
      path.push(str + "images/brownrice/brownrice3.jpg");
      path.push("https://www.coupang.com/vp/products/2040735026?itemId=3469361744&vendorItemId=70149590915&sourceType=srp_product_ads&clickEventId=d8b5aee0-57b7-4e17-9bb9-1f8dbb22aacd&korePlacement=15&koreSubPlacement=1&q=%ED%98%84%EB%AF%B8%EB%B0%A5&itemsCount=36&searchId=b35baac29e8f4977a08bd3dd5d04820b&rank=0&isAddedCart=");
      path.push("https://www.coupang.com/vp/products/5092859?itemId=1044607526&vendorItemId=74640571986&q=%ED%98%84%EB%AF%B8%EB%B0%A5&itemsCount=36&searchId=1b4b602026274efdb3b5d3247f905537&rank=0&isAddedCart=");
      break; 
    case 1://흰쌀밥
      path.push(str + "images/rice/rice1.jpg");
      path.push(str + "images/rice/rice2.jpg");
      path.push(str + "images/rice/rice3.jpg");
      path.push("https://www.coupang.com/vp/products/4798232314?itemId=6156607324&vendorItemId=4298753555&pickType=COU_PICK&q=%EC%8C%80%EB%B0%A5&itemsCount=36&searchId=f97dcdf4d209475e922904880f2aea8d&rank=1&isAddedCart=");
      path.push("https://www.coupang.com/vp/products/119144188?itemId=355183111&vendorItemId=75876219149&q=%EC%8C%80%EB%B0%A5&itemsCount=36&searchId=a4ed86180a644fbdbbd8d38cb50c3c40&rank=0&isAddedCart=");
      break;
    case 2://통밀빵
      path.push(str + "images/bread/bread1.jpg");
      path.push(str + "images/bread/bread2.jpg");
      path.push(str + "images/bread/bread3.jpg");
      path.push("https://www.coupang.com/vp/products/5712455907?itemId=9527685111&vendorItemId=76812400189&sourceType=srp_product_ads&clickEventId=4a7e6c70-6063-4bac-81a7-36c43e1830e1&korePlacement=15&koreSubPlacement=1&q=%ED%86%B5%EB%B0%80%EB%B9%B5&itemsCount=36&searchId=691627a0a9b8444193563d26621bfb8f&rank=0&isAddedCart=");
      path.push("https://www.coupang.com/vp/products/1744106100?itemId=2969688271&vendorItemId=70958112240&q=%ED%86%B5%EB%B0%80%EB%B9%B5&itemsCount=36&searchId=ea3cc94ceec14ee9a66e7bae20762127&rank=0&isAddedCart=");
      break;
    case 3://식빵
      path.push(str + "images/white_bread/white_bread1.jpg");
      path.push(str + "images/white_bread/white_bread2.jpg");
      path.push(str + "images/white_bread/white_bread3.jpg");
      path.push("https://www.coupang.com/vp/products/1293907676?itemId=2305896875&vendorItemId=70302769105&pickType=COU_PICK&q=%EC%8B%9D%EB%B9%B5&itemsCount=36&searchId=4395252ca9034f59946d09bf378fede9&rank=1&isAddedCart=");
      path.push("https://www.kurly.com/shop/goods/goods_view.php?&goodsno=53533");
      break;
    case 4://고구마
      path.push(str + "images/sweetpotato/sweetpotato1.jpg");
      path.push(str + "images/sweetpotato/sweetpotato2.jpg");
      path.push(str + "images/sweetpotato/sweetpotato3.jpg");
      path.push("https://rankingdak.com/shop/detail.php?pno=876F1F9954DE0AA402D91BB988D12CD4&ctype=1&cno1=");
      path.push("https://www.coupang.com/vp/products/5532336625?itemId=8685540289&vendorItemId=75972634868&pickType=COU_PICK&q=%EA%B3%A0%EA%B5%AC%EB%A7%88&itemsCount=36&searchId=c5fa8a042e03485f9618dbfee58288c2&rank=0&isAddedCart=");
      break;
    case 5://감자
      path.push(str + "images/potato/potato1.jpg");
      path.push(str + "images/potato/potato2.jpg");
      path.push(str + "images/potato/potato3.jpg");
      path.push("https://rankingdak.com/shop/detail.php?pno=293C3B96EDEA6588BC4B9415C3BE4E66&ctype=1&cno1=");
      path.push("https://www.kurly.com/shop/goods/goods_view.php?&goodsno=49249");
      break;
    case 6://바나나
      path.push(str + "images/banana/banana1.jpg");
      path.push(str + "images/banana/banana2.jpg");
      path.push(str + "images/banana/banana3.jpg");
      path.push("https://www.coupang.com/vp/products/218520566?itemId=676622340&vendorItemId=4743644012&q=%EB%B0%94%EB%82%98%EB%82%98&itemsCount=36&searchId=72eb35df416e4c7b8e6732b5674c13f2&rank=0&isAddedCart=");
      path.push("https://www.kurly.com/shop/goods/goods_view.php?&goodsno=31443");
      break;
    case 7://단호박
      path.push(str + "images/pumpkin/pumpkin1.jpg");
      path.push(str + "images/pumpkin/pumpkin2.jpg");
      path.push(str + "images/pumpkin/pumpkin3.jpg");
      path.push("https://rankingdak.com/shop/detail.php?pno=c99fe0eb3a2de3bce70c24ef3fa8f8c6&ctype=1&cno1=");
      path.push("https://www.coupang.com/vp/products/4881075757?itemId=6354834622&vendorItemId=73650115399&q=%EB%8B%A8%ED%98%B8%EB%B0%95&itemsCount=36&searchId=08509b4f3ba24883931d2a62479eaa7b&rank=0&isAddedCart=");
      break;
    case 8://오트밀
      path.push(str + "images/oatmeal/oatmeal1.jpg");
      path.push(str + "images/oatmeal/oatmeal2.jpg");
      path.push(str + "images/oatmeal/oatmeal3.jpg");
      path.push("https://www.coupang.com/vp/products/291586661?itemId=922303585&vendorItemId=74387457897&q=%EC%98%A4%ED%8A%B8%EB%B0%80&itemsCount=36&searchId=1f3506c2aab941c5912b96d7f3df1c27&rank=0&isAddedCart=");
      path.push("https://www.kurly.com/shop/goods/goods_view.php?&goodsno=51036");
      break;
  }
  return path;
}

function SetProPicURL(idx){
  let path = new Array();
  // let str = "http://127.0.0.1:5500/Body%20Planner/";
  let str = "";
  switch(idx){
    case 0://닭가슴살
      path.push(str + "images/chickenmeat/chicken_meat1.jpg");
      path.push(str + "images/chickenmeat/chicken_meat2.jpg");
      path.push(str + "images/chickenmeat/chicken_meat3.jpg");
      path.push("https://rankingdak.com/shop/detail.php?pno=CFF815DABB3555CF1DF47388BAA32B84&ctype=1&cno1=");
      path.push("https://www.coupang.com/vp/products/1577817399?itemId=2697968958&vendorItemId=70688366439&q=%EB%8B%AD%EA%B0%80%EC%8A%B4%EC%82%B4&itemsCount=36&searchId=b8ac597766d94b17905692db0d5b2480&rank=0&isAddedCart=");
      break; 
    case 1://훈제 닭가슴살
      path.push(str + "images/smoke/smoke1.jpg");
      path.push(str + "images/smoke/smoke2.jpg");
      path.push(str + "images/smoke/smoke3.jpg");
      path.push("https://rankingdak.com/shop/detail.php?pno=43B4BB96C3CB145280F157ACE0740DC3&ctype=1&cno1=");
      path.push("https://rankingdak.com/shop/detail.php?pno=0841E501109AD2474E51874DC351BD2B&ctype=1&cno1=");
      break;
    case 2://닭가슴살 스테이크
      path.push(str + "images/steak/steak1.jpg");
      path.push(str + "images/steak/steak2.jpg");
      path.push(str + "images/steak/steak3.jpg");
      path.push("https://rankingdak.com/shop/detail.php?pno=4e62e9f364fd87303a9e07df478d42f5&ctype=1&cno1=");
      path.push("https://rankingdak.com/shop/detail.php?pno=402505605AE8401EB9598484AE1472FF&ctype=1&cno1=");
      break;
    case 3://닭가슴살 샐러드
      path.push(str + "images/salad/salad1.jpg");
      path.push(str + "images/salad/salad2.jpg");
      path.push(str + "images/salad/salad3.jpg");
      path.push("https://rankingdak.com/shop/detail.php?pno=80CA4EE101D7CF153771824CC0B00098&ctype=1&cno1=");
      path.push("https://rankingdak.com/shop/detail.php?pno=cdd4e9bc33d1e67fa263273932720420&ctype=1&cno1=");
      break;
    case 4://소 등심
      path.push("images/beefback/beef_back1.jpg");
      path.push("images/beefback/beef_back2.jpg");
      path.push("images/beefback/beef_back3.jpg");
      path.push("https://www.kurly.com/shop/goods/goods_view.php?&goodsno=45296");
      path.push("https://www.kurly.com/shop/goods/goods_view.php?&goodsno=55607");
      break;
    case 5://소 부채살
      path.push(str + "images/beeffillet/beef_fillet1.jpg");
      path.push(str + "images/beeffillet/beef_fillet2.jpg");
      path.push(str + "images/beeffillet/beef_fillet3.jpg");
      path.push("https://www.kurly.com/shop/goods/goods_view.php?&goodsno=71381");
      path.push("https://www.kurly.com/shop/goods/goods_view.php?&goodsno=42626");
      break;
    case 6://돼지 목살
      path.push(str + "images/porkneck/pork_neck1.jpg");
      path.push(str + "images/porkneck/pork_neck2.jpg");
      path.push(str + "images/porkneck/pork_neck3.jpg");
      path.push("https://www.kurly.com/shop/goods/goods_view.php?&goodsno=29463");
      path.push("https://rankingdak.com/shop/detail.php?pno=52C64C72294407663E6F654F467BEF53&ctype=1&cno1=");
      break;
    case 7://돼지 삼겹살
      path.push(str + "images/porkbelly/pork_belly1.jpg");
      path.push(str + "images/porkbelly/pork_belly2.jpg");
      path.push(str + "images/porkbelly/pork_belly3.jpg");
      path.push("https://www.kurly.com/shop/goods/goods_view.php?&goodsno=59785");
      path.push("https://www.kurly.com/shop/goods/goods_view.php?&goodsno=49691");
      break;
    case 8://계란
      path.push(str + "images/egg/egg1.jpg");
      path.push(str + "images/egg/egg2.jpg");
      path.push(str + "images/egg/egg3.jpg");
      path.push("https://rankingdak.com/shop/detail.php?pno=a948136470133b3ae8759d25dc661a22&ctype=1&cno1=");
      path.push("https://www.kurly.com/shop/goods/goods_view.php?&goodsno=12658");
      break;
    case 9://프로틴
      path.push(str + "images/protein/protein1.jpg");
      path.push(str + "images/protein/protein2.jpg");
      path.push(str + "images/protein/protein3.jpg");
      path.push("https://rankingdak.com/shop/detail.php?pno=5061E9E272546D556C59C55E2853D22E&ctype=1&cno1=");
      path.push("https://rankingdak.com/shop/detail.php?pno=BCBF5E0AE48EF7E5439863381D1A69BF&ctype=1&cno1=");
      break;
    case 10://훈제 연어
      path.push(str + "images/salmon/salmon1.jpg");
      path.push(str + "images/salmon/salmon2.jpg");
      path.push(str + "images/salmon/salmon3.jpg");
      path.push("https://rankingdak.com/shop/detail.php?pno=40D1DD91595F074C0CBDA6B4C3A0ACE5&ctype=1&cno1=");
      path.push("https://rankingdak.com/shop/detail.php?pno=63F73CF1450F9D04D966DA4D2390C57C&ctype=1&cno1=");
      break;
  }
  return path;
}

function SetFatPicURL(idx){
  let path = new Array();
  // let str = "http://127.0.0.1:5500/Body%20Planner/";
  let str = "";
  switch(idx){
    case 0://아보카도
      path.push(str + "images/avocado/avocado1.jpg");
      path.push(str + "images/avocado/avocado2.jpg");
      path.push(str + "images/avocado/avocado3.jpg");
      path.push("https://rankingdak.com/shop/detail.php?pno=96276C4DB2D39C1529B9FDBFC9E5B2E6&ctype=1&cno1=");
      path.push("https://www.kurly.com/shop/goods/goods_view.php?&goodsno=491");
      break; 
    case 1://우유
      path.push(str + "images/milk/milk1.jpg");
      path.push(str + "images/milk/milk2.jpg");
      path.push(str + "images/milk/milk3.jpg");
      path.push("https://www.coupang.com/vp/products/4975075206?itemId=1018465839&vendorItemId=70483233265&q=%EC%9A%B0%EC%9C%A0&itemsCount=36&searchId=b8c192126c294cc1aae155749263fa36&rank=0&isAddedCart=");
      path.push("https://www.coupang.com/vp/products/1658294397?itemId=2825247014&vendorItemId=71156117594&q=%EC%9A%B0%EC%9C%A0&itemsCount=36&searchId=280e41515e83490f8a89016bf26ef727&rank=0&isAddedCart=");
      break;
    case 2://슬라이스 치즈
      path.push(str + "images/cheese/cheese.jpg");
      path.push(str + "images/cheese/cheese2.jpg");
      path.push(str + "images/cheese/cheese3.jpg");
      path.push("https://www.coupang.com/vp/products/1606628686?itemId=2744073920&vendorItemId=70734079663&q=%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4+%EC%B9%98%EC%A6%88&itemsCount=36&searchId=42c3c0eee7854bb7884bc1f99b099dd8&rank=0&isAddedCart=");
      path.push("https://www.coupang.com/vp/products/1606628686?itemId=2744072756&vendorItemId=70734079517&q=%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4+%EC%B9%98%EC%A6%88&itemsCount=36&searchId=5c9cc498cf3f4c40bc472e0eb9f55710&rank=0&isAddedCart=");
      break;
    case 3://그릭 요거트
      path.push(str + "images/yogurt/yogurt1.jpg");
      path.push(str + "images/yogurt/yogurt2.jpg");
      path.push(str + "images/yogurt/yogurt3.jpg");
      path.push("https://www.coupang.com/vp/products/168835899?itemId=483341289&vendorItemId=4216300440&sourceType=srp_product_ads&clickEventId=5d420fb9-aee0-4f81-8553-2b67dcaa4603&korePlacement=15&koreSubPlacement=1&q=%EA%B7%B8%EB%A6%AD+%EC%9A%94%EA%B1%B0%ED%8A%B8&itemsCount=36&searchId=c5fdbec83cb445a7a98be09054866146&rank=0&isAddedCart=");
      path.push("https://www.coupang.com/vp/products/5486462894?itemId=8480979834&vendorItemId=75768512471&q=%EA%B7%B8%EB%A6%AD+%EC%9A%94%EA%B1%B0%ED%8A%B8&itemsCount=36&searchId=9843aeacae814be8ab19d8474eb43546&rank=0&isAddedCart=");
      break;
  }
  return path;
}

function SetOtherPicURL(idx){
  let path = new Array();
  // let str = "http://127.0.0.1:5500/Body%20Planner/";
  let str = "";
  switch(idx){
    case 0://견과류
      path.push(str + "images/nuts/nuts1.jpg");
      path.push(str + "images/nuts/nuts2.jpg");
      path.push(str + "images/nuts/nuts3.jpg");
      path.push("https://www.coupang.com/vp/products/5259894?itemId=23843346&vendorItemId=3034995401&sourceType=srp_product_ads&clickEventId=c6cacb31-571b-4633-b2a2-9fafe747b70d&korePlacement=15&koreSubPlacement=1&q=%EA%B2%AC%EA%B3%BC%EB%A5%98&itemsCount=36&searchId=6470ea6a95944e0293cac4ec8ac85457&rank=0&isAddedCart=");
      path.push("https://rankingdak.com/shop/detail.php?pno=33eb1ff3a56711abdcbebf62e769e2bd&ctype=1&cno1=");
      break; 
    case 1://사과
      path.push(str + "images/apple/apple1.jpg");
      path.push(str + "images/apple/apple2.jpg");
      path.push(str + "images/apple/apple3.jpg");
      path.push("https://www.coupang.com/vp/products/324286997?itemId=1038296605&vendorItemId=5493710543&q=%EC%82%AC%EA%B3%BC&itemsCount=36&searchId=106e9437100945fd80e1dc4b2f8a6fae&rank=0&isAddedCart=");
      path.push("https://www.kurly.com/shop/goods/goods_view.php?&goodsno=35738");
      break;
    case 2://에너지바
      path.push(str + "images/energy/bar1.jpg");
      path.push(str + "images/energy/bar2.jpg");
      path.push(str + "images/energy/bar3.jpg");
      path.push("https://rankingdak.com/shop/detail.php?pno=6e24848fcca19115eee602266fde2b1e&ctype=1&cno1=");
      path.push("https://rankingdak.com/shop/detail.php?pno=593906AF0D138E69F49D251D3E7CBED0&ctype=1&cno1=");
      break;
    case 3://프로틴바
      path.push(str + "images/bar/bar1.jpg");
      path.push(str + "images/bar/bar2.jpg");
      path.push(str + "images/bar/bar3.jpg");
      path.push("https://rankingdak.com/shop/detail.php?pno=40882BEBD317419CFCEA3ADC3DCFAE6C&ctype=1&cno1=");
      path.push("https://rankingdak.com/shop/detail.php?pno=573C38BE55D418774B5EFC274BB36461&ctype=1&cno1=");
      break;
    case 4://BCAA
      path.push(str + "images/bcaa/bcaa1.jpg");
      path.push(str + "images/bcaa/bcaa2.jpg");
      path.push(str + "images/bcaa/bcaa3.jpg");
      path.push("https://www.coupang.com/vp/products/1205659418?itemId=2191825262&vendorItemId=4221596659&sourceType=srp_product_ads&clickEventId=98f5bf12-147b-41e6-b9d6-bfeb6ca9424e&korePlacement=15&koreSubPlacement=1&q=bcaa&itemsCount=36&searchId=b8efa121a75a40529611858977364b1c&rank=0&isAddedCart=");
      path.push("https://www.coupang.com/vp/products/1151825?itemId=4967930&vendorItemId=3234946544&q=bcaa&itemsCount=36&searchId=f17e405803b0419fbd67ea36a175b3f3&rank=0&isAddedCart=");
      break;
  }
  return path;
}
//음식 선택시 사진 및 웹사이트 url 리턴