export const baseData = [
  {
    id: 0,
    ip: '198.100.02.01',
    lastActive: '00:00, 01.01.2024',
    tunnel: true,
    cellular: true,
    internet: true,
    modem: [
      {
        id: 0,
        name: 'huawei',
        ip: '198.100.02.01',
        timer: '9:58',
        model: 'FM-32',
        operator: 'megafon',
        phoneNumber: '79998887766',
      },
      {
        id: 1,
        name: 'huawei',
        ip: '198.100.02.01',
        timer: '11:25',
        model: 'FM-32',
        operator: 'megafon',
        phoneNumber: '79998887766',
      },
    ],
  },
  {
    id: 1,
    ip: '51.64.29.191',
    lastActive: '17:00, 05.02.2024',
    tunnel: true,
    cellular: true,
    internet: false,
    modem: [
      {
        id: 0,
        name: 'xiaomi',
        ip: '51.64.29.191',
        timer: '10:11',
        model: 'FM-32',
        operator: 'megafon',
        phoneNumber: '79998887766',
      },
      {
        id: 1,
        name: 'xiaomi',
        ip: '51.64.29.191',
        timer: '6:24',
        model: 'FM-32',
        operator: 'megafon',
        phoneNumber: '79998887766',
      },
    ],
  },
  {
    id: 2,
    ip: '169.176.85.219',
    lastActive: '11:00, 25.01.2024',
    tunnel: false,
    cellular: true,
    internet: true,
    modem: [
      {
        id: 0,
        name: 'meizu',
        ip: '169.176.85.219',
        timer: '18:30',
        model: 'FM-32',
        operator: 'megafon',
        phoneNumber: '79998887766',
      },
      {
        id: 1,
        name: 'meizu',
        ip: '169.176.85.219',
        timer: '20:53',
        model: 'FM-32',
        operator: 'megafon',
        phoneNumber: '79998887766',
      },
    ],
  },
  {
    id: 3,
    ip: '122.132.15.125',
    lastActive: '15:00, 18.02.2024',
    tunnel: true,
    cellular: false,
    internet: true,
    modem: [
      {
        id: 0,
        name: 'honor',
        ip: '122.132.15.125',
        timer: '16:20',
        model: 'FM-32',
        operator: 'megafon',
        phoneNumber: '79998887766',
      },
      {
        id: 1,
        name: 'honor',
        ip: '122.132.15.125',
        timer: '14:22',
        model: 'FM-32',
        operator: 'megafon',
        phoneNumber: '79998887766',
      },
    ],
  },
  {
    id: 4,
    ip: '156.94.251.219',
    lastActive: '6:45, 1.03.2024',
    tunnel: true,
    cellular: true,
    internet: true,
    modem: [
      {
        id: 0,
        name: 'samsung',
        ip: '156.94.251.219',
        timer: '5:10',
        model: 'FM-32',
        operator: 'megafon',
        phoneNumber: '79998887766',
      },
      {
        id: 1,
        name: 'samsung',
        ip: '156.94.251.219',
        timer: '1:20',
        model: 'FM-32',
        operator: 'megafon',
        phoneNumber: '79998887766',
      },
    ],
  },
  {
    id: 5,
    ip: '11.202.85.242',
    lastActive: '22:33, 30.01.2024',
    tunnel: true,
    cellular: true,
    internet: true,
    modem: [
      {
        id: 0,
        name: 'oneplus',
        ip: '11.202.85.242',
        timer: '30:10',
        model: 'FM-32',
        operator: 'megafon',
        phoneNumber: '79998887766',
      },
      {
        id: 1,
        name: 'oneplus',
        ip: '11.202.85.242',
        timer: '17:21',
        model: 'FM-32',
        operator: 'megafon',
        phoneNumber: '79998887766',
      },
    ],
  },
  {
    id: 6,
    ip: '230.48.83.119',
    lastActive: '22:33, 30.01.2024',
    tunnel: true,
    cellular: true,
    internet: true,
    modem: [
      {
        id: 0,
        name: 'apple',
        ip: '230.48.83.119',
        timer: '22:22',
        model: 'FM-32',
        operator: 'megafon',
        phoneNumber: '79998887766',
      },
      {
        id: 1,
        name: 'apple',
        ip: '230.48.83.119',
        timer: '11:11',
        model: 'FM-32',
        operator: 'megafon',
        phoneNumber: '79998887766',
      },
    ],
  },
];

export interface IRouter {
  id: number;
  ip: string;
  lastActive: string;
  tunnel: boolean;
  cellular: boolean;
  internet: boolean;
  modem: IModem[];
}

export interface IModem {
  id: number;
  name: string;
  ip: string;
  timer: string;
  model: string;
  operator: string;
  phoneNumber: string;
}
