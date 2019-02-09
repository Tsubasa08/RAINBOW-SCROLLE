$(function(){

// ------------- 関数定義 -------------
// --- ↓テキスト挿入メソッド↓ ---
const textAdd1 = () => {
  $('#rainbowText').text('R');
}
const textAdd2 = () => {
  $('#rainbowText').text('RA');
}
const textAdd3 = () => {
  $('#rainbowText').text('RAI');
}
const textAdd4 = () => {
  $('#rainbowText').text('RAIN');
}
const textAdd5 = () => {
  $('#rainbowText').text('RAINB');
}
const textAdd6 = () => {
  $('#rainbowText').text('RAINBO');
}
const textAdd7 = () => {
  $('#rainbowText').text('RAINBOW');
}
const textAdd8 = () => {
  $('#rainbowText').text('RAINBOW ');
}
const textAdd9 = () => {
  $('#rainbowText').text('RAINBOW S');
}
const textAdd10 = () => {
  $('#rainbowText').text('RAINBOW SC');
}
const textAdd11 = () => {
  $('#rainbowText').text('RAINBOW SCR');
}
const textAdd12 = () => {
  $('#rainbowText').text('RAINBOW SCRO');
}
const textAdd13 = () => {
  $('#rainbowText').text('RAINBOW SCROL');
}
const textAdd14 = () => {
  $('#rainbowText').text('RAINBOW SCROLL');
}
const textAdd15 = () => {
  $('#rainbowText').text('RAINBOW SCROLLE');
}
// --- ↑テキスト挿入メソッド↑ ---

const imgAdd = () => { // --画像回転--
  $('#circle').fadeIn();
}
const stopLoading = () => { //ローディング画面を終了させる
  $('#load').slideUp(500);
}
const redSlide = () => { //red画像を挿入
  $('.red img').css('left', 200);
}


const textFunction1 = () => {
  setTimeout(textAdd1, 1000);
}
const textFunction2 = () => {
  setTimeout(textAdd2, 1200);
}
const textFunction3 = () => {
  setTimeout(textAdd3, 1400);
}
const textFunction4 = () => {
  setTimeout(textAdd4, 1600);
}
const textFunction5 = () => {
  setTimeout(textAdd5, 1800);
}
const textFunction6 = () => {
  setTimeout(textAdd6, 2000);
}
const textFunction7 = () => {
  setTimeout(textAdd7, 2200);
}
const textFunction8 = () => {
  setTimeout(textAdd8, 2400);
}
const textFunction9 = () => {
  setTimeout(textAdd9, 2400);
}
const textFunction10 = () => {
  setTimeout(textAdd10, 2600);
}
const textFunction11 = () => {
  setTimeout(textAdd11, 2800);
}
const textFunction12 = () => {
  setTimeout(textAdd12, 3000);
}
const textFunction13 = () => {
  setTimeout(textAdd13, 3200);
}
const textFunction14 = () => {
  setTimeout(textAdd14, 3400);
}
const textFunction15 = () => {
  setTimeout(textAdd15, 3600);
}
const imgFunction = () => {
  setTimeout(imgAdd, 3800);
}
const stopFunction = () => { //1.7秒待ち時間生成
  setTimeout(stopLoading,5500);
  // setTimeout(stopLoading,100);
}
const redFunction = () => {
  setTimeout(redSlide, 6000);
}



// ------------- 処理 -------------
$('h1').slideDown(800);

textFunction1();
textFunction2();
textFunction3();
textFunction4();
textFunction5();
textFunction6();
textFunction7();
textFunction8();
textFunction9();
textFunction10();
textFunction11();
textFunction12();
textFunction13();
textFunction14();
textFunction15();

imgFunction();

stopFunction();
redFunction();

});
