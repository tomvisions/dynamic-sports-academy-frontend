import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Academy } from './academy.type';
import { AcademyService } from './academy.service';
import { ImageService } from '../image.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-join-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.scss']
})
export class AcademyComponent {
  academyForm:FormGroup;
  academyCoverImage;

  constructor(
    private _formBuilder: FormBuilder,
    private _academyService: AcademyService,
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

    this._imageService.setBannerPrefix();
    this.academyCoverImage = this._imageService.loadImage1920x940('banner-academy.jpeg');

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

  submitToAcademy() {
    // Get the product object
    const joinAcademy = this.academyForm.getRawValue();
    joinAcademy['email_type'] = 'academy';
    // Update the product on the server
    this._academyService.sendToAcademy(joinAcademy).subscribe((academy) => {
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



