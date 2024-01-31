import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import {SharedService} from "../shared.service";
import { Team, TeamPagination } from './team.type';

@Injectable({
  providedIn: 'root'
})
export class TeamService
{
  // Private
  private _team: BehaviorSubject<Team | null> = new BehaviorSubject(null);
  private _teams: BehaviorSubject<Team[] | null> = new BehaviorSubject(null);

  private _pagination: BehaviorSubject<TeamPagination | null> = new BehaviorSubject(null);


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
  get team$(): Observable<Team>
  {
    return this._team.asObservable();
  }

  /**
   * Getter for product
   */
  get teams$(): Observable<Team[]>
  {
    return this._teams.asObservable();
  }



  getIntro() {
    return [
      {text: 'George Papamikidis is the founder, President/ CEO of Dynamic Sports Academy and Dynamic Technologies. He created one of the largest Canadian Electronic Service provider company in the world. Corporations such as Nortel Networks, Sanmina-SCI, Flextronics, Celestica, Ericsson, Ciena, Avaya, are just some of the world’s largest Electronic companies and manufacturers that have used the services of Dynamic Technologies.\n'},
      {text: 'Founded in 1994, Dynamic\'s customer-first philosophy has been the foundation of the company, and is a tangible element of the company and each of its team members.'},
      {text: 'Dynamic Technologies is a true Quality IT “Service Provider”, that has serviced the world\'s leading OEM\'s and EMS \' and SMB\’.'},
      {text: 'A company with vision, implementing programs such as DT-QS, the highest quality standard in the industry, a comprehensive service maintenance program. Dynamic has always been a leader, and taken initiative with high level solutions, customized to meet each customer\'s particular needs.'},
      {text: 'Our commitment to you is one you can bank on. That\'s a promise.'},
      {text:'Quality begins with qualified people…'},
      {text: 'The Dynamic team consists of highly skilled individuals, particularly focused on providing superior quality and ultimate service to all Dynamic customers.'},
      {text: 'The concept of “service”, is so familiar to IT practitioners, IT nowadays does not provide technology, but services. We can look at it from another point of view. How would Dynamic Technologies help our partners reduce costs? We could do it by implementing our DT-QS (Dynamic Technologies – Quality Service) system coupled with our maintenance service, and to provide the service in an affordable way.'},
      {text: 'The bottom line is that Dynamic Technologies operates in such a spirit and our motto is to provide value to our partners through efficient provision of services.'},
    ]
  }


  getTeams(page: number = 0, size: number = 0, sort: string = 'name', order: 'asc' | 'desc' | '' = 'asc', search: string = '', index=1):     Observable<{ pagination: TeamPagination; players: Team[] }>
  {
    return this._httpClient.get<{ pagination:  TeamPagination; players: Team[] }>(`${this._sharedService.apiLocation}/api/player`).pipe(
      tap((response) => {
    
        this._pagination.next(response.pagination);
        this._teams.next(response.players);
      })
    );
  }
}
