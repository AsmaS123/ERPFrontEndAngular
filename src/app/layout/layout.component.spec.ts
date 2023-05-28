import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,AppRoutingModule],
      declarations: [ LayoutComponent,HeaderComponent,FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
