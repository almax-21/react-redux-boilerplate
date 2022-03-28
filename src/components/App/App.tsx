import React, { FC } from 'react';

import { Counter } from '../Counter';

export const App: FC = () => {
  return (
    <div className="app">
      <div className="content">
        <Counter />
      </div>
    </div>
  );
};
