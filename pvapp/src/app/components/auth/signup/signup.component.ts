import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  isLogged:boolean;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { 
    this.isLogged = !!localStorage.getItem('token');
    if(this.isLogged){
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(6)] ],
      username: ['', [ Validators.required, Validators.minLength(4)]]
    });
  }

  register() {
    this.authService
    .signUp(this.signupForm.value)
    .subscribe((data) => {
      this.router.navigate(['/login']);
    })
  }

}
