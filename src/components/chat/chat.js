"use strict";

export const DEFAULT_USER_NAME = "%username";

export class Chat {
    constructor({ el, data }) {
        this.el = el;
        this.data = {
            nickName: DEFAULT_USER_NAME,
            messages: [{
                    nickname: "Some nickname",
                    text: "text",
                    data: new Date()
                },
                {
                    nickname: "Another nickname",
                    text: "another text",
                    data: new Date()
                }
            ]
        };
    }

    addMessage(messageObj) {
        this.data.messages.push(messageObj);
        this.render();
    }

    render() {
        this.el.innerHTML = `
        <div class="chat">
            <div class="chat__messages">
                ${this._getMessagesHtml()}
            </div>
        </div>
        `;
    }

    _getMessagesHtml() {
        return this.data.messages
            .map(
                messageObj => `
                <span class="chat__message">
                    ${messageObj.nickname}: ${messageObj.text}
                </span>
            `
            )
            .join(`<br>`);
    }
}