import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customers';
import { CustomersService } from 'src/app/services/customers.service';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { ShowCustomerByIdComponent } from '../show-customer-by-id/show-customer-by-id.component';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {


  customers: Customer[] = [];
  firstName: string = '';
  lastName: string = '';
  phone: string = '';

  constructor(private cs: CustomersService, private modal: NgbModal) { }

  ngOnInit(): void {
    this.cs.getCustomers().subscribe({
      next: (customerData: Customer[]) => (this.customers = customerData)
    })
  }

  deleteCustomer(customer: Customer) {
    if (confirm("Delete customer?")) {
      this.cs.deleteCustomer(customer).then(() => alert("Customer was deleted"))
        .catch((err) => console.log(err))
    }
  }

  updateCustomer(customer: Customer) {
    let modalRef = this.modal.open(EditCustomerComponent, {
      size: "lg",
      centered: true,
      windowClass: "dark-modal"
    });
    modalRef.componentInstance.id = customer.id;
  }

  showCustomer(customer: Customer) {
    let modalRef = this.modal.open(ShowCustomerByIdComponent, {
      size: 'md',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = customer.id;
  }

  addCustomer() {
    this.modal.open(AddCustomerComponent, {
      size: 'md',
      centered: true,
      windowClass: 'dark-modal',
    });
    
  }
}
