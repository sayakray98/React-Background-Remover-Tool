import { useState } from "react";
import { removeBackground } from "@imgly/background-removal";
import UploadBox from "./Components/UploadBox/UploadBox";
import Workspace from "./Components/Workspace/Workspace";
import ResultPanel from "./Components/ResultPanel/ResultPanel";

export default function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRemove = async () => {
    if (!file) return;

    setLoading(true);

    try {
      const blob = await removeBackground(file);
      const url = URL.createObjectURL(blob);
      setResult(url);
    } catch (e) {
      alert("AI failed to process image");
    }

    setLoading(false);
  };

  const reset = () => {
    setFile(null);
    setResult(null);
  };

  return (
    <div className="app">
      <h1>AI Background Remover</h1>

      {!file && <UploadBox setFile={setFile} />}

      {file && !result && (
        <Workspace
          file={file}
          loading={loading}
          handleRemove={handleRemove}
          reset={reset}
        />
      )}

      {result && <ResultPanel result={result} reset={reset} />}
    </div>
  );
}
