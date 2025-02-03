import express from 'express';
import { YoutubeTranscript } from 'youtube-transcript';

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * GET /transcript
 * Expects a query parameter 'video' which can be a YouTube video ID or full URL.
 */
app.get('/transcript', async (req, res) => {
  const videoIdOrUrl = req.query.video;

  if (!videoIdOrUrl) {
    return res.status(400).json({ error: 'Missing "video" query parameter (videoId or URL).' });
  }

  try {
    // Fetch the transcript using the provided video ID or URL.
    const transcript = await YoutubeTranscript.fetchTranscript(videoIdOrUrl);
    res.json({ transcript });
  } catch (error) {
    console.error('Error fetching transcript:', error);
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
