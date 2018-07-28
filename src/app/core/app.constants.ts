 import { environment } from '../../environments';

function createUrl(actionName: string): string {
  return `${environment.apiHost}${actionName}`;
}
function createAuthUrl(actionName: string): string {
  return `${environment.apiHost}${actionName}`;
}

function createMockUrl(actionName: string): string {
    return `/assets/mock-data/${actionName}.json`; // `http://192.168.9.249:8080/fcsky/jsp/audit/visitservice.jsp`;
}
export const appApiResources = {
  baseUrl:  environment.apiHost,
  login:        createAuthUrl('user/login'),
  register:     createUrl('user/register'),
  dashBoard:    createUrl('dashboard'),
  visits:       createUrl('visits'),
  fileUpload:   createUrl('fileUpload'),
  staticUploadsPath:  `${environment.apiHost}Uploads/`,

  visits_mock: createMockUrl('visits'),
  tasks_mock: createMockUrl('tasks'),

  footer_mock: createMockUrl('menu'),
  sample_mock: createMockUrl('sample')
};

export const appVariables = {
    userLocalStorage : '',
    accessTokenLocalStorage: '',
    loginPageUrl: '',
    defaultContentTypeHeader: ''
}

export const validationMessages = {
  oldPassword: {
    required: 'Old password is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Old password must be at least ${minLength} characters long`; },
    maxLength(maxLength: string) { return `Old password must be less than or equal to ${maxLength} characters long`; },
  },
  newPassword: {
    required: 'New password is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `New password must be at least ${minLength} characters long`; },
    maxLength(maxLength: string) { return `New password must be less than or equal to ${maxLength} characters long`; },
  },
  password: {
    required: 'Password is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Password must be at least ${minLength} characters long`; },
    maxLength(maxLength: string) { return `Password must be less than or equal to ${maxLength} characters long`; },
  },
  comparePasswords: {
    equal: 'Passwords are not matching.',
  },
  name: {
    required: 'Name is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Name must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Name must be less than or equal to ${maxLength} characters long.`; },
  },
  firstName: {
    required: 'FirstName is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `FirstName must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `FirstName must be less than or equal to ${maxLength} characters long.`; },
  },
  lastName: {
    required: 'LastName is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `LastName must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `LastName must be less than or equal to ${maxLength} characters long.`; },
  },
  city: {
    required: 'City is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `City must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `City must be less than or equal to ${maxLength} characters long.`; },
  },
  cityId: {
    required: 'City is required.',
  },
  state: {
    required: 'State is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `State must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `State must be less than or equal to ${maxLength} characters long.`; },
  },
  country: {
    required: 'Country is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Country must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Country must be less than or equal to ${maxLength} characters long.`; },
  },
  pincode: {
    required: 'Pincode is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Pincode must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Pincode must be less than or equal to ${maxLength} characters long.`; },
    digitsOnly() { return `Only digits are allowed in Pincode.`; },
  },
  phoneNumber: {
    required: 'Phone Number is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Phone Number must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Phone Number must be less than or equal to ${maxLength} characters long.`; },
    digitsOnly() { return `Only digits are allowed in Phone Number.`; },
  },
  mobile: {
    required: 'Mobile Number is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Mobile Number must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Mobile Number must be less than or equal to ${maxLength} characters long.`; },
    digitsOnly() { return `Only digits are allowed in Mobile Number.`; },
  },
  email: {
    required: 'Email is required.',
    // tslint:disable-next-line:max-line-length
    invalid() { return `Invalid Email Id`; },
    minLength(minLength: string) { return `Email must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Email must be less than or equal to ${maxLength} characters long.`; },
  },
  primaryMobile: {
    required: 'Mobile Number is required.',
    // tslint:disable-next-line:max-line-length
    minLength(minLength: string) { return `Mobile Number must be at least ${minLength} characters long.`; },
    maxLength(maxLength: string) { return `Mobile Number must be less than or equal to ${maxLength} characters long.`; },
    digitsOnly() { return `Only digits are allowed in Mobile Number.`; },
  },

};



