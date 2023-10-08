export class profileClient {
    private metadataServer: string;

    constructor(url: string) {
        this.metadataServer = url;
    }

    // fetch users profile
    public async getProfile(address: string) {
        const response = await fetch(`${this.metadataServer}/user?tokenID=${address}`);
        const data = await response.json();
        return data;
    }

    // update users profile
    public async updateMetadata(address: string, metadata: any) {
        const response = await fetch(`${this.metadataServer}/update?tokenID=${address}`, {
            method: 'POST',
            body: JSON.stringify({ metadata }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    }
}
export default {profileClient};
