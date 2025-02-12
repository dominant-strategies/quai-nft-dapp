/* eslint-disable  @typescript-eslint/no-explicit-any */

import { dispatchAccount } from '@/components/utils';

// ---- request accounts ---- //
// only called on user action, prompts user to connect their wallet
// gets user accounts and provider if user connects their wallet

const requestAccounts = async (dispatch: any, web3provider: any) => {
  if (!web3provider) {
    console.log('No pelagus provider found.');
    return;
  }
  await web3provider
    .send('quai_requestAccounts')
    .then((accounts: Array<string>) => {
      console.log('Accounts returned: ', accounts);
      dispatchAccount(accounts, dispatch);
    })
    .catch((err: Error) => {
      console.log('Error getting accounts.', err);
    });
};

export default requestAccounts;