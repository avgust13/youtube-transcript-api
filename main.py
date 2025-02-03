from flask import Flask, request, jsonify
from youtube_transcript_api import YouTubeTranscriptApi

app = Flask(__name__)
PORT = 3000  # Change as needed

@app.route('/transcript', methods=['GET'])
def get_transcript():
    video_id_or_url = request.args.get('video')
    
    if not video_id_or_url:
        return jsonify({"error": "Missing 'video' query parameter (videoId or URL)."}), 400
    
    try:
        transcript = YouTubeTranscriptApi.get_transcript(video_id_or_url)
        return jsonify({"transcript": transcript})
    except Exception as error:
        print(f"Error fetching transcript: {error}")
        return jsonify({"error": str(error)}), 500

if __name__ == '__main__':
    app.run(port=PORT, debug=True)
