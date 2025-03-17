'use client';
import { useState } from "react";
import { Footer } from './components/Footer';
import Participants, { Participant } from './components/Participants';
import Topic from './components/Topic';
import SendButton from './components/SendButton';
export default function Home() {
  const [ topicList, setTopicList] = useState<Array<string>>([]);
  const [participants, setParticipants] = useState<Array<Participant>>([{name: "", email:""}]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
         <h1 className="text-3xl font-bold text-center">Random Contest Generator</h1>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Participants participants={participants} setParticipants={setParticipants} />
        <Topic setTopicList={setTopicList}/>
        <SendButton participants={participants} topicList={topicList} />
      </main>
      <Footer />
    </div>
  );
}
