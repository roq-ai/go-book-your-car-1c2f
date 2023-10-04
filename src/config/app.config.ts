interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Service Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Service Manager', 'Mechanic'],
  tenantName: 'Company',
  applicationName: 'Go Book Your Car Services',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage user information',
    'Manage vehicle information',
    'Create and manage appointments',
    'View services and mechanics',
  ],
  ownerAbilities: [
    'Manage company information',
    'Manage vehicle details',
    'Manage services provided',
    'Manage appointments',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/41994a0c-cc4c-4b6d-b18a-63ed21b0b2f2',
};
