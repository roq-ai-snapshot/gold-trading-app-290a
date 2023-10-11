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
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Administrator', 'Trader', 'Analyst', 'Customer'],
  tenantName: 'Company',
  applicationName: 'gold trading application ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read gold trade data',
    'View market analysis',
    'Access gold inventory',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage gold trades',
    'Manage gold inventory',
    'Manage market analysis',
    'Manage ownership',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/b67e9aa3-7e2a-4f86-8766-9758dd7d44e0',
};
