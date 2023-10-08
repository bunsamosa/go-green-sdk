import { Connex } from '@vechain/connex'
import { VECHAIN_MAINNET, VECHAIN_TESTNET } from './networks';

export class authClient {
    private node: string;
    private net: 'main' | 'test';
    private connex: Connex;
    private vendor: Connex.Vendor;
    private name: string;
    private userAddress: string | null = null;

    // Initialize the SDK with the network and app name
    constructor(public network: 'main' | 'test', public appName: string) {
       if( network === 'main' ) {
              this.node = VECHAIN_MAINNET;
              this.net = 'main';
        }
        else {
                this.node = VECHAIN_TESTNET;
                this.net = 'test';
            }

        // create connex instance
        this.connex = new Connex({
            node: this.node,
            network: this.net
        });

        // create vendor instance
        this.vendor = new Connex.Vendor(this.net);
        this.name = appName;
    }

    // login method to request user to sign a message
    public async login(): Promise<string | null> {
        const cert = this.vendor.sign("cert", {
            purpose: "identification",
            payload: {
                type: "text",
                content: "Welcome to " + this.name + "!\n\
                Please sign this message to verify your identity."
            }
        });
        try {
            const res = await cert.request();
            this.userAddress = res.annex.signer;
            return this.userAddress;
        }
        catch(err) {
            console.log(err);
            this.userAddress = null;
        };
        return this.userAddress;
    };

    // fetch user address
    public getUserAddress(): string | null {
        return this.userAddress;
    };

    // return connext instance
    public getConnex(): Connex {
        return this.connex;
    };

    // return vendor instance
    public getVendor(): Connex.Vendor {
        return this.vendor;
    };
}
export default {authClient};
