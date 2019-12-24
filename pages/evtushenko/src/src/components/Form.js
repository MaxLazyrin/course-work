import React from "react";
class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input id="city" type="text" name="city" placeholder="City..."/>
                <input id="country" type="text" name="country" placeholder="Country..."/>
                <button id="button">Get Weather</button>
            </form>
        );
    }
};

export default Form;