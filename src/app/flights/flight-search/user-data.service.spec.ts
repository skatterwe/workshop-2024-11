import { TestBed } from '@angular/core/testing';

import { TestScheduler } from 'rxjs/internal/testing/TestScheduler';
import { UserDataService } from './user-data.service';

describe('UserDataService', () => {
  let service: UserDataService;
  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataService);
  });

  beforeEach(
    () =>
      (scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      })),
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get userConfig', () => {
    service.updateUserConfig('USER_CONFIG');

    scheduler.run(({ expectObservable, cold }) => {
      cold('--b').subscribe(() => service.updateUserConfig('NEW_CONFIG'));

      expectObservable(service.userConfig$).toBe('a-b', {
        a: 'USER_CONFIG',
        b: 'NEW_CONFIG',
      });
    });
  });
});
