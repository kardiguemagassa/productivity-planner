import { inject, Injectable } from '@angular/core';
import { User, Visitor } from '../entity/user.interface';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserUseCaseService {

  readonly #authenticationService = inject(AuthenticationService);
  

  async execute(visitor : Visitor): User { 

  }
}
