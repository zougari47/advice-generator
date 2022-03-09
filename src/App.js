import { useEffect, useState } from 'react';

function App() {
  //max advice = 244;
  const [quote, setQuote] = useState({
    id: 0,
    advice: 'SOMETHING WENT WRANG PLEASE TRY AGAIN !!'
  });
  const p = document.querySelector('#quote') || '';

  // animation paragraph
  try {
    p.classList.remove('fade');
    setTimeout(function () {
      p.classList.add('fade');
    }, 1000);
  } catch (error) {}

  function getAdvice() {
    // animation
    const btn = document.querySelector('button');
    btn.classList.remove('active');

    setTimeout(function () {
      btn.classList.add('active');

      // get advice
      fetch(`https://api.adviceslip.com/advice`, {
        cache: 'no-cache'
      })
        .then((req) => req.json())
        .then((data) => setQuote(data.slip));
    }, 200);
  }

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice`, {
      cache: 'no-cache'
    })
      .then((req) => req.json())
      .then((data) => setQuote(data.slip));
  }, []);

  return (
    <main className="card">
      <span id="advice-id">advice #{quote.id ? quote.id : 0}</span>
      <p id="quote">
        {quote.advice
          ? `"${quote.advice}"`
          : 'SOMETHING WENT WRANG PLEASE TRY AGAIN !!'}
      </p>
      <div className="divider"></div>
      <button type="button" onClick={getAdvice}></button>
    </main>
  );
}

export default App;
