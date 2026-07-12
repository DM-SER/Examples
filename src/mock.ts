export enum RoleAccess {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

export enum StatusUser {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  BLOCKED = 'BLOCKED',
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  roleAccess: RoleAccess;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  status: StatusUser;
}

export const users: User[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    roleAccess: RoleAccess.ADMIN,
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    status: StatusUser.ACTIVE,
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    roleAccess: RoleAccess.USER,
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    status: StatusUser.INACTIVE,
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    roleAccess: RoleAccess.GUEST,
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    status: StatusUser.BLOCKED,
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    roleAccess: RoleAccess.ADMIN,
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    status: StatusUser.ACTIVE,
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services',
    },
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    roleAccess: RoleAccess.USER,
    phone: '(254)954-1289',
    website: 'demarco.info',
    status: StatusUser.INACTIVE,
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    roleAccess: RoleAccess.GUEST,
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    status: StatusUser.BLOCKED,
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications',
    },
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    roleAccess: RoleAccess.USER,
    phone: '210.067.6132',
    website: 'elvis.io',
    status: StatusUser.ACTIVE,
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers',
    },
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    roleAccess: RoleAccess.ADMIN,
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    status: StatusUser.INACTIVE,
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers',
    },
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    roleAccess: RoleAccess.USER,
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    status: StatusUser.BLOCKED,
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies',
    },
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    roleAccess: RoleAccess.GUEST,
    phone: '024-648-3804',
    website: 'ambrose.net',
    status: StatusUser.ACTIVE,
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  },
];
