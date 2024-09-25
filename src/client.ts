import * as grpc from '@grpc/grpc-js';
import {pactus} from "./rpc/gen/network";
import GetNetWorkInfo from "./network/info";

interface GRPCServiceOptions {
    address: string;
}

class GRPCServiceClient {
    private networkClient: pactus.NetworkClient;

    constructor(options: GRPCServiceOptions) {
        const {address} = options;

        this.networkClient = new pactus.NetworkClient(
            address,
            grpc.credentials.createInsecure()
        );
    }

    /**
     * GetNetWorkInfo - Calls the GetNetWorkInfo method of the NetworkService.
     * @returns {Promise<GetNetworkInfoResponse>} - A promise that resolves with the GetNetWorkInfo response.
     * @param only_connected indicates that info must be based on connected peers or whole network
     */
    public GetNetWorkInfo(only_connected: boolean): Promise<pactus.GetNetworkInfoResponse> {
        const request = new pactus.GetNetworkInfoRequest({only_connected});
        return GetNetWorkInfo(this.networkClient, request);
    }
}

export default GRPCServiceClient;
