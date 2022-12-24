import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/Customers';
import { CustomersService } from 'src/app/services/customers.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = { firstName: "", lastName: "", email: "", phone: "", address: "" }

  constructor(private cs: CustomersService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }


  addNewCustomer() {
    this.cs.addCustomer(this.customer).then(() => this.activeModal.close())
    .catch((err) => console.log(err))
  }
}
