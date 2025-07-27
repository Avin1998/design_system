import React from 'react';
import Button from '../atoms/Button';
import Badge from '../atoms/Badge';
import Icon from '../atoms/Icon';
import './ProblemTable.css';

export default function ProblemTable({ problems = [], onAttempt, ...props }) {
  return (
    <div className="problem-table-container" {...props}>
      <table className="problem-table">
        <thead>
          <tr>
            <th>Problem Name</th>
            <th>Difficulty</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <tr key={index} className={problem.completed ? 'completed' : ''}>
              <td className="problem-name">
                <div className="problem-title">{problem.name}</div>
                {problem.description && (
                  <div className="problem-desc">{problem.description}</div>
                )}
              </td>
              <td>
                <Badge 
                  variant={
                    problem.difficulty === 'easy' ? 'success' : 
                    problem.difficulty === 'medium' ? 'warning' : 'danger'
                  }
                >
                  {problem.difficulty}
                </Badge>
              </td>
              <td>
                {problem.completed ? (
                  <div className="completed-status">
                    <Icon name="FaCheck" size={14} className="check-icon" />
                    Completed
                  </div>
                ) : (
                  <span className="not-attempted">Not Attempted</span>
                )}
              </td>
              <td>
                {problem.completed ? (
                  <Button variant="secondary" className="review-btn">
                    <Icon name="FaEye" size={14} />
                    Review
                  </Button>
                ) : (
                  <Button 
                    variant="primary" 
                    onClick={() => onAttempt?.(problem)}
                    className="attempt-btn"
                  >
                    <Icon name="FaPlay" size={14} />
                    Attempt
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}