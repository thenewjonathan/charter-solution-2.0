import React, {Component} from 'react';

class PointsCalculator extends Component {
    constructor(props) {
        super(props);
        this.calculateReward = this.calculateReward.bind(this);

    }

    setOutput(text) {
        document.getElementById("output_field").value = text;
    }

    calculateReward() {
        var inputValue = document.getElementById('input_field').value;
        var outputValue = "";

        if(inputValue > 50)
        {
            if(inputValue > 100)
            {
                outputValue = ((inputValue - 100) * 2) + 50;
                this.setOutput(outputValue);
                return outputValue;
            }
            outputValue = (inputValue - 50);
            this.setOutput(outputValue);
            return outputValue;
        }
        outputValue = "No points earned, sorry!";
        this.setOutput(outputValue);
        return outputValue;
    }

    testCalculateFunction(){
        var input = document.getElementById('input_field');

        input.value = 43;
        var output = "less than or equal to 50 is nothing: 43 -> " + this.calculateReward();
        alert(output);

        input.value = 50;
        output = "less than or equal to 50 is nothing: 50 -> " + this.calculateReward();
        alert(output);

        input.value = 51;
        output = "greater than 50 and up to 100 is * 1 points: 51 -> " + this.calculateReward();
        alert(output);

        input.value = 100;
        output = "greater than 50 and up to 100 is * 1 points: 100 -> " + this.calculateReward();
        alert(output);

        input.value = 101;
        output = "greater than 100 is * 2 points plus the * 1 from 51 - 100: 101 -> " + this.calculateReward();
        alert(output);

        input.value = 500;
        output = "greater than 100 is * 2 points plus the * 1 from 51 - 100: 500 -> " + this.calculateReward();
        alert(output);

        input.value = "";
    }

    componentDidMount() {
//         document.getElementById("output_field").value = "{this.state.outputText}";
//         this.testCalculateFunction();
    }

    render() {
        return(
            <div className="App">
                <div id="output_div"></div>
                <button id="execute" onClick={this.calculateReward}>
                    Calculate
                </button>
                <input id="input_field" placeholder="input amount spent here" />
                <input id="output_field" disabled />
            </div>
        )
    }
}

export default PointsCalculator;