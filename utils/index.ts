import axios from 'axios';

const charityAPIKey = process.env.NEXT_PUBLIC_CHARITY_API_KEY;

export const fetchCharities = async ({ cause }: { cause: string }) => {
  try {
    const API_URL = `https://partners.every.org/v0.2/search/${cause}?apiKey=${charityAPIKey}`;
    const response = await axios.get(API_URL);
    return response.data.nonprofits;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchCharity = async (ein: string) => {
  try {
    const API_URL = `https://partners.every.org/v0.2/nonprofit/${ein}?apiKey=${charityAPIKey}`;
    const response = await axios.get(API_URL);
    return response.data.data.nonprofit;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
