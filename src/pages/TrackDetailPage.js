import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TrackDetailView from '../components/organisms/TrackDetailView';

const trackNames = {
  'two-pointers': 'Two Pointers Pattern',
  'island': 'Island (Matrix Traversal) Pattern',
  'fast-slow': 'Fast & Slow Pointers Pattern',
  'sliding-window': 'Sliding Window Pattern',
  'merge-intervals': 'Merge Intervals Pattern',
  'cyclic-sort': 'Cyclic Sort Pattern',
};

export default function TrackDetailPage() {
  const { trackId } = useParams();
  const navigate = useNavigate();
  
  const trackName = trackNames[trackId] || 'Unknown Pattern';

  const handleBack = () => {
    navigate('/');
  };

  const handleAttemptProblem = (problem) => {
    navigate(`/problem/${problem.name.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <TrackDetailView 
      trackName={trackName}
      onBack={handleBack}
      onAttemptProblem={handleAttemptProblem}
    />
  );
}