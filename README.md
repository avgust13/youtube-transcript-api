# YouTube Transcript Microservice

A REST microservice to fetch YouTube video transcripts.

## Description

This microservice allows you to fetch the transcript of a YouTube video by providing the video ID or URL.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/youtube-transcript-microservice.git
    cd youtube-transcript-microservice
    ```

2. Install the dependencies:
    ```sh
    pip install -r requirements.txt
    ```

## Usage

1. Start the server:
    ```sh
    python main.py
    ```

2. Make a GET request to `/transcript` with the `video` query parameter (YouTube video ID or URL):
    ```sh
    curl "http://localhost:3000/transcript?video=VIDEO_ID_OR_URL"
    ```

## Example

```sh
curl "http://localhost:3000/transcript?video=https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

## Dependencies

- Flask
- youtube-transcript-api

## License

This project is licensed under the MIT License.
