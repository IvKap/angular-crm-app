import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/Users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = { email: '', password: '' }
  constructor(private us: UsersService, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('isLoggedIn') == 'true') this.router.navigateByUrl("home")
  }

  login() {
    this.us.login(this.user)
      .then((data) => {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem("email", data.user.email as string)
        this.router.navigateByUrl('home');
      })
      .catch((err) => alert("Wrong email of password"));
  }

  loginWithGoogle() {
    this.us.loginGoogle().then((data) => {
      console.log(data)
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem("email", data.user.email as string);
      this.router.navigateByUrl('home');
    })
      .catch((err) => console.log(err))

  }

}
