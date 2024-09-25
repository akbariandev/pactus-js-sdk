import * as grpc from '@grpc/grpc-js';
import { pactus } from "./rpc/gen/network.js";
import GetNetWorkInfo from "./network/info.js";
class GRPCServiceClient {
    networkClient;
    constructor(options) {
        const { address } = options;
        this.networkClient = new pactus.NetworkClient(address, grpc.credentials.createInsecure());
    }
    /**
     * GetNetWorkInfo - Calls the GetNetWorkInfo method of the NetworkService.
     * @returns {Promise<GetNetworkInfoResponse>} - A promise that resolves with the GetNetWorkInfo response.
     * @param only_connected indicates that info must be based on connected peers or whole network
     */
    GetNetWorkInfo(only_connected) {
        const request = new pactus.GetNetworkInfoRequest({ only_connected });
        return GetNetWorkInfo(this.networkClient, request);
    }
}
export default GRPCServiceClient;
