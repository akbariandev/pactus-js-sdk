import * as grpc from '@grpc/grpc-js';
import {pactus} from "../proto/gen/wallet";
import { CallOptions } from "@grpc/grpc-js/build/src/client";

/**
 * CreateWallet - Calls the CreateWallet method of the WalletService.
 * @param client - grpc client
 * @param request
 * @returns {Promise<string>} - A promise that resolves with the CreateWallet message.
 */
const CreateWallet = (client: pactus.WalletClient,  request: pactus.CreateWalletRequest): Promise<string> => {
  return new Promise((resolve, reject) => {
    const metaData = new grpc.Metadata({})
    const options: CallOptions = {}
    client.CreateWallet(request, metaData, options,(err, response) =>  {
      if (err != null) {
        return reject(err);
      }
      resolve(response?.mnemonic || "no response");
    });
  });
}

export default CreateWallet