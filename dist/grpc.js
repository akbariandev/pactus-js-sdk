import * as grpc from '@grpc/grpc-js';
import { pactus } from "./proto/gen/wallet.js";
import CreateWallet from "./wallet/wallet.js";
class GRPCServiceClient {
    walletClient;
    constructor(options) {
        const { address } = options;
        this.walletClient = new pactus.WalletClient(address, grpc.credentials.createInsecure());
    }
    /**
     * CreateWallet - Calls the CreateWallet method of the WalletService.
     * @returns {Promise<string>} - A promise that resolves with the CreateWallet message.
     * @param wallet_name
     * @param password
     */
    CreateWallet(wallet_name, password) {
        const request = new pactus.CreateWalletRequest({ wallet_name, password });
        return CreateWallet(this.walletClient, request);
    }
}
export default GRPCServiceClient;
