import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { HttpClient ,HttpHeaders} from '@angular/common/http';



describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports: [HttpClientModule],
      providers: [HttpService]
    });
    service = TestBed.inject(HttpService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
