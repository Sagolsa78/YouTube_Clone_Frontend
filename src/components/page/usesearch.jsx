import { useState } from 'react';

export function useYoutubeSearch() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchYoutube = async (query) => {
    setIsLoading(true);
    setError(null);

    const url = `https://youtube-v31.p.rapidapi.com/search?q=${encodeURIComponent(
      query
    )}&part=snippet&maxResults=10`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY || '',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setResults(data.items);
    } catch (err) {
      setError('An error occurred while fetching data');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { results, isLoading, error, searchYoutube };
}
