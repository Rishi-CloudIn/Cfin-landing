import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  faq: any[] = [
    {
      status: false,
      qus: 'Can I register for both as Self and Organization?',
      ans: 'No, any one login is possible in a single account registration ',
    },
    {
      status: false,
      qus: 'Is my financial data maintained securely?',
      ans: 'Yes, we ensure adequate security, we will not share your information with anyone, its visible only within the application ',
    },
    {
      status: false,
      qus: 'What does the term "Income" refers in CFIN?',
      ans: 'It refers to the income you are going to enter mannualy into the application and can add that income category',
    },
    {
      status: false,
      qus: 'How do I process my income entries?',
      ans: 'You may add it by using the feature add Income and update the details',
    },
    {
      status: false,
      qus: 'Can we able to catagorize our income?',
      ans: 'Yes, you can categorize your Income into - salary, wages, interest, commission, gifts,allowance, government pays',
    },
    {
      status: false,
      qus: 'What does the term "Expense" refers in CFIN?',
      ans: 'It refers to the expense you are going to enter manually into the application and can add that expense category',
    },
    {
      status: false,
      qus: 'How do I process my Expense entries?',
      ans: 'You may add it by using the feature add expense and update the details',
    },
    {
      status: false,
      qus: 'Can we able to catagorize our Expense?',
      ans: 'Yes, you can categorize your expense into - housing, transportation, food, utilities, clothing, medical / healthcare, insurance, personal, education, donations and others',
    },
    {
      status: false,
      qus: 'Is online Payment transactional facilities available here?',
      ans: 'No, online Payment transactional facilities are not available',
    },
    {
      status: false,
      qus: 'Will creditors be able to use the application for tracking their Status?',
      ans: 'No, creditors cant use',
    },
    {
      status: false,
      qus: 'Is multiple Bank accounts can be managed here in Self?',
      ans: 'Yes, Multiple Bank accounts can be added and will be able to manage the details',
    },
    {
      status: false,
      qus: 'Can we have multiple users for single login in Self account?',
      ans: 'No, only single user can login ',
    },
    {
      status: false,
      qus: 'Approval for adding creditors will be performed only by admin or both admin & Manager?',
      ans: 'Approval process will be accessed only by Admin',
    },
  ];
  constructor() {}

  ngOnInit() {}

  hamToggle() {
    $('.nav-main').toggleClass('open');
    $('.nav-ul').toggleClass('new-ul');
  }

  click(i: any) {
    this.faq[i].status = !this.faq[i].status;
  }
}
