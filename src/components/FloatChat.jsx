import '../styles/FloatChat.scss'; // 可自訂樣式
import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
    const [open, setOpen] = useState(false);
    const [activeSeller, setActiveSeller] = useState(null);
    const [chats, setChats] = useState({}); // { sellerName: { productId, messages: [...] } }

    const openChat = (sellerName, productId) => {
        setOpen(true);
        setActiveSeller(sellerName);

        setChats(prev => {
            if (prev[sellerName]) return prev; // 已存在就不重複加
            return {
                ...prev,
                [sellerName]: {
                    productId,
                    messages: [{ from: "bot", text: `您好！這是「${sellerName}」的對話視窗。` }]
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



export default function FloatChat() {
    const { open, activeSeller, chats, sendMessage, closeChat, switchChat, setOpen, openChat } = useChat();
    const [input, setInput] = useState("");

    const currentChat = chats[activeSeller];

    return (
        <div className="floating-chat">
            <button className="chat-toggle"
                onClick={() => {
                    if (!open) {
                        if (activeSeller || Object.keys(chats).length > 0) {
                            switchChat(activeSeller || Object.keys(chats)[0]);
                            setOpen(true);
                        } else {
                            openChat('預設店家', 'demo-product');
                        }
                    }
                }}>
                💬
            </button>

            {open && (
                <div className="chat-window">
                    <div className="chat-header">
                        <p>與「{activeSeller}」對話中</p>
                        <button className="close-btn" onClick={closeChat}>✕</button>
                    </div>

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
                    </div>

                    <div className="chat-body">
                        {currentChat?.messages.map((m, i) => (
                            <p key={i} className={`chat-msg ${m.from}`}>{m.text}</p>
                        ))}
                    </div>

                    <div className="chat-input">
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
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
            )}
        </div>
    );
}