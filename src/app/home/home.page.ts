import { Component } from '@angular/core';

declare var RazorpayCheckout: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  pay(){
    let options = {
      description: 'Ionic Razorpay Payments Demo',
      currency: "INR", // your 3 letter currency code
      key: "", // your test/live Key Id from Razorpay settings dashboard
      amount: 100, // Payment amount 
      name: 'Ionic Razorpay Demo', 
      prefill: {
        email: 'demopay@sunilk.work',
        contact: '123456789',
        name: 'Ionic Razorpay Demo'
      },
      theme: {
        color: '#fefd23'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    let successCallback = function (payment_id) {
      console.log('payment_id: ' + payment_id);
      //if payment id is received (success), here you can update your database like firebase, or mariadb etc.
    };

    let cancelCallback = function (error) {
      console.log(error.description + ' (Error ' + error.code + ')');
      //inform the user to re-initiate the payment based or error codes.
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

}
