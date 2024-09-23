import GRPCServiceClient from '../dist/grpc.js';

const clientOptions = {
    address: 'bootstrap1.pactus.org:50051',
};

const client = new GRPCServiceClient(clientOptions);

async function main() {
    try {
        const greeting = await client.CreateWallet("foo", "bar");
        console.log('Greeting received:', greeting);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

main()