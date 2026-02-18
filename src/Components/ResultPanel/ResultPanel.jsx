export default function ResultPanel({ result, reset }) {
  return (
    <div className="result">
      <h2>Background Removed</h2>

      <img src={result} />

      <div className="buttons">
        <a href={result} download="removed-bg.png">
          <button>Download Image</button>
        </a>

        <button className="secondary" onClick={reset}>
          Upload New
        </button>
      </div>
    </div>
  );
}
