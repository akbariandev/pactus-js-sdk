import * as grpc from '@grpc/grpc-js';

interface CreateWalletResponse {
  message?: string;
}

interface CreateWalletRequest {
  name?: string;
  password?: string;
}

/**
 * CreateWallet - Calls the CreateWallet method of the WalletService.
 * @param client - grpc client
 * @param {string} name - The name of wallet.
 * @param {string} password - The password to secure the wallet.
 * @returns {Promise<string>} - A promise that resolves with the CreateWallet message.
 */
const CreateWallet = (client: any, name: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const request: CreateWalletRequest = { name, password};
    client.CreateWallet(request,  (error: grpc.ServiceError | null, response: CreateWalletResponse) =>  {
      if (error) {
        return reject(error);
      }
      resolve(response?.message || "No message received");
    });
  });
}

export default CreateWallet