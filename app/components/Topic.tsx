'use client';
import { useState, FC } from "react";

const Topic: FC<{ setTopicList: (topicList: Array<string>) => void }> = (
    {
        setTopicList
    }
) => {

    const handleTopicList= (event: any) => {
        const value = event.target.value;
        const preTopicList = value.split(/\r\n|\r|\n/,-1);
        setTopicList(preTopicList);
        console.log(preTopicList);
    }

    return (<section>
        <h1 className="text-2xl mb-5">Topic List</h1>
        <textarea name="topicList" className="ml-2 border rounded-sm p-1" cols={60} rows={15} onChange={handleTopicList}/>
    </section>);
}

export default Topic;