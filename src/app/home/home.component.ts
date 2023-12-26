import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class HomeComponent implements OnInit {
  homeArray;

  constructor(private _imageService:ImageService) { }


  ngOnInit(): void {

    this._imageService.setBannerPrefix();
    this.homeArray = [
      { // who we are
        imageDesktop: this._imageService.loadImage1920x940('soccer-field.jpeg'),
      //  imageDesktop: "https://placehold.co/1920x940",// this._imageService.loadImage1920x940('P1120107.JPG'),
        imageMobile: "https://placehold.co/270x270", //this._imageService.loadImage270x270('P1120107.JPG'),
        title: "Welcome to our Soccer Club",
        message: "Great Club here!",
        link: "/about",
        clickMore: "Read more"
      },
      { // charles video
        imageDesktop: this._imageService.loadImage1920x940('team-banner.jpg'), //this._imageService.loadImage1920x940('P1120108.JPG'),
        imageMobile: "https://placehold.co/270x270",//this._imageService.loadImage270x270('P1120108.JPG'),
        title: "Come join our team",
        message: "",
        link: "/team",
        clickMore: "Teams",
        class: "glightbox"
      },
    ]
  }
}
