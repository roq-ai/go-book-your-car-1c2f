import { AppointmentInterface } from 'interfaces/appointment';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  name: string;
  description?: string;
  cost: number;
  duration: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  company?: CompanyInterface;
  _count?: {
    appointment?: number;
  };
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
}
