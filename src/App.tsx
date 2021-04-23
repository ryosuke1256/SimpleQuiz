//quiz-react-typescript.web.app
import React, { useState } from 'react';
import Header from './components/lv3/Header';
import Categorys from './components/lv3/Categorys';
import ScoreModal from './components/modal/ScoreModal';
import Modal from './components/modal/Modal';

const App: React.VFC = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [categorysOpen, setCategoryOpen] = useState(true);
  const [scoreOpen, setScoreOpen] = useState(false);
  const [selectedQuizTitle, setSelectedQuizTitle] = useState(null);

  return (
    <>
      <Header
        setSelectedQuizTitle={setSelectedQuizTitle}
        setQuizOpen={setQuizOpen}
        setCategoryOpen={setCategoryOpen}
      />
      <Categorys
        quizOpen={quizOpen}
        setQuizOpen={setQuizOpen}
        categoryOpen={categorysOpen}
        setCategoryOpen={setCategoryOpen}
        setScoreOpen={setScoreOpen}
        selectedQuizTitle={selectedQuizTitle}
        setSelectedQuizTitle={setSelectedQuizTitle}
      />
      <ScoreModal setCategoryOpen={setCategoryOpen} />
    </>
  );
};

export default App;
