import { useState, useEffect, useRef } from "react";
import api from "../../services/api";
import Card from "../common/Card";
import { Bot, User } from "lucide-react";

export default function CopilotChat({ passport }) {

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

 async function ask(text = question) {
  if (!text.trim() || loading) return;

  const userMessage = {
    role: "user",
    content: text,
  };

  const updatedMessages = [...messages, userMessage];

  setMessages(updatedMessages);
  setLoading(true);

  try {
    const res = await api.post("/copilot", {
      question: text,
      passport,
      history: updatedMessages,
    });

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: res.data.answer,
      },
    ]);
  } catch (err) {
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:
          "Sorry, I couldn't process your request. Please try again.",
      },
    ]);
  }

  setLoading(false);
  setQuestion("");
}

  const suggestions = [

"Why is my trust score 94?",

"How can I improve privacy?",

"Explain governance score",

"Generate executive summary",

"Generate audit report",

"How do I reach 100?",

];
const chatEndRef = useRef(null);

useEffect(() => {
  chatEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);

  return (

    <Card className="mt-10">

      <div className="flex items-center gap-3">

        <Bot className="text-blue-400" />

        <h2 className="text-2xl font-bold">

          AI Governance Copilot

        </h2>

      </div>

      <div className="space-y-4 mt-8 max-h-96 overflow-y-auto">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div ref={chatEndRef}></div>

            <div
              className={`max-w-xl rounded-2xl p-4 ${
                msg.role === "user"
                  ? "bg-blue-600"
                  : "bg-slate-800"
              }`}
            >

              <div className="flex gap-2 items-center mb-2">

                {msg.role === "user"
                  ? <User size={18}/>
                  : <Bot size={18}/>}

                <strong>

                  {msg.role === "user"
                    ? "You"
                    : "SwarajyaAI"}

                </strong>

              </div>

              {msg.content}

            </div>

          </div>

        ))}

        {loading && (

          <div className="bg-slate-800 rounded-xl p-4">

            🤖 Thinking...

          </div>

        )}

      </div>

      <div className="flex flex-wrap gap-2 mt-6">

        {suggestions.map((item) => (

          <button
            key={item}
            onClick={() => ask(item)}
            className="bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg text-sm"
          >
            {item}
          </button>

        ))}

      </div>

      <div className="flex gap-3 mt-6">

        <input
  value={question}
  onChange={(e) => setQuestion(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") ask();
  }}
  placeholder="Ask about this AI model..."
  className="flex-1 bg-slate-800 rounded-xl px-4 py-3"
/>

<button
  disabled={loading}
  onClick={() => ask()}
  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-6 rounded-xl"
>
  {loading ? "Thinking..." : "Ask"}
</button>

        <button
          onClick={()=>ask()}
          className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl"
        >
          Ask
        </button>

      </div>

    </Card>

  );

}