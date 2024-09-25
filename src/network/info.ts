import * as grpc from '@grpc/grpc-js';
import {pactus} from "../rpc/gen/network";
import { CallOptions } from "@grpc/grpc-js/build/src/client";

const GetNetWorkInfo = (client: pactus.NetworkClient,  request: pactus.GetNetworkInfoRequest): Promise<pactus.GetNetworkInfoResponse> => {
    return new Promise((resolve, reject) => {
        const metaData = new grpc.Metadata({})
        const options: CallOptions = {}
        client.GetNetworkInfo(request, metaData, options,(err, response) =>  {
            if (err != null) {
                return reject(err);
            }

            if (response === undefined) {
                return reject(new Error("no network info response"));
            }
            resolve(response);
        });
    });
}

export default GetNetWorkInfo