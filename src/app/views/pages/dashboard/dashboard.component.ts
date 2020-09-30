// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(
		private router: Router,
	) {
	}


  ngOnInit(): void {
    
    var userRole = localStorage.getItem('userRole');

    // 10 superadmin
    // 1 admin
    // 0 customer
    // 2 courier 

    if (userRole == '10' || userRole == '1'){
      this.router.navigate(['ecommerce/orders']);
    }
    else if ( userRole == '0' ) {
      this.router.navigate(['orders']);
    }
    else {
      this.router.navigate(['courier']);
    }
  }
}
