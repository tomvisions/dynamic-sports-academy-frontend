import {Component, OnInit} from '@angular/core';
import {ImageService} from "../image.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {
  eventCoverImage;

  constructor(private _imageService: ImageService) {
  }

  ngOnInit() {
    this._imageService.setBannerPrefix();
    this.eventCoverImage = this._imageService.loadImage1920x940('banner-events.jpeg');

  }

}
