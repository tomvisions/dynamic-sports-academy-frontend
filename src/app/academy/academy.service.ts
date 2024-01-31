import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { Academy } from './academy.type';
import {SharedService} from "../shared.service";

@Injectable({
  providedIn: 'root'
})
export class AcademyService
{
  // Private
  private _sendToAcademy: BehaviorSubject<Academy | null> = new BehaviorSubject(null);

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
  get contactUs$(): Observable<Academy>
  {
    return this._sendToAcademy.asObservable();
  }

  sendToAcademy(joinAcademy: Academy): Observable<Academy>
  {
    console.log(joinAcademy);
    return this.contactUs$.pipe(
      take(1),
      switchMap(theContactUs => this._httpClient.post<Academy>(`${this._sharedService.apiLocation}/api/mail`,
      joinAcademy, { headers: {
          'Content-Type': 'application/json'
        }}).pipe(
        map((joinAcademy) => {

          return joinAcademy;
        }),
      ))
    );
  }
}
