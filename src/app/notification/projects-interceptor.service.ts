import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, filter } from 'rxjs/operators';
import { NotificationsStoreService } from './notifications-store.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsInterceptorService implements HttpInterceptor{

  constructor(private notificationService: NotificationsStoreService) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((response: HttpResponse<any>) => this.notify(response)));
  }

  private notify(r: HttpResponse<any>) {
    const messaje = 'Status : ' + r.status + ' ' + r.statusText + ' URL : ' + r.url;
    this.notificationService.dispatch(messaje);
  }
}
