/**
 * Created by wayne on 16/7/26.
 */



$(function () {


  $('.more-button').click(function () {
    //已经展开
    if ($(this).hasClass('more')) {
      $('.text-container').addClass('close');

      $(this).removeClass('more');
      $(this).text('查看更多');
    }
    else {
      $('.text-container').removeClass('close');
      $(this).addClass('more');
      $(this).text('收起');
    }
  });


  var isStopTimer = false;
  function getRandomNumber() {
    return Math.round((Math.random() * 8)) + 1;
  }
  function repeatSth(startTime, totalTime, eachCallback, endCallback) {
    setTimeout(function () {
      startTime += 50;

      if (startTime === totalTime || isStopTimer) {
        return endCallback();
      }

      eachCallback();
      repeatSth(startTime, totalTime, eachCallback, endCallback);
    }, 50);
  }


  $('.winner-number .do-button').click(function () {
    var button = $(this);

    if (button.hasClass('busy')) {
      return isStopTimer = true;
    }

    isStopTimer = false;
    button.addClass('busy');

    repeatSth(0, 5*1000, function () {
      $('.winner-number .number').text(getRandomNumber());

    }, function () {
      button.removeClass('busy');
    });

  });

  Qiniu.domain = 'https://dn-agilepops.qbox.me/';
  var imgLink = Qiniu.watermark({
    mode: 2,  // 文字水印
    text: '2016/08/18 14:03', // 水印文字，mode = 2时，必需
    dissolve: 90,          // 透明度，取值范围1-100，非必需，下同
    gravity: 'SouthEast',  // 水印位置，同上
    fontsize: 500,         // 字体大小，单位：缇
    font : '黑体',          // 水印文字字体
    dx: 35,  // 横轴边距，单位：像素(px)
    dy: 25,  // 纵轴边距，单位：像素(px)
    fill: '#FF6666'        // 水印文字颜色，RGB格式，可以是颜色名称
  }, 'android1057b157b1201608151751190931');

  $('.water-maker').attr('src', imgLink);



  $.ajax({
    type: 'GET',
    url: 'http://search.anccnet.com/searchResult2.aspx?keyword=6901236340288',
    dataType: 'JSONP'
  }).done(function (data) {
    console.log(data);
  }).fail(function (err) {
    alert('获取失败' + err);
  });

  // $.get("test.php", {keyword:6901236340288}, function(data){ alert("Data Loaded: " + data); });

});