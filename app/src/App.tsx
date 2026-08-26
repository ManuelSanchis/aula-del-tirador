import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/layout/MainLayout/MainLayout';
import { ExamPracticePage } from '@/pages/ExamPracticePage/ExamPracticePage';
import { HomePage } from '@/pages/HomePage/HomePage';
import { TopicsPage } from '@/pages/TopicsPage/TopicsPage';

import { TopicPracticePage } from './pages/TopicPracticePage/TopicPracticePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/exam" element={<ExamPracticePage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/topics/:topicId" element={<TopicPracticePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
