/**
 * CreateWallet - Calls the CreateWallet method of the WalletService.
 * @param client - grpc client
 * @param {string} name - The name of wallet.
 * @param {string} password - The password to secure the wallet.
 * @returns {Promise<string>} - A promise that resolves with the CreateWallet message.
 */
const CreateWallet = (client, name, password) => {
    return new Promise((resolve, reject) => {
        const request = { name, password };
        client.CreateWallet(request, (error, response) => {
            if (error) {
                return reject(error);
            }
            resolve(response?.message || "No message received");
        });
    });
};
export default CreateWallet;
