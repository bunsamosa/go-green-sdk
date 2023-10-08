import { ChatGPTAPI } from 'chatgpt'
import {
    advisorPrompt,
    shortPrompt,
    longPrompt,
    recyclePrompt,
    reUsePrompt,
    alternativePrompt } from './prompts';


export class advisorClient {
    private client: ChatGPTAPI

    // initialize sdk with api key
    constructor(apiKey: string) {
        this.client = new ChatGPTAPI({
            apiKey: apiKey,
            systemMessage: advisorPrompt
        });
    }

    // request advise for recycling
    public async recycleItem(item: string, type: 'short'|'long') {
        let prompt = shortPrompt;

        if (type === 'long') {
            prompt = longPrompt;
        }

        const res = await this.client.sendMessage(prompt + recyclePrompt.replace('{item}', item));
        return res.text;
    }

    // request advise for reusing
    public async reUseItem(item: string, type: 'short'|'long') {
        let prompt = shortPrompt;

        if (type === 'long') {
            prompt = longPrompt;
        }

        const res = await this.client.sendMessage(prompt + reUsePrompt.replace('{item}', item));
        return res.text;
    }

    // request advise for alternative
    public async alternativeItem(item: string, type: 'short'|'long') {
        let prompt = shortPrompt;

        if (type === 'long') {
            prompt = longPrompt;
        }

        const res = await this.client.sendMessage(prompt + alternativePrompt.replace('{item}', item));
        return res.text;
    }

    // send a generic message to the bot
    public async sendMessage(message: string) {
        const res = await this.client.sendMessage(message);
        return res.text;
    }
}
