import { useEffect, useState } from 'react';
import { Calendar, MapPin, Play } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { fetchTable } from '../lib/api.js';

export default function Reviews() {
  const [items, setItems] = useState([]);
  useEffect(() => { fetchTable('reviews').then(setItems); }, []);
  return (
    <section className="page section">
      <SectionHeading eyebrow="Client Reviews" title="Written and video testimonials." text="Admin can add, edit, delete, upload images, and attach YouTube testimonial links through the dashboard." />
      <div className="review-grid">
        {items.map((review) => (
          <article className="review-card glass-card" key={review.id}>
            <img className="review-thumb" src={review.thumbnail} alt={`${review.name} video testimonial preview`} />
            <a className="play-link" href={review.youtube} target="_blank" rel="noreferrer"><Play size={18} /> Watch Video</a>
            <div className="review-person"><img src={review.image} alt={review.name} /><div><h3>{review.name}</h3><span><MapPin size={14} /> {review.city}</span></div></div>
            <div className="stars">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
            <p>{review.review}</p>
            <small><Calendar size={14} /> {review.date}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
