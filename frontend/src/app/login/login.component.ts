import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LoginUser } from './loginuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm: FormGroup;
  massage: string;
  Error = false;

  constructor(
    private userService: UserService,
    private formbuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.removeItem('User')
    this.setFormState();
  }

  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    let login = this.loginForm.value;
    this.login(login);

  }

  login(loginUser: LoginUser) {
    this.userService.loginuser(loginUser).subscribe(
      user => {
        var succ = user;
        console.log(succ);
        
        if(succ[0]){
          var uuid = succ[0].uuid;
          console.log(uuid)
        this.loginForm.reset();
        localStorage.setItem("User", uuid);
        this.router.navigate(['videos']);
        console.log("yes")
        } else {
          this.Error = true;
          this.massage = "User ID/Password Wrong";
        }
      }
    )
  }


}
