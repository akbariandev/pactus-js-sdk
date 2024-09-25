import GRPCServiceClient from '../dist/grpc.js';

const clientOptions = {
    address: 'testnet1.pactus.org:50052',
};

const client = new GRPCServiceClient(clientOptions);
async function network_info() {
    try {
        const info = await client.GetNetWorkInfo(false);
        console.log('Network Name:', info.network_name);
        console.log('Peers Count:', info.connected_peers_count);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

network_info()