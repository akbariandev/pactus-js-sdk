import * as grpc from '@grpc/grpc-js';
import {pactus} from "./proto/gen/wallet";
import CreateWallet from "./wallet/wallet";

interface GRPCServiceOptions {
    address: string;
}

class GRPCServiceClient {
    private walletClient: pactus.WalletClient;

    constructor(options: GRPCServiceOptions) {
        const {address} = options;

        this.walletClient = new pactus.WalletClient(
            address,
            grpc.credentials.createInsecure()
        );
    }

    /**
     * CreateWallet - Calls the CreateWallet method of the WalletService.
     * @returns {Promise<string>} - A promise that resolves with the CreateWallet message.
     * @param wallet_name
     * @param password
     */
    public CreateWallet(wallet_name: string, password: string): Promise<string> {
        const request = new pactus.CreateWalletRequest({wallet_name, password});
        return CreateWallet(this.walletClient, request);
    }
}

export default GRPCServiceClient;
