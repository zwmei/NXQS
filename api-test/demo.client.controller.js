/**
 * Created by Wayne on 15/8/19.
 */

$(function () {
  //var serverAddress = 'http://www.zzvan.com/'; //柱柱测试平台
  //var serverAddress = 'http://localhost:3002/'; //柱柱测试平台
  //var serverAddress = 'http://api.zhuzhu56.com/'; //柱柱测试平台
  var serverAddress = 'http://www.cvs001.com/';

  //zzvan 541149886@qq.com
  var secret_key = '6f21000b0b3a39d418359d6cebd0ed29cd613567afda29f1c85331c03cd0e49f6da3edbef7a146cbf0845c0ceaf84486'; //私钥, 申请开发者后从柱柱获取
  var public_key = 'c6bd846d9431e8bbf1680c13b9a24097d6183c4d4c1674572509c3ebe2cd27915a9c4908b48172627a2446fff0a877cd'; //私钥, 申请开发者后从柱柱获取
  var timestamp_A = getTimeString(new Date());
  var company_id = "55af3b313dc39a7415e8ba93";
  var order_number = 'zhuzhu-demo';

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

  var driverButton = $('body').find('.driver-button');
  driverButton.click(function () {
    var driverUrl = serverAddress + 'api/driver/list?'
      + 'signature=' + signature_A
      + '&timestamp=' + timestamp_A
      + '&company_id=' + company_id;

    window.open(driverUrl);
  });

  var detailButton = $('body').find('.detail-button');
  detailButton.click(function () {
    var detailUrl = serverAddress + 'api/orderpage?'
      + 'signature=' + signature_A
      + '&timestamp=' + timestamp_A
      + '&company_id=' + company_id
      + '&order_number=' + order_number;

    window.open(detailUrl);
  });

  var createButton = $('body').find('.create-button');
  createButton.click(function () {
    var createUrl = serverAddress + 'api/multiorder';
    $.ajax({
      data: {
        signature: '0d2df591bb7936d7ee9b7bd71ed0',
        timestamp: '20150702143030',
        company_id: company_id,
        group_name: 'default_group',
        order_infos: [{
          order_number: 'zhuzhu-8801' //值自己修改
          //其他参数选填，参考文档
        }, {
          order_number: 'zhuzhu-8802',
          goods: [{
            name: '苹果',
            count: 44,
            unit: '公斤',
            count2: 55,
            unit2: '吨',
            count3: 66,
            unit3: '公斤',
            price: 100
          }, {
            name: '梨子',
            count: 45,
            unit: '公斤',
            price: 101
          }, {
            name: '橘子',
            count: 46,
            unit: '公斤',
            price: 102
          }]
        }]
      },
      type: 'post',
      url: createUrl,
      dataType: 'json'
    }).done(function (data) {
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
