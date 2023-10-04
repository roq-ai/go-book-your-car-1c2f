import queryString from 'query-string';
import { ServiceInterface, ServiceGetQueryInterface } from 'interfaces/service';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getServices = async (query?: ServiceGetQueryInterface): Promise<PaginatedInterface<ServiceInterface>> => {
  return fetcher('/api/services', {}, query);
};

export const createService = async (service: ServiceInterface) => {
  return fetcher('/api/services', { method: 'POST', body: JSON.stringify(service) });
};

export const updateServiceById = async (id: string, service: ServiceInterface) => {
  return fetcher(`/api/services/${id}`, { method: 'PUT', body: JSON.stringify(service) });
};

export const getServiceById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/services/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteServiceById = async (id: string) => {
  return fetcher(`/api/services/${id}`, { method: 'DELETE' });
};
