import {Component, OnInit} from '@angular/core';
import {ImageService} from "../image.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ContactService} from "./contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactCoverImage
  contactForm:FormGroup;

  constructor(private _imageService: ImageService,  private _formBuilder: FormBuilder, private _contactService: ContactService) {
    this.contactForm = this._formBuilder.group({});
  }

  ngOnInit() {
    this._imageService.setBannerPrefix();
    this.contactCoverImage = this._imageService.loadImage1920x940('banner-contactus.jpeg');


    // Create the selected product form
    this.contactForm = this._formBuilder.group({
      name: '',
      subject: '',
      email: '',
      phone: '',
      body: '',
    });
  }


  submitToContactUs() {
    // Get the product object
    const contact = this.contactForm.getRawValue();
    contact['email_type'] = 'contact_us';
    // Update the product on the server
    this._contactService.sendContact(contact).subscribe((academy) => {
      if (academy['result'] === 'success') {
        document.querySelector('div.contact-form').classList.add('hide');
        document.querySelector('div.success').classList.remove('hide');
      } else {
        document.querySelector('div.contact-form').classList.add('hide');
        document.querySelector('div.fail').classList.remove('hide');
      }
    });
  }
}
