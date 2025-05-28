import React, { useState, useEffect, useRef } from 'react';
import { LoadingDots } from '@/components/LoadingDots';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Chat() {
  const [msgs, setMsgs] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [version] = useState('v1.0.0');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, loading]);

  const send = () => {
    if (!text) return;
    setMsgs(m => [...m, { sender: 'user', text }]);
    setText(''); setLoading(true);
    setTimeout(() => {
      setMsgs(m => [...m, { sender: 'bot', text: 'To jest przykładowa odpowiedź.' }]);
      setLoading(false);
    }, 1000);
  };

  

  return (
    <div className="relative flex items-center justify-center p-4 bg-base-100 h-[100%]">
      <div className="card w-full max-w-lg shadow-lg bg-base-100 flex flex-col h-[100%] ">
        <div className="flex-1 px-4 pt-4 space-y-4 overflow-y-auto">
          {msgs.map((m,i) => (
            <div
              key={i}
              className={`chat chat-${m.sender === 'user' ? 'end' : 'start'} clear-both`}
            >
              <div className="chat-bubble w-min">{m.text}</div>
            </div>
          ))}
          {loading && (
            <div className="chat chat-start">
              <div className="chat-bubble">
                <LoadingDots />
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>
        <div className="flex items-center gap-2 p-4 card-footer">
          <textarea
            className="flex-1 textarea textarea-bordered"
            rows={1}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Write here..."
          />
          <button className="btn btn-secondary" onClick={send} >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
}
