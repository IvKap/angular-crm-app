import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  @Input() id!: string;
  customer: Customer = { firstName: "", lastName: "", email: "", phone: "", address: "" }


  constructor(private cs: CustomersService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.cs.getCustomerbyId(this.id).subscribe({
      next: (customerData: Customer) => (this.customer = customerData),

    })
  }

  updatecustomer() {
    this.cs.updateCustomer(this.customer).then(() => this.activeModal.close())
      .catch((err) => console.log(err))
  }

}
