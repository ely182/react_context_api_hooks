import { useEffect } from 'react';
import { useCounterContext } from '../../contexts/counterContext';

export const Home = () => {
  const [state, actions] = useCounterContext();



useEffect(() => {
  actions.increase();
},[ ]);

  return (
    <div>
      <h1 onClick={()=> actions.increase()}>Oi</h1>
    </div>
  );
};