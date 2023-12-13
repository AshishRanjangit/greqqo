import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const VerifyEmail = () => {
  const router = useRouter();
  const { token } = router.query;
  const [verificationStatus, setVerificationStatus] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get(`/api/verifyEmail?token=${token}`);
        setVerificationStatus(response.data.message);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (token) {
      verifyUser();
    }
  }, [token]);

  return (
    <div>
      {verificationStatus && <p>{verificationStatus}</p>}
      <p>token</p>
    </div>
  );
};

export default VerifyEmail;
