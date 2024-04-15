

import { ChainId, Token, TokenAmount, Pair, Trade, TradeType, Route } from '@uniswap/sdk'
const estimate = navigator.storage.estimate();
estimate.then(({ usage, quota }) => {
  console.log(`Used storage: ${usage} bytes`);
  console.log(`Total storage quota: ${quota} bytes`);
});


export 
// our organization federation idP labels each user with a token  
const token = new Token(ChainId.MAINNET, '0xc0FFee0000000000000000000000000000000000', 18, 'HOT', 'Caffeine')



