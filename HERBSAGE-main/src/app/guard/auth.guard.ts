import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { GetMeResponse } from '../models/response.model';

export const authGuard: CanActivateFn = (route, state) => {
  const http = inject(HttpClient);
  const router = inject(Router);

  return http.get<GetMeResponse>('http://localhost:3000/api/auth/me', { withCredentials: true }).pipe(
    map((res) => {
      return res.success ? true : router.parseUrl('/login');
    }),
    catchError(() => {
      return of(router.parseUrl('/login'));
    })
  );
};
