import { inject, Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
    return true;
  }

  const sessionId = 123456 ;

  const navigationExtras: NavigationExtras = {
    queryParams: { session_id:sessionId },
    fragment: 'anchor',

  };

  // Redirect to the login page
  return router.navigate(['login'], navigationExtras);
};
