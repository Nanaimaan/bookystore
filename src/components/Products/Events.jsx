import React from "react";
import "./css/events.css";

function Events() {
  return (
    <div className='events-container'>
      <div className='events-title'>
        <p>EVENTS</p>
        <h1>What's on Booky</h1>

        <p className='title-paragraph '>
          Join us online and in-store for awesome events and experiences every
          week, from storytime for kids, to author interviews and more.
        </p>
        <hr className='line' />
      </div>
      <section className='events-cards'>
        <div className='events-card-img'>
          <img
            src='https://assets.indigoimages.ca/m/6acd20fd47dda3ce/original/Events_KidsBreak_EN.jpg'
            alt=''
          />
        </div>

        <div className='event-card-text'>
          <h3>Kids' Break Events</h3>
          <p>
            Join us for FREE storytime and activities featuring fun themes, from
            Barbie® to Bluey.
          </p>
        </div>
        <div className='event-card-info'>
          <h3>BookyStore</h3>
          <p>Monday-Friday at 1pm During during your province’s Kids' Break</p>
          <button className='button'>Learn More</button>
        </div>
      </section>
      <section className='events-cards'>
        <div className='events-card-img'>
          <img
            src='https://assets.indigoimages.ca/m/40b31a6e5941f4c/original/events-listing-book_9781443469920.jpg'
            alt=''
          />
        </div>

        <div className='event-card-text'>
          <h3>Robin Sharma</h3>
          <p>
            Join international bestselling author Robin Sharma as he signs
            copies of The Wealth Money Can't Buy. This groundbreaking and timely
            book will help you to stop chasing the wrong kinds of riches—which
            can waste years—so you can get directly on track to making a life
            you absolutely adore.
          </p>
        </div>
        <div className='event-card-info'>
          <h3>BookyStore</h3>
          <p>Tuesday, April 9 at 6pm ET Toronto, ON</p>
          <button className='button'>Learn More</button>
        </div>
      </section>
      <section className='events-cards'>
        <div className='events-card-img'>
          <img
            src='https://assets.indigoimages.ca/m/147f96b8c91ce03d/original/events-listing-book_9780063263901.jpg'
            alt=''
          />
        </div>

        <div className='event-card-text'>
          <h3>RuPaul</h3>
          <p>
            This isn't the RuPaul you think you know. Pop culture icon and
            international drag superstar RuPaul invites you to a spiritual
            awakening to celebrate the release of the highly-anticipated memoir
            The House of Hidden Meanings.
          </p>
        </div>
        <div className='event-card-info'>
          <h3>BookyStore</h3>
          <p>MTuesday, April 16 at 6pm PT 868 Granville Street Vancouver, BC</p>
          <button className='button'>Learn More</button>
        </div>
      </section>
    </div>
  );
}

export default Events;
