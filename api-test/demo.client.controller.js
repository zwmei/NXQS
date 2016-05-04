/**
 * Created by Wayne on 15/8/19.
 */

$(function () {
  //var serverAddress = 'http://www.zzvan.com/'; //柱柱测试平台
  //var serverAddress = 'http://localhost:3002/'; //柱柱测试平台
  //var serverAddress = 'http://api.zhuzhu56.com/'; //柱柱测试平台
  //var serverAddress = 'http://www.cvs001.com/';

  var serverAddress = 'http://183.131.144.72/';//长安民生专用
  var secret_key = "f12f69a32bd11e9efb8dd4a1805edd08dee203a6c16103863cc2c63214081f9c024b5ff671b72d83f36b7b0ebc763606"; //私钥, 申请开发者后从柱柱获取
  var public_key = "9740ca282faa3476bba056faecda645ecd89a470f589a554965c1e9915f76ee0245e86448f7bd075883885cfb21237be"; //私钥, 申请开发者后从柱柱获取
  var timestamp_A = getTimeString(new Date());
  var company_id = "5729f8dc5bd3e14f0f1f9aa8";




  //zzvan 541149886@qq.com
  //var secret_key = "6f21000b0b3a39d418359d6cebd0ed296ad5b7e38b5218aaa6055c6a1e8931fd5bd3147a5b6fd1efe76ce5174a910051"; //私钥, 申请开发者后从柱柱获取
  //var public_key = "c6bd846d9431e8bbf1680c13b9a24097e63a47ac1250a467465e51f1aa59174a75cc0f447b80b1f61a180b73aa1af726"; //私钥, 申请开发者后从柱柱获取
  //var timestamp_A = getTimeString(new Date());
  //var company_id = "5726fdec06e50d410a7df353";
  //var order_number = 'zhuzhu-demo';

  ////localhost 541149886@qq.com
  //var secret_key = 'f12f69a32bd11e9efb8dd4a1805edd08c6cb0483a289cb5640a90278956649624304c62c7e61303ff3d8bd285fb88e23';
  //var public_key = '9740ca282faa3476bba056faecda645eee203e957b27a57649f46017abc73eaaac0fd121ba39675c74b8ff826a90a72a';
  //var timestamp_A = getTimeString(new Date());
  //var company_id = '55b383d77eb2249f4c19758f';
  //var order_number = 'zhuzhu-8802';

  //localhost 13918429709@163.com
  //var secret_key = 'f12f69a32bd11e9efb8dd4a1805edd08c6cb0483a289cb5640a90278956649624304c62c7e61303ff3d8bd285fb88e23';
  //var public_key = '9740ca282faa3476bba056faecda645eee203e957b27a57649f46017abc73eaaac0fd121ba39675c74b8ff826a90a72a';
  //var timestamp_A = getTimeString(new Date());
  //var company_id = '55b383d77eb2249f4c19758f';
  //var order_number = 'google-001';

  //zhuzhu56 541149886@qq.com
  //var secret_key = 'f12f69a32bd11e9efb8dd4a1805edd08c6cb0483a289cb5640a90278956649624304c62c7e61303ff3d8bd285fb88e23';
  //var public_key = '9740ca282faa3476bba056faecda645eee203e957b27a57649f46017abc73eaaac0fd121ba39675c74b8ff826a90a72a';
  //var timestamp_A = getTimeString(new Date());
  //var company_id = '55b383d77eb2249f4c19758f';
  //var order_number = 'microsoft-1';





  var signature_A = hex_md5(secret_key + '&' + public_key + '&' + timestamp_A);

  var mapButton = $('body').find('.map-button');
  mapButton.click(function () {
    var mapUrl = serverAddress + 'api/order/map?'
      + 'signature=' + signature_A
      + '&timestamp=' + timestamp_A
      + '&company_id=' + company_id
      + '&reference_no=' + '长江一号'

    window.open(mapUrl);
  });



  var driverButton = $('body').find('.driver-button');
  driverButton.click(function () {
    //var driverUrl = serverAddress + 'api/driver/list?'
    //  + 'signature=' + signature_A
    //  + '&timestamp=' + timestamp_A
    //  + '&company_id=' + company_id;
    //
    //window.open(driverUrl);



    var createUrl = serverAddress + 'api/delorder';


    $.ajax({
      data: {
        signature: signature_A,
        timestamp: timestamp_A,
        company_id: company_id,
        reference_no:'长江一号'
      },
      type: 'post',
      url: createUrl,
      dataType: 'json'
    }).done(function (data) {
      console.log(data);

    }).fail(function (err) {
      console.log(err);
    });


  });

  var detailButton = $('body').find('.detail-button');
  detailButton.click(function () {
    //var detailUrl = serverAddress + 'api/orderpage?'
    //  + 'signature=' + signature_A
    //  + '&timestamp=' + timestamp_A
    //  + '&company_id=' + company_id
    //  + '&order_number=' + order_number;
    //
    //window.open(detailUrl);
    var createUrl = serverAddress + 'api/order/detail/number';


    $.ajax({
        data: {
          signature: signature_A,
          timestamp: timestamp_A,
          company_id: company_id,
          reference_no:'长江一号'
        },
        type: 'post',
        url: createUrl,
        dataType: 'json'
      }).done(function (data) {

     console.log(data);

    }).fail(function (err) {
      console.log(err);
    });

  });

  var createButton = $('body').find('.create-button');
  createButton.click(function () {
    var createUrl = serverAddress + 'api/multiorder';
    $.ajax({
      data: {
        signature: signature_A,
        timestamp: timestamp_A,
        company_id: company_id,
        group_name: 'default_group',
        order_infos: [
          {
            reference: '神州8号',
            plate_no: '沪B H001S',
            driver: '王小六',
            driver_mobile: '18721850339',
            shipping_date: '2016-06-01',
            pickup_check: 1,
            delivery_check: 1,
            sheet_infos: [
              {
                so_reference: '神州一号',
                reference: '神州一号001',
                customer_code: '长安民生',
                shipping_date: '2016-06-01',
                detail_infos: [
                  {
                    so_reference: '神州一号',
                    ss_reference: '神州一号001',
                    item_code: '底盘',
                    item_ident_code: '123456',
                    order_reference: 'ABCDE',
                    plan_box: 10,
                    plan_quantity: 100,
                    memo: '注意安全'
                  },
                  {
                    so_reference: '神州一号',
                    ss_reference: '神州一号001',
                    item_code: '轮胎',
                    item_ident_code: '654321',
                    order_reference: 'EDCBA',
                    plan_box: 1,
                    plan_quantity: 10,
                    memo: '注意安全咯'
                  }
                ]
              },
              {
                so_reference: '神州一号',
                reference: '神州二号001',
                customer_code: '长安民生2',
                shipping_date: '2016-06-02',
                detail_infos: [
                  {
                    so_reference: '神州一号',
                    ss_reference: '神州二号001',
                    item_code: '底盘',
                    item_ident_code: '123456',
                    order_reference: 'ABCDE',
                    plan_box: 10,
                    plan_quantity: 100,
                    memo: '注意安全'
                  },
                  {
                    so_reference: '神州一号',
                    ss_reference: '神州二号001',
                    item_code: '轮胎',
                    item_ident_code: '654321',
                    order_reference: 'EDCBA',
                    plan_box: 1,
                    plan_quantity: 10,
                    memo: '注意安全咯'
                  }
                ]
              }
            ]
          },
          {
            reference: '长江8号',
            plate_no: '沪B H001S',
            driver: '王小五',
            driver_mobile: '18721850339',
            shipping_date: '2016-06-01',
            pickup_check: 1,
            delivery_check: 1,
            sheet_infos: [
              {
                so_reference: '长江一号',
                reference: '长江一号001',
                customer_code: '长安民生',
                shipping_date: '2016-06-01',
                detail_infos: [
                  {
                    so_reference: '长江一号',
                    ss_reference: '长江一号001',
                    item_code: '底盘',
                    item_ident_code: '123456',
                    order_reference: 'ABCDE',
                    plan_box: 10,
                    plan_quantity: 100,
                    memo: '注意安全'
                  },
                  {
                    so_reference: '长江一号',
                    ss_reference: '长江一号001',
                    item_code: '轮胎',
                    item_ident_code: '654321',
                    order_reference: 'EDCBA',
                    plan_box: 1,
                    plan_quantity: 10,
                    memo: '注意安全咯'
                  }
                ]
              },
              {
                so_reference: '长江一号',
                reference: '长江二号001',
                customer_code: '长安民生2',
                shipping_date: '2016-06-02',
                detail_infos: [
                  {
                    so_reference: '长江一号',
                    ss_reference: '长江二号001',
                    item_code: '底盘',
                    item_ident_code: '123456',
                    order_reference: 'ABCDE',
                    plan_box: 10,
                    plan_quantity: 100,
                    memo: '注意安全'
                  },
                  {
                    so_reference: '长江一号',
                    ss_reference: '长江二号001',
                    item_code: '轮胎',
                    item_ident_code: '654321',
                    order_reference: 'EDCBA',
                    plan_box: 1,
                    plan_quantity: 10,
                    memo: '注意安全咯'
                  }
                ]
              }
            ]
          }
        ]
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


  //$.get('insert.client.view.html', function (data) {
  //  $('body').append(data);
  //});
});
