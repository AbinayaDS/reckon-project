import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.page.html',
  styleUrls: ['./individual.page.scss'],
})
export class IndividualPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  AddStatement(){
 this.router.navigate(['/add-statement'])
  }
Income(){
  this.router.navigate(['/add-statement'])
}
Expense(){
  this.router.navigate(['/add-statement'])
}
}
