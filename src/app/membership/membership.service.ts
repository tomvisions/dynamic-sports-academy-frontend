import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { Membership } from './membership.type';
import {SharedService} from "../shared.service";

@Injectable({
  providedIn: 'root'
})
export class MembershipService
{
  // Private
  private _membership: BehaviorSubject<Membership | null> = new BehaviorSubject(null);

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
  get membership$(): Observable<Membership>
  {
    return this._membership.asObservable();
  }

  sendToMembership(membership: Membership): Observable<Membership>
  {
    console.log(membership)
    return this.membership$.pipe(
      take(1),
      switchMap(theContactUs => this._httpClient.post<Membership>(`${this._sharedService.apiLocation}/api/v1/mail`,
      membership, { headers: {
          'Content-Type': 'application/json'
        }}).pipe(
        map((joinAcademy) => {

          return joinAcademy;
        }),
      ))
    );
  }
}
