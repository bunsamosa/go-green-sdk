import sendMessage from './gpthandler'

import {
    advisorPrompt,
    shortPrompt,
    longPrompt,
    recyclePrompt,
    reUsePrompt,
    alternativePrompt } from './prompts';
export class advisorClient {
    private endpoint: string;
    private apiKey: string;

    // initialize sdk with api key
    constructor(endpoint: string, apiKey: string) {
        this.endpoint = endpoint;
        this.apiKey = apiKey;
    }

    // request advise for recycling
    public async recycleItem(item: string, type: 'short'|'long') {
        let prompt = shortPrompt;

        if (type === 'long') {
            prompt = longPrompt;
        }

        const userMsg = prompt + recyclePrompt.replace('{item}', item)
        const res = await sendMessage(this.endpoint, this.apiKey, advisorPrompt, userMsg);
        return res.text;
    }

    // request advise for reusing
    public async reUseItem(item: string, type: 'short'|'long') {
        let prompt = shortPrompt;

        if (type === 'long') {
            prompt = longPrompt;
        }

        const userMsg = prompt + reUsePrompt.replace('{item}', item);
        const res = await sendMessage(this.endpoint, this.apiKey, advisorPrompt, userMsg);
        return res.text;
    }

    // request advise for alternative
    public async alternativeItem(item: string, type: 'short'|'long') {
        let prompt = shortPrompt;

        if (type === 'long') {
            prompt = longPrompt;
        }

        const userMsg = prompt + alternativePrompt.replace('{item}', item);
        const res = await sendMessage(this.endpoint, this.apiKey, advisorPrompt, userMsg);
        return res.text;
    }

    // send a generic message to the bot
    public async sendMessage(message: string) {
        const res = await sendMessage(this.endpoint, this.apiKey, advisorPrompt, message);
        return res.text;
    }
}

export default { advisorClient };
