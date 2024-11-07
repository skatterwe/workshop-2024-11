import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private _userConfig$: ReplaySubject<any> = new ReplaySubject(1);

  constructor() {}

  updateUserConfig(userConfig: any) {
    this._userConfig$.next(userConfig);
  }

  get userConfig$(): Observable<any> {
    return this._userConfig$.asObservable();
  }
}
