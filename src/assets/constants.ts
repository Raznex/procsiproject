export const router: Payment[] = [
  {
    id: '0',
    ip: '10.20.30.40',
    externalIp: '10.10.0.1',
    routerModel: 'TP-Link',
    location: 'М/C/D/6.1 или Москва, Дубнинская, д.11',
    phoneNumber: '79651234567',
    operator: 'MTS',
    serverConnectionType: 'WG/GRE/Local/',
    web_log: 'admin:password',
    ssh_log: 'admin:password',
    modemAmount: '1/2/3/4',
    modemModel: 'Huawei 3372-153h/Meiglink 838/',
    modemWebIp: '192.168.0.1/router_interface',
    clientPort: 'djuGSjnd:60001/adnrei:53292',
    rebootType: 'local/commander',
    modemSignal: '-63db/-12db',
    lifeTime: '5d16h32m',
  },
  {
    id: '1',
    ip: '10.20.30.40',
    externalIp: '10.10.0.1',
    routerModel: 'TP-Link',
    location: 'М/C/D/6.1 или Москва, Дубнинская, д.11',
    phoneNumber: '79651234567',
    operator: 'Megafon',
    serverConnectionType: 'WG/GRE/Local/',
    web_log: 'admin:password',
    ssh_log: 'admin:password',
    modemAmount: '1/2/3/4',
    modemModel: 'Huawei 3372-153h/Meiglink 838/',
    modemWebIp: '192.168.0.1/router_interface',
    clientPort: 'djuGSjnd:60001/adnrei:53292',
    rebootType: 'local/commander',
    modemSignal: '-63db/-12db',
    lifeTime: '5d16h32m',
  },
  {
    id: '2',
    ip: '10.20.30.40',
    externalIp: '10.10.0.1',
    routerModel: 'TP-Link',
    location: 'М/C/D/6.1 или Москва, Дубнинская, д.11',
    phoneNumber: '79651234567',
    operator: 'MTS',
    serverConnectionType: 'WG/GRE/Local/',
    web_log: 'admin:password',
    ssh_log: 'admin:password',
    modemAmount: '1/2/3/4',
    modemModel: 'Huawei 3372-153h/Meiglink 838/',
    modemWebIp: '192.168.0.1/router_interface',
    clientPort: 'djuGSjnd:60001/adnrei:53292',
    rebootType: 'local/commander',
    modemSignal: '-63db/-12db',
    lifeTime: '5d16h32m',
  },
];

export type Payment = {
  id: string;
  ip: string;
  externalIp: string;
  routerModel: string;
  location: string;
  phoneNumber: string;
  operator: string;
  serverConnectionType: string;
  web_log: string;
  ssh_log: string;
  modemAmount: string;
  modemModel: string;
  modemWebIp: string;
  clientPort: string;
  rebootType: string;
  modemSignal: string;
  lifeTime: string;
};
