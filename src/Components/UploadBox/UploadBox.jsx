export default function UploadBox({ setFile }) {
  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (selected) setFile(selected);
  };

  return (
    <div className="upload-box">
      <input type="file" accept="image/*" onChange={handleChange} />
      <p>Click to upload image</p>
    </div>
  );
}
