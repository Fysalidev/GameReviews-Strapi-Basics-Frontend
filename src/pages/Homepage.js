import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { data, error, loading } = useFetch(
    "http://localhost:1337/api/reviews"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Errrrorrr</p>;

  return (
    <div>
      {data.data.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>
          <small>console list</small>
          <p>{review.attributes.body.substring(0, 200)}...</p>
          <Link to={`/reviews/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
