import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './invalidEmailDomains';

const invalidEmailDomain = createInvalidDomainValidator(['gmail.com', 'yahoo.com', 'hotmail.com']);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  
  submitForm() {

    console.log(this.contactForm.valid);
    // if(this.senderNameControl.dirty) {
    //   alert('you changed the name field');
    // }
  }

}
