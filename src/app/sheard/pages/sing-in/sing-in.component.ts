import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  isSignUpMode: boolean = false;
  signInForm !: FormGroup

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this.createSignInForm()
  }

  createSignInForm(): void {
    this.signInForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  isVisibleSignIn(ele: boolean): void {
    this.isSignUpMode = ele;
  }

  onSignInUser(): void {
    const userName = this.signInForm.get("userName")?.value;
    const password = this.signInForm.get('password')?.value;
    this._authService.signInUser(userName,password);
  }
}
