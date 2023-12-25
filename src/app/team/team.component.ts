import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Meta } from '@angular/platform-browser';
import {TeamService} from "./team.service";
import {Team} from "./team.type";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  aboutCoverImage;
  aboutSideImage;
  intro = [];
  boysUnder17Team=[];
  boysUnder15Team=[];
  boysUnder13Team=[];
  mensAmature = [];
  womensAmature = [];
  georgeHeadshot;
  teamCoverImage;

  constructor(private _imageService: ImageService, private _metaTagService: Meta, private _teamService: TeamService) {
  }


  ngOnInit(): void {
   // this.aboutCoverImage = this._imageService.loadImage1920x940('who-we-are-home.jpg');
   // this.aboutSideImage = this._imageService.loadImage450x450('about-side-image.jpg');
    this.aboutCoverImage = 'https://placehold.co/1920x940'//this._imageService.loadImage1920x940('who-we-are-home.jpg');
    this.aboutSideImage =  'https://placehold.co/270x284'//'' this._imageService.loadImage450x450('about-side-image.jpg');
    this._imageService.setHeadShotsPrefix();
    this.georgeHeadshot = this._imageService.loadImage270x284('george-papa.jpeg');
    this._imageService.setBannerPrefix();
    this.teamCoverImage = this._imageService.loadImage1920x940('team-banner.jpg');


    this._metaTagService.addTags([
      {
        name: 'keywords',
        content: 'About Dynamic Sports Academy',
      },
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content: 'Tom Cruickshank'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD'},
      {charset: 'UTF-8'},
    ]);
     const players = this._teamService.getTeams()
    const intro = this._teamService.getIntro()
     const timestampBoysUnder17 = (new Date(2023-5, 9, 1,  0, 0)).getTime();
     const timestampBoysUnder15 = (new Date(2023-8, 9, 1,  0, 0)).getTime();
     const timestampBoysUnder13 = (new Date(2023-10, 9, 1,  0, 0)).getTime();
    const boysUnder15Team = [];
    const boysUnder13Team = [];
//    console.log(new Date(2023-5, 9, 1,  0, 0));

    intro.map((line) => {
      console.log('hello')
      console.log(line.text);
      this.intro.push(line.text);

    })
    console.log(intro);

    players.map((player) => {
       if (player.DOB !== 'Not Available') {
         const birthday = player.DOB.split('-');
         const timestampOfPlayer = (new Date( Number(birthday[2]), Number(birthday[1]), Number(birthday[0]),  0, 0)).getTime();
   //      console.log('begin')
    //     console.log('17')
     //    console.log(timestampBoysUnder17)
      //   console.log('15')
       //  console.log(timestampBoysUnder15);
      //   console.log('player')

       //  console.log(timestampOfPlayer);
       //  console.log(player)

         if (timestampOfPlayer < timestampBoysUnder17 && timestampOfPlayer > timestampBoysUnder15) {
       //    console.log('entering')
      //     console.log(player);
           this.boysUnder17Team.push(player);
         } else if (timestampOfPlayer < timestampBoysUnder15 &&  timestampOfPlayer > timestampBoysUnder13) {
           this.boysUnder15Team.push(player);
         } else if (timestampOfPlayer < timestampBoysUnder13) {
           this.boysUnder13Team.push(player)
        //   boysUnder13Team.push(player);
         } else if (timestampOfPlayer > timestampBoysUnder17) {
           this.mensAmature.push(player);
         }
       }

      // const date = new Date(2016, 6, 27, 13, 30, 0);
        //console.log(player);
     });
    console.log(this.boysUnder15Team)

  }
}
