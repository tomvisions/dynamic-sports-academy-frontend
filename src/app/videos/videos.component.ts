import {AfterContentInit, AfterViewChecked, Component, OnInit, ViewEncapsulation} from '@angular/core';
//import Video from 'lightgallery/plugins/video';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
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
    counter: false,
    plugins: [lgVideo]
  };

  items = [
    {
      id: '1',
      size: '1280-720',
      src: 'https://youtu.be/WhsQee44Fro',
      thumb: 'https://img.youtube.com/vi/WhsQee44Fro/0.jpg',
    },
    {
      id: '2',
      size: '1280-720',
      src: 'https://youtu.be/HODxabDMjcc',
      thumb: 'https://img.youtube.com/vi/HODxabDMjcc/0.jpg',
    },
    {
      id: '3',
      size: '1280-720',
      src: 'https://youtu.be/HbH0yNNTR-o',
      thumb: 'https://img.youtube.com/vi/HbH0yNNTR-o/0.jpg',
    },
    {
      id: '4',
      size: '1280-720',
      src: 'https://youtu.be/TFoX-AnQJEM',
      thumb: 'https://img.youtube.com/vi/TFoX-AnQJEM/0.jpg',
    },
    {
      id: '5',
      size: '1280-720',
      src: 'https://youtu.be/QBNQmeeJScc',
      thumb: 'https://img.youtube.com/vi/QBNQmeeJScc/0.jpg',
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
