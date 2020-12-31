import React, { Component } from 'react';

class componentName extends Component {
    constructor(props){
        super(props)

        this.state = {
                employees: []
        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className = "text-muted">HCMUTE</span>
                </footer>
            </div>
        );
    }
}

export default componentName;