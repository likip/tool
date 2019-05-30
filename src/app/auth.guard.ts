import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,CanActivate,UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   throw new Error("Method not implemented.");
  // }

  constructor(private Auth:AuthService){

  }

  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
      return this.Auth.isLoggedIn;
    }
  
}
