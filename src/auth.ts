import { Connex } from '@vechain/connex'
import { VECHAIN_MAINNET, VECHAIN_TESTNET } from './networks';

export class authClient {
    private node: string;
    private net: 'main' | 'test';
    private connex: Connex;
    private vendor: Connex.Vendor;
    private name: string;
    private userAddress: string | null = null;

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

    public login(): string | null {
        const cert = this.vendor.sign("cert", {
            purpose: "identification",
            payload: {
                type: "text",
                content: "Welcome to " + this.name + "!\n\
                Please sign this message to verify your identity."
            }
        });
        cert.request().then((res) => {
            this.userAddress = res.annex.signer;
        },
        (err) => {
            console.log(err);
        });
        return this.userAddress;
    };

    public getUserAddress(): string | null {
        return this.userAddress;
    };
}
export default {authClient};
