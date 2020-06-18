/* eslint-disable no-unreachable */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { Component } from "react";
import { MdMessage } from "react-icons/md";

import { FaPaperPlane } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "../styles/chatbot.css";

class chatbot extends Component {
  constructor(props) {
    // var messeges;

    super(props);
    this.state = {
      messege: [],
      id: "",

      // response:[],
      userinput: "",
      typingstatus: false,
      closebtn: false,
      msgicon: true,
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.opentextbox = this.opentextbox.bind(this);
    this.msgicon = this.msgicon.bind(this);
  }

  handlechange(event) {
    this.setState({ userinput: event.target.value });
    console.log(event.target.value);
    this.setState({ typingstatus: true });
    console.log(`${this.state.typingstatus}typings status is`);

    // this.setState({password:event.target.password})
  }

  opentextbox() {
    console.log("inside close btn");
    this.setState({ closebtn: !this.state.closebtn });
    this.setState({ msgicon: !this.state.msgicon });
  }

  msgicon() {
    console.log("inside msgicon ");
    this.setState({ closebtn: !this.state.closebtn });
    this.setState({ msgicon: !this.state.msgicon });
  }

  handleSubmit(event) {
    this.setState({ typingstatus: !this.state.typingstatus });
    console.log(`${this.state.typingstatus}submit`);

    // this.setState({messege:[...this.state.messege,this.state.userinput]})
    this.setState({
      messege: [...this.state.messege, { user: this.state.userinput, bot: "" }],
    });

    // console.log(event.target.value)

    console.log("inside submit");
    this.setState({ userinput: "" });

    console.log(`${this.state.messege}username is`);
    event.preventDefault();
    fetch("https://stark-crag-70246.herokuapp.com/session")
      .then(function (session) {
        return session.json();
      })
      .then(data => {
        console.log(`${data.session}data is`);

        this.setState({ id: data.session });
        console.log(`${this.state.id}id is`);
        console.log(`${this.state.userinput}msg is`);
        console.log(`${this.state.messege}messeges`);

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
          .then(function (response) {
            // console.log(response.json())

            return response.json();
          })
          .then(data => {
            console.log(data);
            console.log(data[0].text);
            console.log(`${this.state.messege}msh isss`);
            const length1 = this.state.messege.length;
            console.log(`${length1}length is`);
            const newArr = this.state.messege[length1 - 1];
            console.log(newArr);

            this.setState({
              messege: [...this.state.messege, { user: "", bot: data[0].text }],
            });
            console.log(this.state.messege);
          })
          .then(() => {
            // this.setState({ userinput: "" });
          });
      });
  }

  render() {
    return (
      <>
        {this.state.msgicon ? (
          <button
            className=" chatbtn rounded-full px-2 py-2"
            onClick={this.opentextbox}
          >
            <MdMessage className="iconstyle" />
          </button>
        ) : null}

        {this.state.closebtn ? (
          <>
            <div className="textbox">
              <div className="card-header  ">
                <h5 className="h6 mt-1"> Chatbot</h5>
                <span className="icone mt-1">
                  <FontAwesomeIcon icon={faTimes} onClick={this.msgicon} />
                </span>
              </div>

              <div className="card-body ">
                <div className="messages" id="chat">
                  {this.state.messege.length != 0 &&
                    this.state.messege.map(response => {
                      return (
                        <>
                          <div>
                            {response.user != "" ? (
                              <div className="message parker">
                                {response.user}
                              </div>
                            ) : (
                              <></>
                            )}
                            {response.bot != "" ? (
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

                  {/* {this.state.response.map(response=>{
       return(
        <div className="message stark">
        {this.state.response}
        </div>
       )
     })} */}

                  {this.state.typingstatus ? (
                    <div className="message stark">
                      <div className="typing typing-1" />
                      <div className="typing typing-2" />
                      <div className="typing typing-3" />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="card-footer p-0 bottom-fixed">
                {/* <form className>
            <div>
                
                <input className=" bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""/>
            </div>
            </form> */}
                <form onSubmit={this.handleSubmit} className="form1">
                  <div className="input">
                    <input
                      placeholder="Type your message here!"
                      type="text"
                      name="userinput"
                      value={this.state.userinput}
                      onChange={this.handlechange}
                    />
                    <span className="iconcolor">
                      <FaPaperPlane />
                    </span>
                  </div>
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
