const Button = (props) => {
  const { variant = "bg-black", text = "..." } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {text}
    </button>
  );
};

function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center bg-slate-300">
        <div className="flex gap-3">
          <Button text="afani"></Button>
          <Button variant="bg-yellow-700"></Button>
          <Button variant="bg-green-700" text="dhea"></Button>
        </div>
      </div>
    </>
  );
}

export default App;
