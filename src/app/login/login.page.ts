import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataGetterService } from '../services/data-getter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private username: string;

  constructor(private router: Router,
              private data: DataGetterService,
              public alertController: AlertController) { }

  ngOnInit() {
  }

  public login(){
    if(this.data.isUserExists(this.username)){
      this.data.setUser(this.username);
      this.router.navigate(['/home']);
    }
    else{
      this.userNotExistAlert();
    }
  }

  async userNotExistAlert(){
    const alert = await this.alertController.create({
      header:'Увага!',
      subHeader:'Помилка аутентифікації',
      message: 'Користувача ' + this.username + ' не знайдено!',
      buttons:['OK']
    });
    await alert.present();
  }
}
