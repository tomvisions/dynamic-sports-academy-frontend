import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import {TeamService} from "./team.service";
import {Team, TeamPagination} from './team.type'

@Injectable({
    providedIn: 'root'
})
export class TeamResolver 
{
    /**
     * Constructor
     */
    constructor(private _teamService: TeamService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ pagination: TeamPagination; players: Team[] }>
    {

        return this._teamService.getTeams();
    }
}
