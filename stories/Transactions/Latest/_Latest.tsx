import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './Latest.demotab';

const code = `import React from 'react';

import { useTransactionsLatest } from '../../../src';

const Latest = () => {
  const [{ response, isLoading, error }, fetch] = useTransactionsLatest();

  return (
    <>
      <button className="fetch" onClick={fetch}>
        Fetch
      </button>
      {error && <div>Error fetching data</div>}
      {isLoading && <div>Loading...</div>}
      {response && (
        <ol className="list">
          {response.data.map(transaction => (
            <li key={transaction.id}>
              <div>
                <div>Amount: </div>
                <div>{transaction.amount}</div>
              </div>
              <div>
                <div>Fee: </div>
                <div>{transaction.fee}</div>
              </div>
              <div>
                <div>Sender: </div>
                <div>{transaction.sender}</div>
              </div>
              <div>
                <div>Recipient: </div>
                <div>{transaction.recipient}</div>
              </div>
              <div>
                <div>Block ID: </div>
                <div>{transaction.blockId}</div>
              </div>
              <div>
                <div>Confirmations: </div>
                <div>{transaction.confirmations}</div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default Latest;
`;

const _Latest = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);

export default _Latest;
