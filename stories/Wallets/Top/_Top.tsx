import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './Top.demotab';

const code = `import React from 'react';

import { useWalletsTop } from '../../../src';

const Top = () => {
  const [{ response, isLoading, error }, fetch] = useWalletsTop();

  return (
    <>
      <button className="fetch" onClick={fetch}>
        Fetch
      </button>
      {error && <div>Error fetching data</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        response && (
          <ol className="list">
            {response.data.map(wallet => (
              <li key={wallet.address}>
                <div>
                  <div>Address: </div>
                  <div>{wallet.address}</div>
                </div>
                <div>
                  <div>Balance: </div>
                  <div>Ѧ {wallet.balance}</div>
                </div>
                <div>
                  <div>Is delegate: </div>
                  <div>{wallet.isDelegate ? 'Yes' : 'No'}</div>
                </div>
                <div>
                  <div>Public key: </div>
                  <div>{wallet.publicKey}</div>
                </div>
              </li>
            ))}
          </ol>
        )
      )}
    </>
  );
};

export default Top;
`;

const _Top = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);

export default _Top;
