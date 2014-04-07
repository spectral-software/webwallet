'use strict';

angular.module('webwalletApp').value('config', {
  // default coin name for new accounts
  coin: 'Bitcoin',

  // fee per kb for new txs
  feePerKb: 10000,

  // coin name -> backend config
  backends: {
    Bitcoin: {
      endpoint: 'https://mytrezor.com',
      transport: 'long-polling'
    },
    Testnet: {
      endpoint: 'http://test-api.bitsofproof.com:8080',
      transport: 'websocket'
    }
  },

  // coin name -> public address version
  versions: {
    Bitcoin: 76067358,
    Testnet: 70617039
  },

  // coin name -> bip32 tree index
  indices: {
    Bitcoin: 0,
    Testnet: 0 // TODO: change to 1
  }
});
