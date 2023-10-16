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
  ownerRoles: ['Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Administrator', 'Admissions Officer', 'Student'],
  tenantName: 'University',
  applicationName: 'Online Admission Portal',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal user information',
    'View university information',
    'Create university information',
    'Update university information',
  ],
  ownerAbilities: ['Manage users', 'Manage universities'],
  getQuoteUrl: 'https://app.roq.ai/proposal/d1ac139f-81bf-4525-ba5b-6122a39ff704',
};
