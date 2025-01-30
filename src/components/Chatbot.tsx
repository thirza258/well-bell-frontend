import {useState} from "react";
import ReactMarkdown from "react-markdown";
import background from "../assets/background.png"
import services from "../services/services";

const Chatbot = () => {
  const [messages, setMessages] = useState<{ text: string; user: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, user: "me" },
      ]);
      const userInput = input;
      setInput("");

      try {
        const response = await services.getChatbotResponse(userInput);
        const botMessage = await response.data;
        
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botMessage, user: "bot" },
        ]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Sorry, something went wrong.", user: "bot" },
        ]);
      }
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-100" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <div className="flex-grow overflow-y-auto p-4">
      <div className="flex items-center justify-between p-4 bg-blue-500 text-white mb-5">
        <button className="bg-blue-700 px-4 py-2 rounded" onClick={() => window.history.back()}>
        Back
        </button>
        <h1 className="text-xl font-bold">WellBell</h1>
        <div></div> {/* Placeholder to balance the flex layout */}
      </div>
      {messages.map((msg, index) => (
        <div
        key={index}
        className={`mb-2 ${msg.user === "me" ? "text-right" : "text-left"}`}
        >
        <div
          className={`inline-block px-4 py-2 rounded ${
          msg.user === "me"
            ? "bg-blue-500 text-white"
            : "bg-gray-300 text-black"
          }`}
        >
          <ReactMarkdown>{msg.text}</ReactMarkdown>
        </div>
        </div>
      ))}
      </div>
      <div className="flex-shrink-0 flex p-4 bg-white shadow-md">
      <input
        type="text"
        className="flex-grow border rounded px-4 py-2 mr-4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : null)}
        placeholder="Type your message here"
      />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
