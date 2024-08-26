// TestBed: A utility for testing Angular applications. It is used to create a module for testing and create services, components, and pipes for testing.
// ComponentFixure: A class that is used to create a fixture for a component. It is used to create a fixture for a component and provides access to the component instance and the component's DOM.
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  // fixure is like a wrapper for component, which has additional functionalities which we can call.
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [UserListComponent] is used to declare the component which we want to test. (specifically to angular components)
      declarations: [UserListComponent],
      providers: [UserService]
    }).compileComponents();
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    // spyOn is used to mock the service method and return a value
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(of([
      {id: 1, name: 'john'},
      {id: 2, name: 'Maria'},
      {id: 3, name: 'Kevin'}
    ]))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrive users from the UserSerive on init', ()=>{
    // mannually trigger change detection to update the data binding
    fixture.detectChanges();
    expect(userServiceSpy).toHaveBeenCalled();
  });

  it('should retrieve users form the userService when the refresh button is clicked', ()=>{
    fixture.detectChanges();

    userServiceSpy.calls.reset();

    const button = fixture.debugElement.query(By.css('button'));
    // eventName: The name of the event to trigger (e.g., 'click').
    // eventObj: The event object to pass to the handler. This can be any object that represents the event details.
    button.triggerEventHandler('click', null);

    expect(userServiceSpy).toHaveBeenCalled();
  })
});
