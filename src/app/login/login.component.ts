import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({    
    templateUrl: './login.component.html'   
})
 export class LoginComponent {
    pageTitle: string = 'Login';
    
        constructor(private router: Router) {}

    ngOnInit() {}

    onBack(): void {
        this.router.navigate(['/users']);
    }
}