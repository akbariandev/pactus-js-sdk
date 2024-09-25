import * as grpc from '@grpc/grpc-js';
const GetNetWorkInfo = (client, request) => {
    return new Promise((resolve, reject) => {
        const metaData = new grpc.Metadata({});
        const options = {};
        client.GetNetworkInfo(request, metaData, options, (err, response) => {
            if (err != null) {
                return reject(err);
            }
            if (response === undefined) {
                return reject(new Error("no network info response"));
            }
            resolve(response);
        });
    });
};
export default GetNetWorkInfo;
