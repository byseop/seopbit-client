import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { useDispatch } from 'react-redux';
import { fetchMarkets } from '@src/reducers/markets';

export default function useInit() {
  // 첫 앱 실행시 필요한 항목들을 관리한다.
  const dispatch = useDispatch();

  useEffect(() => {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: 'seop-bit.firebaseapp.com',
      projectId: 'seop-bit',
      storageBucket: 'seop-bit.appspot.com',
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    };

    // 파이어베이스 연동
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);

    // 마켓목록 가져오기
    dispatch(fetchMarkets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
