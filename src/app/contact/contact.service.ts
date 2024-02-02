import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { Contact } from './contact.type';
import {SharedService} from "../shared.service";

@Injectable({
  providedIn: 'root'
})
export class ContactService
{
  // Private
  private _sendToAcademy: BehaviorSubject<Contact | null> = new BehaviorSubject(null);

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
  get contactUs$(): Observable<Contact>
  {
    return this._sendToAcademy.asObservable();
  }

  sendContact(joinAcademy: Contact): Observable<Contact>
  {
    console.log(joinAcademy);
    return this.contactUs$.pipe(
      take(1),
      switchMap(theContactUs => this._httpClient.post<Contact>(`${this._sharedService.apiLocation}/api/mail`,
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
