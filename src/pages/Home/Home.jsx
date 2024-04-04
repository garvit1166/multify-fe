import React from 'react';
import InfoBar from '../../components/InfoBar/InfoBar';
import LogSection from '../../components/LogSection/LogSection';

function Home() {
  return (
    <div
      className={`d-flex flex-column bg-dark w-100`}
      style={{ height: '100vh' }}
    >
      <div>
        <InfoBar heading={'LOG INFO'} />
      </div>
      <div className="text-white p-4 position-relative h-100">
        <LogSection />
      </div>
    </div>
  );
}

export default Home;
