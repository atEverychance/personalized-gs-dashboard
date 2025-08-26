import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Send } from 'lucide-react'

type Bubble = { from: 'bot' | 'user'; text: string }

export default function ChatbotPage() {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Bubble[]>([
    { from: 'bot', text: "Hello Jadel! 👋 I’m your Virtual Assistant." },
    { from: 'bot', text: 'What can I help you with today?' },
  ])

  const quick = [
    'Health / Wellness Services',
    'Get Support Centre Contact Info',
    'Care Navigation',
  ]

  const send = (text: string) => {
    if (!text.trim()) return
    setMessages((prev) => [
      ...prev,
      { from: 'user', text },
      { from: 'bot', text: 'Thanks! I’ll route you to the right resource.' },
    ])
    setInput('')
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-10 bg-white border-b">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <button aria-label="Back" onClick={() => navigate(-1)} className="p-1 -ml-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="font-semibold">Wilki</div>
          <div className="w-6" />
        </div>
      </div>

      <div className="max-w-md mx-auto px-4">
        <div className="text-center text-gray-500 text-sm mt-4">10:01AM</div>
        <p className="text-center text-gray-400 text-sm mt-2 px-6">
          By chatting to our Chatbot, you agree to our terms and conditions and privacy policy
        </p>

        <div className="mt-6 space-y-3">
          {messages.map((m, idx) => (
            <div key={idx} className={m.from === 'bot' ? 'flex' : 'flex justify-end'}>
              <div
                className={`rounded-2xl px-4 py-3 max-w-[85%] ${
                  m.from === 'bot'
                    ? 'rounded-tl-md bg-gray-100 text-gray-800'
                    : 'rounded-tr-md bg-teal-600 text-white'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          <div className="mt-2 space-y-3">
            {quick.map((t) => (
              <button
                key={t}
                onClick={() => send(t)}
                className="w-full border border-gray-200 rounded-full px-5 py-3 text-gray-700 bg-white text-base"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="h-24" />

      <div className="fixed inset-x-0 bottom-0 bg-white border-t">
        <div className="max-w-md mx-auto p-4">
          <div className="flex items-center rounded-2xl border border-gray-200 px-3 py-2">
            <input
              placeholder="Message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') send(input)
              }}
              className="flex-1 bg-transparent outline-none px-2 text-gray-700 placeholder:text-gray-400"
            />
            <button
              onClick={() => send(input)}
              className="ml-2 px-4 py-2 bg-teal-800 text-white rounded-full flex items-center gap-2"
            >
              <span>Send</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
