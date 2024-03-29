import { Component, OnInit,  EventEmitter, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login-service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService,
              private router: Router) { }
  @Output() showInParent = new EventEmitter();
  ngOnInit(): void {
  }

  login() {
    this.loginservice.login().subscribe( result => {
      this.router.navigate(['/home']);
    })    
  }

  signup() {
      this.showInParent.emit('signup')
  }
}
