import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
      ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form should be valid',()=>{
    component = fixture.componentInstance;
    component.signupForm.controls['firstName'].setValue('test-firstName')
    component.signupForm.controls['lastName'].setValue('test-lastName')
    component.signupForm.controls['email'].setValue('test@gmail.com')
    component.signupForm.controls['password'].setValue('test113')
    component.signupForm.controls['contactNo'].setValue('1233455667')
    component.signupForm.controls['country'].setValue('test-country')
    component.signupForm.controls['state'].setValue('test-state')
    component.signupForm.controls['address'].setValue('test-address')
    component.signupForm.controls['city'].setValue('test-city')
    component.signupForm.controls['pinCode'].setValue('test-pinCode')
    component.signupForm.controls['nominee'].setValue('test-nominee')
    component.signupForm.controls['dateTime'].setValue('test-dateTime')
    expect(component.signupForm.valid).toBeTruthy();
  })

  it('Form should be invalid',()=>{
    component = fixture.componentInstance;
    component.signupForm.controls['firstName'].setValue('')
    component.signupForm.controls['lastName'].setValue('')
    component.signupForm.controls['email'].setValue('')
    component.signupForm.controls['password'].setValue('test113')
    component.signupForm.controls['contactNo'].setValue('1233455667')
    component.signupForm.controls['country'].setValue('test-country')
    component.signupForm.controls['state'].setValue('test-state')
    component.signupForm.controls['address'].setValue('test-address')
    component.signupForm.controls['city'].setValue('test-city')
    component.signupForm.controls['pinCode'].setValue('test-pinCode')
    component.signupForm.controls['nominee'].setValue('test-nominee')
    component.signupForm.controls['dateTime'].setValue('test-dateTime')
    expect(component.signupForm.valid).toBeTruthy();
  })
});
