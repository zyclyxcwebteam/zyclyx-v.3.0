/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import ScrollToBottom from "react-scroll-to-bottom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ChatBot.css";

class chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messege: [],
      id: "",
      userinput: "",
      showChat: false,
      loading: false,
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showChatWindow = this.showChatWindow.bind(this);
  }

  handlechange(event) {
    this.setState({ userinput: event.target.value });
  }

  showChatWindow() {
    this.setState({ showChat: !this.state.showChat });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.userinput !== "") {
      this.setState({
        loading: true,
        messege: [
          ...this.state.messege,
          { user: this.state.userinput, bot: "" },
        ],
      });

      fetch("https://stark-crag-70246.herokuapp.com/session")
        .then(session => {
          return session.json();
        })
        .then(data => {
          this.setState({ id: data.session });

          fetch("https://stark-crag-70246.herokuapp.com/zyclyx", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              text: this.state.userinput,
              session_id: this.state.id,
            }),
          })
            .then(response => {
              return response.json();
            })
            .then(botReply => {
              this.setState({
                messege: [
                  ...this.state.messege,
                  { user: "", bot: botReply[0].text },
                ],
              });
            })
            .then(() => {
              this.setState({ userinput: "", loading: false });
            });
        });
    }
  }

  render() {
    const { showChat } = this.state;
    return (
      <>
        <button
          type="button"
          className=" chatbtn px-2 py-2"
          onClick={this.showChatWindow}
        >
          <FontAwesomeIcon icon={["fab", "rocketchat"]} />
        </button>
        {showChat ? (
          <>
            <div className="chatbox">
              <div className="card-header chat-header d-flex justify-content-between">
                <h5 className="h6 m-0">Zybot</h5>
                <button
                  type="button"
                  className="close-chat"
                  onClick={this.showChatWindow}
                >
                  <FontAwesomeIcon icon={["fas", "times"]} />
                </button>
              </div>

              <ScrollToBottom mode="bottom" className="card-body chat-body ">
                <div className="messages" id="chat">
                  {this.state.messege.length !== 0 &&
                    this.state.messege.map(response => {
                      return (
                        <>
                          <div>
                            {response.user !== "" ? (
                              <div className="message parker">
                                {response.user}
                              </div>
                            ) : (
                              <></>
                            )}
                            {response.bot !== "" ? (
                              <div className="message stark">
                                {response.bot}
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                        </>
                      );
                    })}
                </div>
              </ScrollToBottom>

              <div className="card-footer p-0 bottom-fixed">
                <form
                  className="d-flex justify-content-between px-3 chat-form"
                  onSubmit={this.handleSubmit}
                >
                  <div className="input">
                    <input
                      placeholder="Type a message"
                      type="text"
                      name="userinput"
                      value={this.state.userinput}
                      onChange={this.handlechange}
                    />
                  </div>
                  <button type="submit" className="send-chat px-3">
                    {this.state.loading ? (
                      <div
                        className="spinner-border text-success"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <FontAwesomeIcon icon={["fas", "paper-plane"]} />
                    )}
                  </button>
                </form>
              </div>
            </div>
          </>
        ) : null}
      </>
    );
  }
}

export default chatbot;
