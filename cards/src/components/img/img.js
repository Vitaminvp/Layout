import * as React from 'react';
import { Ajax } from './../../utils/ajax';
import { appConfig } from './../../config';

export class MyImg extends React.Component {
    constructor(){
        super();
        this.state = {
            width: "100px",
            height: "100px"
        }
    }
    componentDidMount(){
        Ajax.get(`${appConfig.apiUrl}api/v1/items`, (response) => {
            this.setState({
                width: response.width + 50,
                height: response.height + 50
            });
        });
    }

    render(){
        return <div className="cards__box_img"><img src={'./' + this.props.item} style={ this.state } alt="alt"/></div>;
    }

}



