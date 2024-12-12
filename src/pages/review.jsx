import { useState } from 'react';

function Review() {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [error ,setErrors]=useState({})
  const starArray = [1,2,3,4,5]
  
  const handleRating = (ratingValue) => {
      setRating(ratingValue);
  };
  
  const validation=()=>{
    setErrors({});
    const newErrors={};
    if (!author) {
      newErrors.author = 'Please enter your name.';
    }
    else{
       if(author.length<3){
        newErrors.author = 'Please enter your name';
       }
    }
    if (!text) {
      newErrors.text = 'Please enter your comment.';
    }
    if (rating === 0) {
      newErrors.rating = 'Please provide a rating.';
    }
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) {
      return false;
    }
    else{
      return true;
    }
  }

  const handleAddComment = (e) => {
    e.preventDefault();
    
    validation()
    if (author && text) {
      const newComment = {
        author: author,
        text: text,
        rating:rating
      };
      setComments([newComment, ...comments]); 
      setAuthor('');
      setText('');
      setRating('0')
    // } else {
    //   alert('Please fill in both fields');
    }
  };

  return (
    <div> 
      <h1>Comment/Review Section</h1>

      <div className="comment-section">
        <h2>Comments Box</h2>
        <div className="comment-form">
          <form onSubmit={handleAddComment}>
            <span>share your experience</span>
            <div className="rating">
                  {starArray.map((star) => (
                    <span
                      key={star}
                      className={`star ${rating >= star ? 'filled' : ''}`}
                      onClick={() => handleRating(star)} 
                    >
                      &#9733;
                    </span>
                  ))}
            </div>
            {<p style={{ color: 'red' }}>{error.rating}</p>}
            <span>Enter Your Name</span>
            <input type="text"placeholder="Your name"value={author}onChange={(e) => setAuthor(e.target.value)}/>
            {<p style={{ color: 'red' }}>{error.author}</p>}
            <span>What you think About it?</span>
            <textarea placeholder="Write a comment..." value={text}onChange={(e) => setText(e.target.value)}/>
            {<p style={{ color: 'red' }}>{error.text}</p>}
            <button>Add Comment</button>
          </form>
        </div>
        <div>
          {comments.length > 0 ? (
            comments.map((comment, index) => (  
              
              <div key={index} className="comment">
                <p>
                  <strong>{comment.author}</strong>: {comment.text} 
                </p>
                <p>{"⭐".repeat(comment.rating)}</p>
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Review;
