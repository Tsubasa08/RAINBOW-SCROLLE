$(function() {

// --- ハンバーガーメニュー ---
$('.toggle').click(function(){ //メニューアイコン
  $(this).toggleClass('active');
  if($(this).hasClass('active')) {
    $('.navMenu').addClass('active');
  } else {
    $('.navMenu').removeClass('active');
  }
});
$('.colors a').click(function(){ //内部リンク
  const id = $(this).attr('href');
  const position = $(id).offset().top;
  $('html, body').animate({
    'scrollTop': position + 1
  }, 500);
});


//--- トップに戻るボタン ---
$('#arrow-wrapper').click(function(){
  $('html, body').animate({
    'scrollTop': 0
  }, 500);
});


// ------------- 関数定義 -------------
// .color_fixed_付け外し
const fixedSerch = () => {
  if($('.color').hasClass('fixed')) {
    $('.fixed').removeClass('fixed');
  } else if($('.color').hasClass('fixed')) {
    $('.fixed').removeClass('fixed');
  }
}

// 画面表示切り替え
const redDisplay = () => {
  $('#rainbow-wrapper').css('background-color', 'red');
  $('.red .color').addClass('fixed');
}
const orangeDisplay = () => {
  $('#rainbow-wrapper').css('background-color', 'orange');
  $('#rainbow-wrapper .orange').css('background-color', 'orange');
  $('.orange .color').addClass('fixed');
  $('.orange .orangeImage').css('right', 200);
}
const yellowDisplay = () => {
  $('#rainbow-wrapper').css('background-color', 'gold');
  $('#rainbow-wrapper .yellow').css('background-color', 'gold');
  $('.yellow .color').addClass('fixed');
  $('.yellow .yellowImage').css('left', 200);
}
const greenDisplay = () => {
  $('#rainbow-wrapper').css('background-color', 'green');
  $('#rainbow-wrapper .green').css('background-color', 'green');
  $('.green .color').addClass('fixed');
  $('.green .greenImage').css('right', 200);
}
const blueDisplay = () => {
  $('#rainbow-wrapper').css('background-color', 'blue');
  $('#rainbow-wrapper .blue').css('background-color', 'blue');
  $('.blue .color').addClass('fixed');
  $('.blue .blueImage').css('left', 200);
}
const purpleDisplay = () => {
  $('#rainbow-wrapper').css('background-color', 'purple');
  $('#rainbow-wrapper .purple').css('background-color', 'purple');
  $('.purple .color').addClass('fixed');
  $('.purple .purpleImage').css('right', 200);
}
const aquaDisplay = () => {
  $('#rainbow-wrapper').css('background-color', 'skyblue');
  $('#rainbow-wrapper .aqua').css('background-color', 'skyblue');
  $('.aqua .color').addClass('fixed');
  $('.aqua .aquaImage').css('left', 200);
}

const mainDisplay = (color) => {
  switch(color) {
    case red:
      return redDisplay();
      break;
    case orange:
      return orangeDisplay();
      break;
    case yellow:
      return yellowDisplay();
      break;
    case green:
      return greenDisplay();
      break;
    case blue:
      return blueDisplay();
      break;
    case purple:
      return purpleDisplay();
      break;
    case aqua:
      return aquaDisplay();
      break;
  }
}


// Rainbow(画面切り替え)
const redFunciton = () => {
  $('#rainbow-wrapper').css('background-color', 'red');
  $('#rainbowColor .redImage').css('left', '50%');
  $('#rainbowColor .redImage').css('transform', 'translateY(-80%) translateX(-50%)');
}
const orangeFunction = () => {
  $('#rainbow-wrapper').css('background-color', 'orange');
  $('#rainbowColor .orangeImage').css('left', '50%');
  $('#rainbowColor .orangeImage').css('transform', 'translateY(-80%) translateX(-50%)');
}
const yellowFunction = () => {
  $('#rainbow-wrapper').css('background-color', 'yellow');
  $('#rainbowColor .yellowImage').css('left', '50%');
  $('#rainbowColor .yellowImage').css('transform', 'translateY(-80%) translateX(-50%)');
}
const greenFunction = () => {
  $('#rainbow-wrapper').css('background-color', 'green');
  $('#rainbowColor .greenImage').css('left', '50%');
  $('#rainbowColor .greenImage').css('transform', 'translateY(-80%) translateX(-50%)');
}
const blueFunction = () => {
  $('#rainbow-wrapper').css('background-color', 'blue');
  $('#rainbowColor .blueImage').css('left', '50%');
  $('#rainbowColor .blueImage').css('transform', 'translateY(-80%) translateX(-50%)');
}
const purpleFunction = () => {
  $('#rainbow-wrapper').css('background-color', 'purple');
  $('#rainbowColor .purpleImage').css('left', '50%');
  $('#rainbowColor .purpleImage').css('transform', 'translateY(-80%) translateX(-50%)');
}
const aquaFunction = () => {
  $('#rainbow-wrapper').css('background-color', 'skyblue');
  $('#rainbowColor .aquaImage').css('left', '50%');
  $('#rainbowColor .aquaImage').css('transform', 'translateY(-80%) translateX(-50%)');
}
const positionChange = () => { // Rainbow_画像配置変更
  $('.rainbow-wrapper .wrapper1').addClass('Addflex1');
  $('.rainbow-wrapper .wrapper2').addClass('Addflex2');
  $('.rainbow-wrapper img').addClass('imgSize');
  $('.rainbow-wrapper img').css('transform', 'translateY(0) translateX(0)');
  $('.rainbow-wrapper').css('padding-top', '280px');
  $('.rainbow-wrapper').delay(5000).addClass('rainbowBack');
}
const orangeAction = () => {
  setTimeout(orangeFunction, 1000);
}
const yellowAction = () => {
  setTimeout(yellowFunction, 2000);
}
const greenAction = () => {
  setTimeout(greenFunction, 3000);
}
const blueAction = () => {
  setTimeout(blueFunction, 4000);
}
const purpleAction = () => {
  setTimeout(purpleFunction, 5000);
}
const aquaAction = () => {
  setTimeout(aquaFunction, 6000);
}
const changeFunction = () => {
  setTimeout(positionChange, 7000);
}



// ------------- 【スクロールメソッド】 -------------
$(window).scroll(function(){
  const scrolleHeight = $(window).scrollTop();// スクロールトップポジションを取得
  $('#position').text(scrolleHeight);//スクロールトップポジションを表示


  // --- トップに戻るボタン ---
  if( scrolleHeight < 100) {
    $('#arrow-wrapper').fadeOut();//トップに戻るボタン_非表示
  } else {
    $('#arrow-wrapper').fadeIn();//トップに戻るボタン_表示
  }

  // --- メイン画面遷移 ---
  if(scrolleHeight >= 0 && scrolleHeight < 700) {
    fixedSerch();
    mainDisplay(red);
  } else if(scrolleHeight > 700 && scrolleHeight < 1400) {
    fixedSerch();
    mainDisplay(orange);
  }
  else if(scrolleHeight > 1400 && scrolleHeight < 2100) {
    fixedSerch();
    mainDisplay(yellow);
  } else if(scrolleHeight > 2100 && scrolleHeight < 2800) {
    fixedSerch();
    mainDisplay(green);
  } else if(scrolleHeight > 2800 && scrolleHeight < 3500) {
    fixedSerch();
    mainDisplay(blue);
  } else if(scrolleHeight > 3500 && scrolleHeight < 4200) {
    fixedSerch();
    mainDisplay(purple);
  } else if(scrolleHeight > 4200 && scrolleHeight < 4900) {
    fixedSerch();
    mainDisplay(aqua);
  }

  // --- メイン画面遷移(Rainbow) ---
  if(scrolleHeight > 4900) {
    fixedSerch();
    $('#rainbowColor .color').addClass('fixed');
    if($('#rainbow').hasClass('first')){ //→処理を1回だけ実行させる
      redFunciton();
      orangeAction();
      yellowAction();
      greenAction();
      blueAction();
      purpleAction();
      aquaAction();
      changeFunction();// Rainbow_画像配置変更
    }
    $('#rainbow').removeClass('first'); //→処理を1回だけ実行させる
  }
});

});
