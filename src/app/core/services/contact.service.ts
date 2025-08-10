import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactService {
  sendMessage(payload:{name:string,email:string,message:string}){
    // placeholder: replace with API call or email integration
    console.log('send message', payload);
    alert('Message submitted — replace ContactService.sendMessage with real backend integration.');
  }
}