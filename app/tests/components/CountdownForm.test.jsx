var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUitls = require('react-addons-test-utils');
var $ = require('jquery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown if valid seconds entered ', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUitls.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109';
        TestUitls.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalled(109);
    });

    it('should not call onSetCountdown if invalid seconds entered ', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUitls.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109b';
        TestUitls.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});