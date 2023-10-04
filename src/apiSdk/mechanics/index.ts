import queryString from 'query-string';
import { MechanicInterface, MechanicGetQueryInterface } from 'interfaces/mechanic';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMechanics = async (
  query?: MechanicGetQueryInterface,
): Promise<PaginatedInterface<MechanicInterface>> => {
  return fetcher('/api/mechanics', {}, query);
};

export const createMechanic = async (mechanic: MechanicInterface) => {
  return fetcher('/api/mechanics', { method: 'POST', body: JSON.stringify(mechanic) });
};

export const updateMechanicById = async (id: string, mechanic: MechanicInterface) => {
  return fetcher(`/api/mechanics/${id}`, { method: 'PUT', body: JSON.stringify(mechanic) });
};

export const getMechanicById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/mechanics/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteMechanicById = async (id: string) => {
  return fetcher(`/api/mechanics/${id}`, { method: 'DELETE' });
};
