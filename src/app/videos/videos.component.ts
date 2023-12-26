import {AfterContentInit, AfterViewChecked, Component, OnInit, ViewEncapsulation} from '@angular/core';
import Video from 'lightgallery/plugins/video';
//import lgVideo from  'lightgallery/plugins/video';
//import Zoom from 'lightgallery/plugins/zoom';
import { LightGallery } from 'lightgallery/lightgallery';
import Autoplay from "lightgallery/plugins/autoplay";
import {ImageService} from "../image.service";
import { BeforeSlideDetail, HasVideoDetail } from 'lightgallery/lg-events';


@Component({
  selector: 'app-video',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideosComponent implements OnInit, AfterContentInit, AfterViewChecked {
  private lightGallery!: LightGallery;
  private needRefresh = false;
  videosCoverImage;
  galleryCode;
  onBeforeSlide;
  onHasVideo;

  onInit = (detail): void => {
    this.lightGallery = detail.instance;
  };

  ngAfterViewChecked() {
    this.needRefresh = true;
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }

  settings = {
    plugins: [Video]
  };

  items = [
    {
      id: '1',
      size: '1400-933',
      src: 'https://www.youtube.com/embed/HbH0yNNTR-o',
      thumb: 'https://img.youtube.com/vi/HOYpAgWPTps/0.jpg',
    },
  ];

  constructor(private _imageService: ImageService) {
  }


  ngAfterContentInit() {

  }

  ngOnInit() {
    this.galleryCode = [
      {code:"HbH0yNNTR-o"},
      {code:"TFoX-AnQJEM"},
      {code:"QBNQmeeJScc"}
    ]


    this.onBeforeSlide = (detail: BeforeSlideDetail): void => {
      const { index, prevIndex } = detail;
      console.log(index, prevIndex);
    }
    this.onHasVideo = (list: HasVideoDetail): void => {
      console.log(list);
      console.log('video here')

//      console.log(list);
     // console.log(index, prevIndex);
    }

    this._imageService.setBannerPrefix();
    this.videosCoverImage = this._imageService.loadImage1920x940('banner-videos.jpg');

  }
}
