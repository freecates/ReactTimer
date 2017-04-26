var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUitls = require('react-addons-test-utils');
var $ = require('jquery');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    describe('handleSetTimer', () => {
        it('should set state to started and count', (done) =>{
            var timer = TestUitls.renderIntoDocument(<Timer/>);
            timer.handleSetTimer(0);
            
            expect(timer.state.count).toBe(0);
            expect(timer.state.timerStatus).toBe('started');

            setTimeout(() => {
                expect(timer.state.count).toBe(1);
                done();
            }, 1001)
        });

        it('should pause timer on paused status', (done) => {
            var timer = TestUitls.renderIntoDocument(<Timer/>);
            timer.handleSetTimer(3);
            timer.handleStatusChange('started');
            timer.handleStatusChange('paused');

            setTimeout(() => {
                expect(timer.state.count).toBe(3);
                expect(timer.state.timerStatus).toBe('paused');
                done();
            }, 1001);
        });

        it('should reset count on stopped', (done) => {
            var timer = TestUitls.renderIntoDocument(<Timer/>);
            timer.handleSetTimer(3);
            timer.handleStatusChange('started');
            timer.handleStatusChange('stopped');

            setTimeout(() => {
                expect(timer.state.count).toBe(0);
                expect(timer.state.timerStatus).toBe('stopped');
                done();
            }, 1001);
        });
    });
});