import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import CreateWallet from './wallet/wallet.js';

interface GRPCServiceOptions {
    address: string;
}

class GRPCServiceClient {
    private walletClient: any;

    constructor(options: GRPCServiceOptions) {
        const {address} = options;

        const WALLET_PROTO_PATH = './proto/wallet.proto';
        const walletPackageDefinition = protoLoader.loadSync(WALLET_PROTO_PATH, {});
        const walletProto = grpc.loadPackageDefinition(walletPackageDefinition).pactus as any;

        this.walletClient = new walletProto.Wallet(
            address,
            grpc.credentials.createInsecure()
        );
    }

    /**
     * CreateWallet - Calls the CreateWallet method of the WalletService.
     * @param {string} name - The name of wallet.
     * @param {string} password - The password to secure the wallet.
     * @returns {Promise<string>} - A promise that resolves with the CreateWallet message.
     */
    public CreateWallet(name: string, password: string): Promise<string> {
        return CreateWallet(this.walletClient, name, password);
    }
}

export default GRPCServiceClient;
