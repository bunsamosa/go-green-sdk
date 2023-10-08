export const GOOGLE_VISION = "https://vision.googleapis.com/v1/images:annotate";
export const METADATA = {
    "requests": [
        {
            "image": {
                "content": ""
            },
            "features": [
                {
                    "type": "LABEL_DETECTION",
                    "maxResults": 1
                }
            ]
        }
    ]
}
