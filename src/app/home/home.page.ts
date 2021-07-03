import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contactArray = [
    { name: 'แจ้งเหตุด้วยเหตุร้าย',phone: '191' }
    ,{ name: 'แจ้งเหตุเพลิงไหม้',phone: '199' }
    ,{ name: 'หน่วยแพทย์กู้ชีพ กทม.',phone: '1554' }
    ,{ name: 'ร่วมด้วยช่วยกัน',phone: '1677' }
    ,{ name: 'จส.100',phone: '1137' }
  ]
  call(contact){
    console.log('ok. ' + contact.name + ' ' + contact.phone);
    window.open('tel:' + contact.phone);
  }
}
