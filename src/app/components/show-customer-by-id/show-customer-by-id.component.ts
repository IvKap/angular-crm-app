import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-show-customer-by-id',
  templateUrl: './show-customer-by-id.component.html',
  styleUrls: ['./show-customer-by-id.component.css']
})
export class ShowCustomerByIdComponent implements OnInit {
  @Input() id!: string;
  customer: Customer = {
    firstName: '', lastName: '', email: '', phone: '',
    address: ''
  };
  image!: string;

  constructor(
    private cs: CustomersService,
    private activeModal: NgbActiveModal
  ) {
    this.image = '../assets/images/userIcon.png';
  }

  ngOnInit(): void {
    this.cs.getCustomerbyId(this.id).subscribe({
      next: (customerData: Customer) => (this.customer = customerData),
    });
  }

  showCustomerCard() {
    this.cs
      .showCustomerById(this.customer)
      .then(() => {
        this.activeModal.close();
      })
      .catch((err) => console.log(err));
  }
}
