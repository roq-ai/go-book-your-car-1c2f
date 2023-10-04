import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface MechanicInterface {
  id?: string;
  first_name: string;
  last_name: string;
  experience: number;
  specialization: string;
  rating: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface MechanicGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  specialization?: string;
  company_id?: string;
}
