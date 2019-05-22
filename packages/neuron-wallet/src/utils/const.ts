export const MIN_PASSWORD_LENGTH = 8
export const MAX_PASSWORD_LENGTH = 50

export enum Channel {
  Initiate = 'initiate',
  SetLanguage = 'setLanguage',
  NavTo = 'navTo',
  Terminal = 'terminal',
  Networks = 'networks',
  Wallets = 'wallets',
  Transactions = 'transactions',
  Helpers = 'helpers',
}

export default {
  Channel,
}
