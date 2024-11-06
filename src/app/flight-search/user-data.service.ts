import { HttpClient } from '@angular/common/http';
import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private _userConfig$: ReplaySubject<any> = new ReplaySubject(1);

  constructor(
    private http: HttpClient,
    private destroyRef: DestroyRef,
  ) {}

  loadUserConfig(userId: string) {
    this.http
      .get(`https://demo.angulararchitects.io/api/user-configs/${userId}`)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((userConfig) => {
        this._userConfig$.next(userConfig);
      });
  }

  get userConfig$(): Observable<any> {
    return this._userConfig$.asObservable();
  }
}
