import {Component, OnInit} from '@angular/core';
import {ImageService} from "../image.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  shopCoverImage
  constructor(private _imageService: ImageService) {
  }

  ngOnInit() {
    this._imageService.setBannerPrefix();
    this.shopCoverImage = this._imageService.loadImage1920x940('banner-shop.jpg');
  }
}
