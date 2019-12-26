import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup;
  datasaved = false;


  massage: string;

  constructor(private formbuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.setFormState();
  }

  setFormState(): void {
    this.regForm = this.formbuilder.group({

      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }


  onSubmit() {
    
    let employee = this.regForm.value;
    console.log(employee)
    this.createUser(employee);
    this.regForm.reset();
  }

  createUser(user: User) {
    this.userService.createuser(user).subscribe(()=>{
      this.datasaved = true;
      this.massage = "User Created";
      this.regForm.reset();
    })

  }

}
