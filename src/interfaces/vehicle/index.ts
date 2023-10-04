import { AppointmentInterface } from 'interfaces/appointment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color: string;
  vin: string;
  mileage: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  vin?: string;
  user_id?: string;
}
