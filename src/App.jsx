import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
    sixth: '',
    currentTime: ''
  }
  componentDidMount() {
    setInterval(() => {
      let hour = new Date().getHours();
      let minute = new Date().getMinutes();
      let firstTime, secondTime, thirdTime, fourthTime, fifthTime, sixthTime;
      const format = (h, m) => {
        h = h % 24;
        return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}`;
      };
      if (minute + 15 > 59) {
        firstTime = format(hour + 10, (minute + 2) - 60);
      } else {
        firstTime = format(hour + 9, minute + 15);
      }
      if (minute + 45 > 59) {
        secondTime = format(hour + 8, (minute + 45) - 60);
      } else {
        secondTime = format(hour + 7, minute + 45);
      }
      if (minute + 15 > 59) {
        thirdTime = format(hour + 7, (minute + 15) - 60);
      } else {
        thirdTime = format(hour + 6, minute + 15);
      }
      if (minute + 45 > 59) {
        fourthTime = format(hour + 6, (minute + 45) - 60);
      } else {
        fourthTime = format(hour + 5, minute + 45);
      }
      if (minute + 15 > 59) {
        fifthTime = format(hour + 4, (minute + 15) - 60);
      } else {
        fifthTime = format(hour + 3, minute + 15);
      }
      if (minute + 45 > 59) {
        sixthTime = format(hour + 2, (minute + 45) - 60);
      } else {
        sixthTime = format(hour + 1, minute + 45);
      }
      this.setState({
        first: firstTime,
        second: secondTime,
        third: thirdTime,
        fifth: fifthTime,
        sixth: sixthTime,
        fourth: fourthTime,
        currentTime: new Date().toLocaleTimeString()
      });
    }, 1000);
  }
  render() {
    const { first, second, third, fourth, fifth, sixth, currentTime } = this.state;
    return (
      <div className='time'>

        <div className='profit'>
          <p><strong>Bu dastur – SleepCycle</strong></p>
          <p>Uyqu tsikllari asosida tetik uyg‘onishga yordam beradi. Agar hozir uxlasa, qachon uyg‘onsa o‘zini yaxshi his qilishi mumkinligini ko‘rsatadi.</p>
          <p><strong>Foydasi:</strong> yengil uyquda uyg‘otadi, tetik turishga yordam beradi.</p>
          <p><strong>Zarari:</strong> faqat vaqtga asoslanadi, to‘liq uxlamasangiz foydasi kam.</p>
        </div>

        <h1>Wake Up Time</h1>
        <h3 className='current'>{currentTime}</h3>

        <div className='list'>

          <div>
            <h2><span>Suggested:</span> {first}</h2>
            <h2><span>Suggested:</span> {second}</h2>
          </div>

          <div className="flex">
            <h2>{third}</h2>
            <h2>{fourth}</h2>
            <h2>{fifth}</h2>
            <h2>{sixth}</h2>
          </div>
          
        </div>
      </div>
    )
  }
}