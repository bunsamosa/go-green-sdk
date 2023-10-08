// Define a function to send a message to ChatGPT
export default async function sendMessage(
    endpoint: string, apiKey: string,
    system: string, message: string) {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: 'system',
                        content: system
                    },
                    {
                        role: 'user',
                        content: message
                    }],
            }),
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        const assistantResponse = data.choices[0].message.content;
        // Handle the assistant's response here
        console.log('Assistant response:', assistantResponse);
        return assistantResponse;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
