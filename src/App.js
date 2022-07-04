import { useEffect, useState } from 'react';
import dividerSmall from './img/pattern-divider-mobile.svg';
import dividerBig from './img/pattern-divider-desktop.svg';
import dice from './img/icon-dice.svg';

function App() {
  const [quote, setQuote] = useState({});
  const [animate, setAnimate] = useState(false);
  const [fade, setFade] = useState(false);

  async function getAdvice() {
    setAnimate(true);

    const response = await fetch('https://api.adviceslip.com/advice', {
      cache: 'no-cache'
    });
    const result = await response.json();
    console.log(result.slip);
    setQuote({
      id: result.slip.id,
      advice: result.slip.advice
    });

    setFade(true);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  const style = {
    card: 'bg-dark w-[90%] max-w-[500px] text-center rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4',
    id: 'text-green block my-6',
    advice: `${fade && 'animate-fade'} text-light text-3xl mb-6`,
    divider: 'text-center mx-auto mb-3',
    button:
      'block bg-green rounded-full p-4 mx-auto relative top-10 hover:shadow-circle hover:shadow-green ease-in-out duration-300',
    dice: animate && 'animate-spin'
  };

  return (
    <main className={style.card}>
      <span className={style.id}>advice #{quote.id}</span>
      <p
        id="quote"
        className={style.advice}
        onAnimationEnd={() => {
          setFade(false);
        }}
      >
        "{quote.advice}"
      </p>
      <img
        src={dividerSmall}
        srcSet={`${dividerSmall} 375w, ${dividerBig} 768w`}
        className={style.divider}
        alt=""
      />
      <button className={style.button} type="button" onClick={getAdvice}>
        <img
          className={style.dice}
          onAnimationEnd={() => {
            setAnimate(false);
          }}
          src={dice}
          alt=""
        />
      </button>
    </main>
  );
}

export default App;
