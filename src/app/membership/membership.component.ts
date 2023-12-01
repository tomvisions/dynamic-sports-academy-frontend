import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ImageService } from '../image.service';
import { Meta } from '@angular/platform-browser';
import { MembershipService } from './membership.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {
  academyForm:FormGroup;
  academyCoverImage;

  constructor(
    private _formBuilder: FormBuilder,
    private _membershipService: MembershipService,
    private _imageService:ImageService,
    private _metaTagService: Meta
  ) {
    this.academyForm = this._formBuilder.group({});
  }

  ngOnInit(): void {

    this._metaTagService.addTags([
      {
        name: 'keywords',
        content: 'Contact MamboleoFC, soccer training',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Tom Cruickshank' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
    this.academyCoverImage = this._imageService.loadImage1920x940('join-academy.jpg');

    // Create the selected product form
    this.academyForm = this._formBuilder.group({
      name: '',
      birth: '',
      placeOfBirth: '',
      nhis: '',
      residentalAddress: '',
      nameOfParentsOrGuardian:'',
      nameOfParentsOrGuardianPhone: '',
      school: '',
      classOrForm: '',
      schoolContact: '',
      formerClub: '',
    });
  }

  submitToMembership() {
    // Get the product object
    const membership = this.academyForm.getRawValue();
    membership['email_type'] = 'membership';
    // Update the product on the server
    this._membershipService.sendToMembership(membership).subscribe((joinAcademy) => {
      if (joinAcademy['result'] === 'success') {
        document.querySelector('div.contact-form').classList.add('hide');
        document.querySelector('div.success').classList.remove('hide');
      } else {
        document.querySelector('div.contact-form').classList.add('hide');
        document.querySelector('div.fail').classList.remove('hide');
      }
    });
  }
}
