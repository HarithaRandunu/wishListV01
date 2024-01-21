import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    senderName: new FormControl(''),
    senderEmail: new FormControl(''),
    senderMessage: new FormControl('')
  })

  
  submitForm() {

    console.log(this.contactForm.valid);
    // if(this.senderNameControl.dirty) {
    //   alert('you changed the name field');
    // }
  }

}
