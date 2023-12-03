import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import {SharedService} from "../shared.service";
import { Team } from './team.type';

@Injectable({
  providedIn: 'root'
})
export class TeamService
{
  // Private
  private _team: BehaviorSubject<Team | null> = new BehaviorSubject(null);

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient, private _sharedService: SharedService)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------


  /**
   * Getter for product
   */
  get membership$(): Observable<Team>
  {
    return this._team.asObservable();
  }

  getTeams(team: Team): Observable<Team>
  {

        const playList = [



            
        ]


    return team;
    console.log(team)
    /*return this.membership$.pipe(
      take(1),
      switchMap(theContactUs => this._httpClient.2<Team>(`${this._sharedService.apiLocation}/api/v1/mail`,
      membership, { headers: {
          'Content-Type': 'application/json'
        }}).pipe(
        map((joinAcademy) => {

          return joinAcademy;
        }),
      ))
    ); */
  }
}
