import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onUploadFood } from '../../redux/homeAction';
import './home.css';

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [secondsAlive, setSecondsAlive] = useState(0);

  const food = useSelector((s: any) => s.home.foodItem);

  useEffect(() => {
    setInterval(() => setSecondsAlive(secondsAlive + 1), 1000);
  }, []);

  function handleFood() {
    // This is to simulate an API loading start
    setLoading(true);

    dispatch(onUploadFood({
      food: {
        id: '1',
        data: {
          name: 'Banana',
        },
      },
      onComplete: () => {
        // This is to simulate an API loading completion
        setLoading(false);
      }
    }));
  }

  return (
    <div className="Home">
      {JSON.stringify(food)}

      <div>
        App alive for {secondsAlive} seconds
      </div>

      <div style={{ paddingTop: 100, paddingBottom: 100 }}>
        <button disabled={loading} onClick={handleFood}>
          Add Food
        </button>
      </div>
      {loading ? (
        <button disabled={!food} onClick={() => food.onComplete()}>
          Simulate API completing Save
        </button>
      ) : null}
    </div>
  );
}

export default Home;
