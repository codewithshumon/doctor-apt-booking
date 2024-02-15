import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL, token } from '../../config';
import { HashLoader } from 'react-spinners';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  console.log('id from jsx', id);
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!rating || !reviewText) {
        setLoading(false);
        return toast.error('Rating & Text fields are required');
      }

      const res = await fetch(`${BASE_URL}/doctor/${id}/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rating, reviewText }),
      });

      console.log('res', res);

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form action="">
      <div>
        <h3 className="text-[16px] text-headingColor leading-6 font-medium mb-4 mt-0">
          How would you rate the overall exprience?*
        </h3>
        <div className="">
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setRating(index)}
                className={`${
                  index <= ((rating && hover) || hover)
                    ? 'text-yellowColor'
                    : ' text-gray-400'
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-[16px] text-headingColor leading-6 font-medium mb-4 mt-0">
          Share your feedback or suggestions*
        </h3>

        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          rows={10}
          placeholder="Write your message"
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>

      <button type="submit" onClick={handleSubmitReview} className="btn">
        {loading ? <HashLoader /> : 'Submit Feedback'}
      </button>
    </form>
  );
};

export default FeedbackForm;
