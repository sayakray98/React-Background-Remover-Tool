export default function Workspace({ file, handleRemove, loading, reset }) {
  return (
    <div className="workspace">
      <h2>Original Image</h2>

      <img src={URL.createObjectURL(file)} />

      <div className="buttons">
        <button onClick={handleRemove} disabled={loading}>
          {loading ? "AI Processing..." : "Remove Background"}
        </button>

        <button className="secondary" onClick={reset}>
          Change Image
        </button>
      </div>
    </div>
  );
}
