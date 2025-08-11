import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private serviceID = 'service_gmail';
  private templateID = 'template_deup2po';
  private publicKey = '38exujo8JHarLSGsG';

  sendMessage(formData: { name: string; email: string; message: string }) {
    return emailjs.send(
      this.serviceID,
      this.templateID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      this.publicKey
    );
  }
}
