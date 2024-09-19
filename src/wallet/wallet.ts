import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const packageDefinition = protoLoader.loadSync('../proto/wallet.proto', {});
const walletProto = grpc.loadPackageDefinition(packageDefinition).pactus as any;

// Create a gRPC client
const client = new walletProto.Wallet(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

interface CreateWalletRequest {
  name: string;
  password: string;
}

/**
 * CreateWallet - Calls the SayHello method of the ExampleService.
 * @param {string} name - The name to include in the greeting.
 * @param {string} password - The password to secure the wallet.
 * @returns {Promise<string>} - A promise that resolves with the greeting message.
 */
function CreateWallet({name, password}: CreateWalletRequest) {
  return new Promise((resolve, reject) => {
    const request = { name: name, password: password};

    client.CreateWallet(request, (error, response) => {
      if (error) {
        return reject(error);
      }
      resolve(response.message);
    });
  });
}

// Export the methods as part of the SDK
module.exports = {
  CreateWallet,
};