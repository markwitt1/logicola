import { Sidebar } from '@/components/sidebar';
import Exercise from '@/components/question';

export default function EasierTranslations() {
  return (
    <>
      <div className='flex w-full h-full overflow-scroll'>
        <Sidebar />
        <div className='p-4 w-full'>
          <h1 className='mb-6 text-3xl font-bold text-gray-900'>Quiz Q</h1>
          <Exercise
            chapter={3}
            initialQuestionIdx={0}
            showExerciseIndex={true}
          />
        </div>
      </div>
    </>
  );
}
