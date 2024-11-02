import React from 'react';
import Header from '../components/Header';
import PollQuestion from '../components/PollQuestion';
import PollOption from '../components/PollOption';
import CommentsSection from '../components/CommentsSection';
import Comment from '../components/Comment';
import CommentInput from '../components/CommentInput';
import NextButton from '../components/NextButton';
import '../styles/styles1.css';

const QuestionPage = () => {
    return (
        <div className="container">
            <Header />
            <main>
                <PollQuestion question="Q1. Who is the worst?" />
                
                {/* Poll Options */}
                <PollOption optionText="Lionel Messi" percentage="70%" />
                <PollOption optionText="Cristiano Ronaldo" percentage="90%" />
                
                {/* Comments Section */}
                <CommentsSection>
                    <Comment username="abcduser" text="who tf voted for cristiano!!" />
                    <Comment username="abcduser" text="who tf voted for cristiano!!" />
                    <Comment username="abcduser" text="who tf voted for cristiano!!" />
                    <CommentInput />
                </CommentsSection>
                
                {/* Next Button */}
                <NextButton text="Next ➔" />
            </main>
        </div>
    );
};

export default QuestionPage;