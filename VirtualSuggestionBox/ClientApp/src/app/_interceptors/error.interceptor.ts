import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
import { SuggestionService } from '../_services/suggestion.service';
 
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private suggestionService: SuggestionService) {}
 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                
                //waiting
                location.reload(true);
            }
             
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}