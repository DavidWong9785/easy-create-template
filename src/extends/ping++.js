const pingpp = require('./pingpp.js')

export default {
  callPingPay(charge) {
    pingpp.createPayment(charge, function (result, err) {
      if (result == "success") {
        // payment succeeded
      } else {
        console.log(result + " " + err.msg + " " + err.extra);
      }
    });
  }
}