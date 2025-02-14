import { useState } from "react";

export default function Login() {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleButtonClick = (value: string) => {
    if (input.length < 8) {
      setInput(input + value);
    }
  };

  const handleSubmit = () => {
    if (input === "04122024") {
      // Redirección en Astro
      window.location.href = "/garden";
    } else {
      setError("Como no vas ha recordar una fecha tan especial😞😞...");
    }
  };

  const handleClear = () => {
    setInput("");
    setError("");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-lg shadow-gray-400 max-w-md w-full">
        <div className="text-center mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md text-center"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map(
            (value) => (
              <button
                key={value}
                onClick={() => handleButtonClick(value)}
                className="p-4 bg-rose-400 text-white rounded-md hover:bg-rose-700"
              >
                {value}
              </button>
            )
          )}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleClear}
            className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Limpiar
          </button>
          <button
            onClick={handleSubmit}
            className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
