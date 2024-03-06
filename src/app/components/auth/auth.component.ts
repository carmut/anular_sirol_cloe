import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule, MatButton],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  error: string = '';
  user: User = new User();
  username: string = ''

  constructor(
    private userService: UsersService,
    private router: Router
  ) {}

  login(){
    if(this.user.username){
      this.username = this.user.username
      sessionStorage.setItem('username',this.username)
      console.log(this.username)
      console.log(sessionStorage.getItem('username'));
    }
    this.userService.loginuser(this.user).subscribe( data => {
     localStorage.setItem("token", data.token);
     this.router.navigate(["/admin"]);
    }, error => {
      console.log(error);
      this.error = error["type"];
    })

  }
}
