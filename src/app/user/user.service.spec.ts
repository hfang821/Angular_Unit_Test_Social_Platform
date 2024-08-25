import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {

  let service: UserService;

  // before each test, create a new instance of UserService
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should get created', () => {
    // check if the service is not a faulty value 
    expect(service).toBeTruthy();
  });

  it('should get users', () =>{
    service.getUsers().subscribe(users => {
      expect(users.length).toBeGreaterThan(0);
    })
  })
});
