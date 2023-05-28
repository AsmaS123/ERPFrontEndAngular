import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, throwError ,Subject,BehaviorSubject} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  
  subject = new Subject<any>();  
  behaviorsubject = new BehaviorSubject(0);

  url = "http://127.0.0.1:5000/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  postRegister(obj: any): Observable<any> {
    return this.http.post<any>(this.url+"signup", obj, this.httpOptions)
      // .pipe(
      //   catchError(this.handleError('addHero', hero))
      // );
  }

  postLogin(obj: any): Observable<any> {
    return this.http.post<any>(this.url+"login", obj, this.httpOptions)
  }

  logOut(): Observable<any> {
    return this.http.get<any>(this.url+"logout",this.httpOptions)
  }

  //---Category --- //

  getAllCategory(): Observable<any> {
    return this.http.get<any>(this.url+"categories",this.httpOptions)
  }

  getAllProducts():Observable<any> {
    return this.http.get<any>(this.url+"productprice",this.httpOptions)
  }

  getCartDetails():Observable<any>{
    return this.http.get<any>(this.url+"cart",this.httpOptions)
  }
  
}
