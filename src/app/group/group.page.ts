import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  CreateGroup(){
this.router.navigate(['/creategroup']);
}
}
