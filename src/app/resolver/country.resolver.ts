import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

let listCountry = ['Colombia','Venezuela','paraguay','chile','brasil','rusia','otros'];


@Injectable({
  providedIn: 'root'
})
export class CountryResolver implements Resolve<string[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
    return of(listCountry);
  }
}
