import React from 'react';
import Input from './Input';
import Header from './Header';
class VelocityGenerator extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      enteredPace: 3.45
    };

    this.handlePaceChange = this.handlePaceChange.bind(this);
  }

  handlePaceChange(e) {
    this.setState({ enteredPace : e.target.value});
  }
  
  calculatedPace()
  {
    var targetPace = (this.state.enteredPace / 0.62);
    return this.toTwoDecimal(targetPace);
  }

  toTwoDecimal(num)
  {
    return Math.round(num * 100) / 100
  }

  signature()
  {
    return "Andrew Hutchinson";
  }

  render() {
    return <div style={{ width:500 }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">Windows 98 Pace Calculator</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>
      <div className="window-body">
        <Header title="Pace calculator 🏃‍♀️"></Header>
          <p>Enter KM pace to calculate Mile pace</p>
          <Input value={this.state.enteredPace} handleChange={this.handlePaceChange}/>
        <h3>{this.calculatedPace()} pace</h3>
        <p>{this.signature()}</p>
      </div>
    </div>
  }
}
export default VelocityGenerator;