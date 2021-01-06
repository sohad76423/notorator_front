import react from "react";

function Assets() {
  function handleChange(event) {
    console.log(event.target.value);
  }
  function handleClick() {}
  return (
    <div className="container">
      <h1>give your info for your assets </h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeHolder="title"
          //value={title}
        />
        <input
          onChange={handleChange}
          type="text"
          placeHolder="snippet type"
          //value={snippetType}
        />
        <input
          onChange={handleChange}
          type="text"
          placeHolder="author name"
          //value={author}
        />
        <input
          onChange={handleChange}
          type="text"
          placeHolder="your content"
          //value={content}
        />
        <input
          onChange={handleChange}
          type="text"
          placeHolder="website url"
          //value={url}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}
export default Assets;
