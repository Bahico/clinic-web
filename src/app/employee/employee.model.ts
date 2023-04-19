export interface EmployeeModel {
  id: number
  first_name: string;
  last_name: string;
  age: number;
  image: string;
  certificate: Blob;
  description: string;
}

export interface EmployeeHttp {
  results: EmployeeModel[];
  next?: string;
  previous?: string
}
