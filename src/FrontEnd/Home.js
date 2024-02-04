import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';
import './Component/Dialogs.css';
import './Component/TopResourcesGrid.css'
import './Component/BottomMenusGrid.css'
import './Component/MinorCirclesMenus.css'

function Home() {
    const [isShown, setIsShown] = useState(false);
    const [messages, setMessages] = useState([]);
    const inputRef = useRef(null);

    const location = useLocation();
    const { state } = location;
    const username = state ? state.username : '';

    const handleClick = event => {
        setIsShown(true);
    };

    const handleClickSend = () => {
        const message = inputRef.current.value;
    
        if (message.trim() !== '') {
            const completeMessage = (
                <span>
                    <span className="UsernameText">{username}:</span> {message}
                </span>
              );
            setMessages([...messages, completeMessage]);

            inputRef.current.value = '';

            //Clear chat
            setTimeout(() => {
                setMessages((prevMessages) => {
                    const updatedMessages = prevMessages.slice(1);
                    return updatedMessages;
                });
            }, 10000);
        }
    }

    useEffect(() => {
        
        document.addEventListener('click', (event) => {
            const writeChatElement = document.querySelector(".WriteChat");
            const SendChatElement = document.querySelector(".SendChat");
            const ShowChatElement = document.querySelector(".ShowChat");
            const ChatElement = document.querySelector(".Chat");
          
            if (
                (writeChatElement && writeChatElement.contains(event.target)) ||
                (SendChatElement && SendChatElement.contains(event.target)) ||
                (ShowChatElement && ShowChatElement.contains(event.target)) ||
                (ChatElement && ChatElement.contains(event.target))
            ){} 
            else 
                setIsShown(false);
        });

        const dialogs = [
            { trigger: document.querySelector(".GridItem1"), dialog: document.querySelector(".dialog.menu1") },
            { trigger: document.querySelector(".GridItem2"), dialog: document.querySelector(".dialog.menu2") },
            { trigger: document.querySelector(".GridItem3"), dialog: document.querySelector(".dialog.menu3") },
            { trigger: document.querySelector(".GridItem4"), dialog: document.querySelector(".dialog.menu4") },
            { trigger: document.querySelector(".Minorcircle1"), dialog: document.querySelector(".dialog.circleMenu1") },
            { trigger: document.querySelector(".Minorcircle2"), dialog: document.querySelector(".dialog.circleMenu2") },
            { trigger: document.querySelector(".Minorcircle3"), dialog: document.querySelector(".dialog.circleMenu3") },
        ];

        const openDialog = (dialog) => {
            if (dialog) {
                dialog.showModal();
            }
        };
      
        const closeDialog = (dialog) => {
            if (dialog) {
                dialog.close();
            }
        };

        dialogs.forEach(({ trigger, dialog }) => {
            if (trigger) {
                trigger.addEventListener("click", () => openDialog(dialog));
            }

            dialog.addEventListener("click", () => closeDialog(dialog));

            const menuIds = ['menu1', 'menu2', 'menu3', 'menu4', 'circle1', 'circle2', 'circle3'];
            menuIds.forEach((menuId) => {
                const menu = document.getElementById(menuId);
                if (menu) {
                    menu.addEventListener('click', (event) => event.stopPropagation());
                }
            });

            const closeBtn = dialog?.querySelector(".closeButton");
            if (closeBtn) {
                closeBtn.addEventListener("click", () => closeDialog(dialog));
            }
        });

        return () => {
            dialogs.forEach(({ trigger }) => {
                if (trigger) {
                    trigger.removeEventListener("click", openDialog);
                }
            });
        };
      }, []); 

    return (
        <div className="HomePage">
            {/* Top page */}
            <div className="City">
                <div className="UserText">
                    {username}
                </div>
            </div>

            <div className="GridContainerResources">
                <div className="GridItemResources"></div>
                <div className="GridItemResources"></div>
            </div>
            <div className="GridContainerResources2">
                <div className="GridItemResources2"></div>
                <div className="GridItemResources2"></div>
            </div>
            <div className="GridContainerResources3">
                <div className="GridItemResources3"></div>
                <div className="GridItemResources3"></div>
            </div>

            {/* Bottom page */}
            <div className="GridContainerMenus">
                <div className="GridItem1"></div>
                <div className="GridItem2"></div>
                <div className="GridItem3"></div>
                <div className="GridItem4"></div>
            </div>

            <div className="Minorcircle1"></div>
            <div className="Minorcircle2"></div>
            <div className="Minorcircle3"></div>

            <div className="Season"></div>

            {/* Chat */}
            <input className="WriteChat" onClick={handleClick} ref={inputRef}></input>
            <button className="SendChat" onClick={handleClickSend}>--></button>
            <div className="Chat"></div>
            {isShown && (
                <div className="ShowChat">
                    {messages.map((message, index) => (
                        <div key={index}>{message}</div>
                    ))}
                </div>
            )}

            {/* Dialogs */}
            <dialog className="dialog menu1">
                <div id="menu1">
                    <button className="closeButton">X</button>
                </div>
            </dialog>
            <dialog className="dialog menu2">
                <div id="menu2">
                    <button className="closeButton">X</button>
                </div>
            </dialog>
            <dialog className="dialog menu3">
                <div id="menu3">
                    <button className="closeButton">X</button>
                </div>
            </dialog>
            <dialog className="dialog menu4">
                <div id="menu4">
                    <button className="closeButton">X</button>
                </div>
            </dialog>
            <dialog className="dialog circleMenu1">
                <div id="circle1">
                    <button className="closeButton">X</button>
                </div>
            </dialog>
            <dialog className="dialog circleMenu2">
                <div id="circle2">
                    <button className="closeButton">X</button>
                </div>
            </dialog>
            <dialog className="dialog circleMenu3">
                <div id="circle3">
                    <button className="closeButton">X</button>
                </div>
            </dialog>
        </div>
    );
}

export default Home;