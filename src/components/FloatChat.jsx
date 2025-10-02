import { useLocation } from 'react-router-dom';
import '../styles/FloatChat.scss';
import { createContext, useContext, useEffect, useRef, useState } from "react";
import chat_W from '../images/chat_W.svg';
import chat_R from '../images/chat_R.svg';

const ChatContext = createContext();

export function ChatProvider({ children }) {
    const [open, setOpen] = useState(false);
    const [activeSeller, setActiveSeller] = useState(null);
    const [chats, setChats] = useState({});

    const openChat = (sellerName, productId) => {
        setOpen(true);
        setActiveSeller(sellerName);

        setChats(prev => {
            if (prev[sellerName]) return prev;
            return {
                ...prev,
                [sellerName]: {
                    productId,
                    messages: [{ from: "bot", text: `想跟${sellerName}說什麼？` }]
                }
            };
        });
    };

    const sendMessage = (text) => {
        if (!activeSeller) return;
        setChats(prev => ({
            ...prev,
            [activeSeller]: {
                ...prev[activeSeller],
                messages: [...prev[activeSeller].messages, { from: "user", text }]
            }
        }));
        setTimeout(() => {
            const replies = [
                "好的，我知道了！",
                "這個我會幫你處理～",
                "收到，我們會盡快回覆您。",
                "不議價哦",
            ];
            const botReply = replies[Math.floor(Math.random() * replies.length)];
            setChats(prev => ({
                ...prev,
                [activeSeller]: {
                    ...prev[activeSeller],
                    messages: [...prev[activeSeller].messages, { from: "bot", text: botReply }]
                }
            }));
        }, 500);
    };

    const closeChat = () => {
        setOpen(false);
        setActiveSeller(null);
    };

    const switchChat = (sellerName) => {
        setActiveSeller(sellerName);
    };

    return (
        <ChatContext.Provider value={{ open, activeSeller, chats, openChat, sendMessage, closeChat, switchChat, setOpen }}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    return useContext(ChatContext);
}

export default function FloatChat({ theme }) {
    const { open, activeSeller, chats, sendMessage, closeChat, switchChat, setOpen } = useChat();
    const [input, setInput] = useState("");
    const chatRef = useRef(null);
    const location = useLocation();
    const chatBodyRef = useRef(null);

    const hasChat = Object.keys(chats).length > 0;
    const currentChat = chats[activeSeller];

    // 點擊外部關閉
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (chatRef.current && !chatRef.current.contains(e.target)) {
                closeChat();
            }
        };
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open, closeChat]);

    // 路由變化關閉
    useEffect(() => {
        closeChat();
    }, [location.pathname]);

    // 訊息更新滾到底
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [currentChat?.messages]);
    return (
        <div className={`floating-chat ${theme}`} ref={chatRef}>
            <button className="chat-toggle"
                onClick={() => {
                    if (open) {
                        closeChat();
                    } else {
                        const firstSeller = activeSeller || Object.keys(chats)[0];
                        if (firstSeller) {
                            switchChat(firstSeller);
                        }
                        setOpen(true);
                    }
                }}>
                <img
                    src={theme === 'light' ? chat_R : chat_W}
                    alt="chat"
                />
            </button>
            {open && (
                <div className="chat-window">
                    <div className="chat-header">
                        <p>{activeSeller || "尚未選擇店家"}</p>
                        <button className="close-btn" onClick={closeChat}>✕</button>
                    </div>
                    <div className='chat-out'>
                        <div className='chat-box'>
                            {currentChat?.messages?.length > 0 && (
                                <div className="chat-menu">
                                    {Object.keys(chats).map(seller => (
                                        <button
                                            key={seller}
                                            className={`chat-tab ${seller === activeSeller ? "active" : ""}`}
                                            onClick={() => switchChat(seller)}
                                        >
                                            {seller}
                                        </button>
                                    ))}
                                </div>)}
                            <div className="chat-body" ref={chatBodyRef}>
                                {currentChat?.messages?.length > 0 ? (
                                    currentChat.messages.map((m, i) => (
                                        <p key={i} className={`chat-msg ${m.from}`}>{m.text}</p>
                                    ))
                                ) : (
                                    <p className="chat-msg bot">還沒開始聊聊</p>
                                )}
                            </div>
                        </div>
                        <div className="chat-input">
                            <input
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => {
                                    if (e.key === 'Enter' && input.trim()) {
                                        sendMessage(input);
                                        setInput('');
                                    }
                                }}
                                placeholder="輸入訊息..."
                            />
                            <button onClick={() => {
                                if (input.trim()) {
                                    sendMessage(input);
                                    setInput("");
                                }
                            }}>送出</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
