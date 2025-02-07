import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarSmartComponent } from './core/navbar/navbar.smart.component';
//import { AuthenticationService } from './core/authentication.service';
//import { switchMap } from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarSmartComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

}
