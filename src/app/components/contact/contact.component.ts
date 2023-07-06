import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  content: string = '';
  from_name:string = '';
  from_email: string = '';
  constructor() { }

  ngOnInit(): void {
    emailjs.init("5Fuqf6p70pms79UWs");
  }
  onSubmit() {
    if(!this.content || !this.from_name || !this.from_email) {
      alert('Please Enter the Data!');
      return;
    }
    const templateParams = {
      to_email: 'priyakumarigupta790@gmail.com',
      from_name: this.from_name,
      message: this.content,
      from_email: this.from_email || 'priyakumarigupta790@gmail.com',
    };

    emailjs.send('service_4mgnmk3', 'contact_form', templateParams)
      .then(() => {
        alert('Mail sent');
        this.from_name = '';
        this.content = '';
        this.from_email = '';
        // Handle success
      }, (error) => {
        console.error('Error sending email:', error);
        // Handle error
      });
  }
}


