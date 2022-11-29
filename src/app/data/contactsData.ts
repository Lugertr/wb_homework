export interface contactsDataInterface {
  [contactName: string]: {
    label: string;
    href: string;
  };
}

export const contactsData: contactsDataInterface = {
  tel: {
    label: '(405) 555-0128',
    href: 'tel:+4055550128',
  },
  email: {
    label: 'hello@createx.com',
    href: 'mailto:hello@createx.com',
  },
};
