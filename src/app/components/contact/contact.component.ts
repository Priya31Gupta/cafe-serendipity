import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  content: string = '';
  from_name:string = '';
  from_email: string = '';
  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    emailjs.init("5Fuqf6p70pms79UWs");
  }
  validateEmail = (email) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) ? true : false
  };
  onSubmit() {
    if(!this.content || !this.from_name || !this.from_email) {
      this.toastr.error('Please Fill complete Data','Empty Fields')
      return;
    }
    if(!this.validateEmail(this.from_email)) {
      this.toastr.error('Please Enter Valid Email!');
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
        this.from_name = '';
        this.content = '';
        this.from_email = '';
        this.toastr.success('Mail Sent')
      }, (error) => {
        this.toastr.error('Something Went wrong!','Oops!')
      });
  }
}


