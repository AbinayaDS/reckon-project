import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private menu: MenuController,public router:Router) { }

  ngOnInit() {
  }
  Individual(){
 this.router.navigate(['/individual'])
  }
  Group(){
    this.router.navigate(['/group']);
     }
}
