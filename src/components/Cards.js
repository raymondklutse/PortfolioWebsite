import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/movie_revenue_pred.jpg'
              text='Movie Revenue Prediction'
              label='Regression'
              path='/services'
            />
            <CardItem
              src='images/pizzbot.jpg'
              text='Pizzbot: A conversational assistant to order pizza'
              label='NLP'
              path='/services'
            />
            <CardItem
              src='images/amazon_reviews.jpg'
              text='Amazon Reviews Sentiment Analysis'
              label='Classification/NLP'
              path='/services'
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='images/movie_revenue_pred.jpg'
              text='Page Rank using TF-IDF'
              label='NLP'
              path='/services'
            />
            <CardItem
              src='images/movie_revenue_pred.jpg'
              text='Page Rank using TF-IDF'
              label='NLP'
              path='/services'
            />
            <CardItem
              src='images/movie_revenue_pred.jpg'
              text='Page Rank using TF-IDF'
              label='NLP'
              path='/services'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
