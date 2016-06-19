/**
 * Created by Wayne on 15/8/19.
 */

$(function () {


  var serverAddress = 'http://183.131.144.72/';//长安民生专用
  var secret_key = "f12f69a32bd11e9efb8dd4a1805edd08dee203a6c16103863cc2c63214081f9c024b5ff671b72d83f36b7b0ebc763606"; //私钥, 申请开发者后从柱柱获取
  var public_key = "9740ca282faa3476bba056faecda645ecd89a470f589a554965c1e9915f76ee0245e86448f7bd075883885cfb21237be"; //私钥, 申请开发者后从柱柱获取
  var timestamp_A = getTimeString(new Date());
  var company_id = "5729f8dc5bd3e14f0f1f9aa8";

  //localhost 541149886@qq.com
  //var serverAddress = 'http://localhost:3002/'; //民生测试平台
  //var secret_key = '6f21000b0b3a39d418359d6cebd0ed296ad5b7e38b5218aaa6055c6a1e8931fd5bd3147a5b6fd1efe76ce5174a910051';
  //var public_key = 'c6bd846d9431e8bbf1680c13b9a24097e63a47ac1250a467465e51f1aa59174a75cc0f447b80b1f61a180b73aa1af726';
  //var timestamp_A = getTimeString(new Date());
  //var company_id = '5726fdec06e50d410a7df353';


  var signature_A = hex_md5(secret_key + '&' + public_key + '&' + timestamp_A);



  function formatTimeNumber(number) {
    return number > 10 ? number : '0' + number;
  }
  function getTimeString(datetime) {
    var info = {
      year: datetime.getFullYear(),
      month: (datetime.getMonth() + 1),
      date: datetime.getDate(),
      hour: datetime.getHours(),
      minute: datetime.getMinutes(),
      second: datetime.getSeconds()
    };

    var str = '';
    for (var pro in info) {
      str += formatTimeNumber(info[pro]);
    }
    return str;
  };

  function getGoodsDetail(r1, n1, count) {
    var details = [];

    for (var i = 0; i < count; i++) {

      details.push({
        so_reference: r1,
        ss_reference: n1,
        item_code: '底盘' + i,
        item_ident_code: '123456--' + i,
        order_reference: 'ABCDE--' + i,
        plan_box: 10 + i,
        plan_quantity: 100 + i,
        memo: '注意安全--' + i
      });

    }

    return details;
  }
  function getSheetInfos(ref_no, sheetCount, goodsCount) {
    var sheetInfos = [];

    for (var i = 0; i < sheetCount; i++) {
      sheetInfos.push({
        "so_reference": ref_no,
        "reference": ref_no + i,
        "customer_code": "郑州可乐",
        "shipping_date": "2016-05-05 11:53:23",
        "detail_infos": getGoodsDetail(ref_no, ref_no+i, goodsCount)
      });
    }
    return sheetInfos;
  }

  function getOrderInfos(ref_no, orderCount, sheetCount, goodsCount) {
    var orders = [];

    for (var i = 0; i < orderCount; i++) {
      orders.push({
        "reference": ref_no,
        "plate_no": "苏AH3033",
        "driver": "魏存住",
        "driver_mobile": "18721850339",
        "shipping_date": "2016-05-05 11:53:23",
        "pickup_check": "1",
        "delivery_check": "0",
        push_mobiles: ['13918429709', '13472423583'],
        sheet_infos: getSheetInfos(ref_no, sheetCount, goodsCount)
      });
    }
    return orders;
  }

  function getRoadNumber() {
    var roadNumber = $('.order-number').val();
    if(!roadNumber) {
      alert('请输入路单号');
      return '';
    }
    return roadNumber;
  }


  var createButton = $('body').find('.create-button');
  createButton.click(function () {
    var createUrl = serverAddress + 'api/multiorder';
    $.ajax({
      data: {
        signature: signature_A,
        timestamp: timestamp_A,
        company_id: company_id,
        group_name: 'default_group',
        order_infos: getOrderInfos(getRoadNumber(),1,2,3)
      },
      type: 'post',
      url: createUrl,
      dataType: 'json'
    }).done(function (data) {
      console.log(data);

      if (data.err) {
        alert(data.err);
      }
      else {
        alert('创建成功');
      }

    }).fail(function (err) {
      alert('创建失败' + err);
    });

  });

  var mapButton = $('body').find('.map-button');
  mapButton.click(function () {
    var mapUrl = serverAddress + 'api/order/map?'
      + 'signature=' + signature_A
      + '&timestamp=' + timestamp_A
      + '&company_id=' + company_id
      + '&reference_no=' + getRoadNumber();

    window.open(mapUrl);
  });

  var driverButton = $('body').find('.driver-button');
  driverButton.click(function () {
    var deleteUrl = serverAddress + 'api/delorder';

    $.ajax({
      data: {
        signature: signature_A,
        timestamp: timestamp_A,
        company_id: company_id,
        reference_no: getRoadNumber()
      },
      type: 'post',
      url: deleteUrl,
      dataType: 'json'
    }).done(function (data) {
      console.log(data);

    }).fail(function (err) {
      console.log(err);
    });


  });

  var detailButton = $('body').find('.detail-button');
  detailButton.click(function () {
    var detailUrl = serverAddress + 'api/order/detail/number';
    $.ajax({
      data: {
        signature: signature_A,
        timestamp: timestamp_A,
        company_id: company_id,
        reference_no: getRoadNumber()
      },
      type: 'post',
      url: detailUrl,
      dataType: 'json'
    }).done(function (data) {

      console.log(data);

    }).fail(function (err) {
      console.log(err);
    });

  });

});
