import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../service/product-service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @Output() singInEvent = new EventEmitter();
  singUpForm !: FormGroup;

  constructor(private _productService: ProductService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createSignUpForm();
  }

  createSignUpForm(): void {
    this.singUpForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    })
  }

  isSignInVisible(): void {
    this.singInEvent.emit(false)
  }

  onSignUpUser(): void {
    if (this.singUpForm.valid) {
      let user = this.singUpForm.value;
      this._productService.addUser(user).subscribe((res) => { });
      this.router.navigate(['/navbar']);
      this.authService.signUpUserStatus();
      this.singUpForm.reset();
    }
  }
}
