import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  sess: any;

  constructor(private router: Router) { }

  ngOnInit() {

    this.sess=localStorage.getItem("User");
  }

  logout()
  {
    localStorage.removeItem("User");
    this.router.navigate(['login']);
  }

}
