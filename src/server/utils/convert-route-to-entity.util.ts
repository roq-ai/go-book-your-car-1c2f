const mapping: Record<string, string> = {
  appointments: 'appointment',
  companies: 'company',
  mechanics: 'mechanic',
  services: 'service',
  users: 'user',
  vehicles: 'vehicle',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
