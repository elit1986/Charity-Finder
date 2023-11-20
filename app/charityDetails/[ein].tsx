import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchCharity } from '@/utils';
import { CharityProps } from '@/types';

const CharityDetails = () => {
  const router = useRouter();
  const { ein } = router.query;

  const [charity, setCharity] = useState<CharityProps | null>(null);

  useEffect(() => {
    if (ein) {
      const fetchData = async () => {
        const data = await fetchCharity(ein as string);
        setCharity(data);
      };

      fetchData();
    }
  }, [ein]);

  if (!charity) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{charity.name}</h1>
      <p>{charity.location}</p>
      <p>{charity.description}</p>
    </div>
  );
};

export default CharityDetails;
