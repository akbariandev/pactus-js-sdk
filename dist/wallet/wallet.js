import * as grpc from '@grpc/grpc-js';
/**
 * CreateWallet - Calls the CreateWallet method of the WalletService.
 * @param client - grpc client
 * @param request
 * @returns {Promise<string>} - A promise that resolves with the CreateWallet message.
 */
const CreateWallet = (client, request) => {
    console.log(request);
    return new Promise((resolve, reject) => {
        const metaData = new grpc.Metadata({});
        const options = {};
        client.CreateWallet(request, metaData, options, (err, response) => {
            if (err != null) {
                return reject(err);
            }
            resolve(response?.mnemonic || "No message received");
        });
    });
};
export default CreateWallet;
