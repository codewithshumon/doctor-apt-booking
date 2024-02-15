/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

import { formatDate } from '../../utils/formatData';
import FeedbackForm from './FeedbackForm';

const Feedback = ({ reviews, totalRating }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews ({totalRating})
        </h4>

        {reviews &&
          reviews.length !== 0 &&
          reviews?.map((review, index) => (
            <div key={index} className="flex justify-between gap-10 mb-[30px]">
              <div className="flex gap-3">
                <figure className="h-10 w-10 rounded-full">
                  <img src={review?.user?.photo} alt="avatar" />
                </figure>

                <div>
                  <h5 className="text-[16px] leading-6 text-irisBlueColor font-bold">
                    {review?.user?.name}
                  </h5>
                  <p className="text-[14px] leading-6 text-textColor">
                    {formatDate(review?.createdAt)}
                  </p>
                  <p className="text-para mt-3 font-medium text-[15px]">
                    {review?.reviewText}
                  </p>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(review?.rating).keys()].map((_, index) => (
                  <AiFillStar key={index} color="#0067FF" />
                ))}
              </div>
            </div>
          ))}
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
