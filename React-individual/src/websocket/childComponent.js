import React, { Component } from "react";

class ChildComponent extends Component {

    render() {
        return (
            <div>
                <div id="main-content" class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="form-inline">
                <div class="form-group">
                    <label for="connect">WebSocket connection:</label>
                    <button id="connect" class="btn btn-default" type="submit">Connect</button>
                    <button id="disconnect" class="btn btn-default" type="submit" disabled="disabled">Disconnect
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-inline">
                <div class="form-group">
                    <label for="name">What is your name?</label>
                    <input type="text" id="name" class="form-control" placeholder="Your name here..."/>
                </div>
                <button id="send" class="btn btn-default" type="submit">Send</button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <table id="conversation" class="table table-striped">
                <thead>
                <tr>
                    <th>Greetings</th>
                </tr>
                </thead>
                <tbody id="greetings">
                </tbody>
            </table>
        </div>
    </div>
</div>
            </div>
        );
    }
}

export default ChildComponent;