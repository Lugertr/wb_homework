import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class –°ustomInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const newReq = req.clone({
            headers: req.headers
                .set('custom-study-token', 'perfect future is waiting for us')
                .set('Auth', `Bearer don't forget password `),
        });

        return next.handle(newReq);
    }
}
