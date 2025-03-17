'use client';
import { useState, useCallback, FC } from "react";
import { Participant } from "./Participants";

interface InputGroupProps {
    index: number,
    participant: Participant,
    modifyName: (index: number, name: string) => void;
    modifyEmail: (index: number, email: string) => void;
    addParticipant: () => void;
    removeParticipant: (index: number) => void;
}

export const InputGroup: FC<InputGroupProps> = ({
    index,
    participant,
    modifyName,
    modifyEmail,
    addParticipant,
    removeParticipant,
}) => {

    const onAdd = () => {
        console.log("Adding");
        addParticipant();
    };

    const onRemove = () => {
        console.log("Removing");
        removeParticipant(index);
    };

    const updateName = (event: any) => {
        modifyName(index, event?.target?.value);
    }

    const updateEmail = (event: any) => {
        modifyEmail(index, event?.target?.value);
    }

    return (
        <div className="flex items-center">
            <div className="mr-4">
                <label htmlFor="name">Name</label>
                <input className="ml-2 border rounded-sm p-1"type="text" name="name" value={participant.name} onChange={updateName}/>
            </div>
            <div className="mr-4">
                <label htmlFor="email">Email</label>
                <input className="ml-2 border rounded-sm p-1" type="email" name="email" value={participant.email} onChange={updateEmail}/>
            </div>
            <div className="mr-1">
                <button onClick={onAdd} className="w-8 h-8 pb-1 font-bold border border-solid border-green-600 hover:bg-green-600 rounded-full bg-green-500 text-white text-xl">+</button>
            </div>
            <div className="mr-2">
                <button onClick={onRemove} className="w-8 h-8 pb-1 font-bold border border-solid border-red-600 rounded-full bg-red-500 hover:bg-red-600 text-white text-xl">-</button>
            </div>
        </div>
    );
}