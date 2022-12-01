import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { useCounterContext } from '../../contexts/counterContext';

export const Home = () => {
  const [state, actions] = useCounterContext();




  return (
    <div>
      <h1 onClick={()=> actions.increase()}>{StaticRange.counter}</h1>

      <div>
        <Button onButtonClick={()=> actions.increase()}>Increase</Button>
      </div>
    </div>
  );
};