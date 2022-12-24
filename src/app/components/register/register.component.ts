import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/interfaces/RegisterUser';
import { User } from 'src/app/interfaces/Users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: RegisterUser = {displayName: '', email: '', password:''}

  constructor(private us: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.us.register(this.user).then((data) => {
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem("email", data.user.email as string);
      this.router.navigateByUrl('home');
    }
    )
      .catch((err) => console.log(err)
      )

  }
}
