import { GOOGLE_VISION, METADATA } from './constants';

export class visionClient{
    private url: string;

    constructor(public apiKey: string) {
        this.url = GOOGLE_VISION + "?key=" + apiKey;
    }

    // annotate image from url
    public async annotateURL(url: string) {
        METADATA.requests[0].image.content = url;
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(METADATA)
        });
        const data = await response.json();
        return data;
    }

    // annotate image from base64
    public async annotateBase64(base64: string) {
        METADATA.requests[0].image.content = base64;
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(METADATA)
        });
        const data = await response.json();
        return data;
    }
}
