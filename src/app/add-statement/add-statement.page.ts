import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-statement',
  templateUrl: './add-statement.page.html',
  styleUrls: ['./add-statement.page.scss'],
})
export class AddStatementPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
Add(){
  this.router.navigate(['/individual'])
}
}
