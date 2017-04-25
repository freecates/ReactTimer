var React = require('react');

var Controls = React.createClass({
   propTypes: {
       countdownStatus: React.PropTypes.string.isRequired,
       onSatusChange: React.PropTypes.func.isRequired
   },
   onSatusChange: function (newSatus) {
       return () => {
           this.props.onSatusChange(newSatus);
       }
   },
   render: function () {
       var {countdownStatus} = this.props;
       var renderStartStopButton = () => {
           if (countdownStatus === 'started') {
               return <button className="button secondary" onClick={this.onSatusChange('paused')}>Pause</button> 
           } else if (countdownStatus === 'paused') {
                return <button className="button primary" onClick={this.onSatusChange('started')}>Start</button>
           }
        };

       return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onSatusChange('stopped')}>Clear</button>
            </div>
       )
   }    
});

module.exports = Controls;