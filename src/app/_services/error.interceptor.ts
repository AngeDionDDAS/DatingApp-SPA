import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()

export class ErrorInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(

           /* catchError( function (error) {
                    if (error instanceof HttpErrorResponse) {

                        const applicationError = error.headers.get('Application-Error');

                        if (applicationError) {
                            console.error(applicationError);
                            return throwError(applicationError);
                        }


                        const serverError = error.error;
                        let modalStateErrors = '';
                        if (serverError && typeof serverError === 'object') {
                            for (const key in serverError) {
                                if (serverError[key]) {
                                    modalStateErrors += serverError[key] + '\n';
                                }
                            }
                        }
                        return throwError(modalStateErrors || serverError || 'Server Error');
                    }
                })*/
        );
    }

}

export const ErrorInterceptorProvide = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
}