import { UserInterface } from 'interfaces/user';
import { VehicleInterface } from 'interfaces/vehicle';
import { ServiceInterface } from 'interfaces/service';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date: any;
  status: string;
  user_id: string;
  vehicle_id: string;
  service_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  vehicle?: VehicleInterface;
  service?: ServiceInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
  vehicle_id?: string;
  service_id?: string;
}
