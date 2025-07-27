import React, { useState } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import './CodeAttemptPage.css';

const sampleProblem = {
  title: 'Two Sum',
  difficulty: 'Easy',
  description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
    },
    {
      input: 'nums = [3,2,4], target = 6',
      output: '[1,2]',
      explanation: null
    }
  ],
  constraints: [
    '2 ≤ nums.length ≤ 10⁴',
    '-10⁹ ≤ nums[i] ≤ 10⁹',
    '-10⁹ ≤ target ≤ 10⁹',
    'Only one valid answer exists.'
  ]
};

const initialCode = `def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    # Your solution here
    pass`;

export default function CodeAttemptPage({ 
  problem = sampleProblem,
  onBack,
  onSubmit,
  onRun,
  ...props 
}) {
  const [code, setCode] = useState(initialCode);
  const [activeTab, setActiveTab] = useState('description');
  const [testResults, setTestResults] = useState(null);

  const handleRun = () => {
    setTestResults({
      passed: 2,
      total: 3,
      results: [
        { input: '[2,7,11,15], 9', expected: '[0,1]', actual: '[0,1]', status: 'passed' },
        { input: '[3,2,4], 6', expected: '[1,2]', actual: '[1,2]', status: 'passed' },
        { input: '[3,3], 6', expected: '[0,1]', actual: 'null', status: 'failed' }
      ]
    });
  };

  return (
    <div className="code-attempt-page" {...props}>
      <div className="code-header">
        <div className="header-left">
          <Button 
            variant="secondary" 
            onClick={onBack}
            className="back-btn"
          >
            <Icon name="FaArrowLeft" size={16} />
            Back
          </Button>
          
          <div className="problem-info">
            <h1 className="problem-title">{problem.title}</h1>
            <span className={`difficulty ${problem.difficulty.toLowerCase()}`}>
              {problem.difficulty}
            </span>
          </div>
        </div>
        
        <div className="header-actions">
          <Button variant="secondary" onClick={handleRun}>
            <Icon name="FaPlay" size={14} />
            Run
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            <Icon name="FaCheck" size={14} />
            Submit
          </Button>
        </div>
      </div>

      <div className="code-content">
        <div className="left-panel">
          <div className="panel-tabs">
            <button 
              className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`tab-btn ${activeTab === 'examples' ? 'active' : ''}`}
              onClick={() => setActiveTab('examples')}
            >
              Examples
            </button>
          </div>
          
          <div className="panel-content">
            {activeTab === 'description' && (
              <div className="description-content">
                <p>{problem.description}</p>
                
                <h4>Constraints:</h4>
                <ul>
                  {problem.constraints.map((constraint, index) => (
                    <li key={index}>{constraint}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'examples' && (
              <div className="examples-content">
                {problem.examples.map((example, index) => (
                  <div key={index} className="example">
                    <h4>Example {index + 1}:</h4>
                    <div className="example-block">
                      <strong>Input:</strong> {example.input}
                    </div>
                    <div className="example-block">
                      <strong>Output:</strong> {example.output}
                    </div>
                    {example.explanation && (
                      <div className="example-block">
                        <strong>Explanation:</strong> {example.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="right-panel">
          <div className="editor-header">
            <span>Python3</span>
            <div className="editor-actions">
              <Icon name="FaCog" size={14} />
            </div>
          </div>
          
          <textarea 
            className="code-editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
          />
          
          {testResults && (
            <div className="test-results">
              <div className="results-header">
                <h4>Test Results</h4>
                <span className={`results-summary ${testResults.passed === testResults.total ? 'success' : 'failed'}`}>
                  {testResults.passed}/{testResults.total} passed
                </span>
              </div>
              
              <div className="results-list">
                {testResults.results.map((result, index) => (
                  <div key={index} className={`result-item ${result.status}`}>
                    <div className="result-status">
                      <Icon 
                        name={result.status === 'passed' ? 'FaCheck' : 'FaTimes'} 
                        size={12}
                      />
                    </div>
                    <div className="result-details">
                      <div><strong>Input:</strong> {result.input}</div>
                      <div><strong>Expected:</strong> {result.expected}</div>
                      <div><strong>Actual:</strong> {result.actual}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}