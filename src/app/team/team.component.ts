import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  aboutCoverImage;
  aboutSideImage;

  constructor(private _imageService: ImageService, private _metaTagService: Meta) {
  }


  ngOnInit(): void {
   // this.aboutCoverImage = this._imageService.loadImage1920x940('who-we-are-home.jpg');
   // this.aboutSideImage = this._imageService.loadImage450x450('about-side-image.jpg');
    this.aboutCoverImage = 'https://placehold.co/1920x940'//this._imageService.loadImage1920x940('who-we-are-home.jpg');
    this.aboutSideImage =  'https://placehold.co/270x284'//'' this._imageService.loadImage450x450('about-side-image.jpg');

    this._metaTagService.addTags([
      {
        name: 'keywords',
        content: 'About MamboleoFC, soccer training',
      },
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content: 'Tom Cruickshank'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD'},
      {charset: 'UTF-8'},
    ]);
  }
}
