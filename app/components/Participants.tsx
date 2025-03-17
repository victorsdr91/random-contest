'use client';

import { FC, useCallback, useState } from "react";
import { InputGroup } from "./InputGroup";

export type Participant = {
    name: string;
    email: string;
}

const Participants: FC<{participants: Array<Participant>, setParticipants: (participants: Array<Participant>) => void}> = ({
    participants,
    setParticipants
}) => {

    const addParticipant = useCallback(() => {
        const participantsCopy = Array.from(participants);
        participantsCopy.push({name:"", email:""});
        setParticipants(participantsCopy);
    },[participants]);

    const modifyName = useCallback((index: number, name: string) => {
        const participantsCopy = Array.from(participants);
        const participant = participants[index];
        participantsCopy.splice(index, 1, {name, email: participant.email})
        setParticipants(participantsCopy);
    },[participants]);

    const modifyEmail = useCallback((index: number, email: string) => {
        const participantsCopy = Array.from(participants);
        const participant = participants[index];
        participantsCopy.splice(index, 1, {name: participant.name, email: email})
        setParticipants(participantsCopy);
    },[participants]);

    const removeParticipant = useCallback((index: number) => {
        if(participants.length > 1) {
            const participantsCopy = Array.from(participants);
            participantsCopy.splice(index, 1);
            setParticipants(participantsCopy);
        }
    },[participants]);

    return (
        <>
        <h1 className="text-2xl">Participants</h1>
        {   participants.map(( value, key ) => 
                <InputGroup 
                    key={key}
                    index={key}
                    participant={value}
                    modifyName={modifyName}
                    modifyEmail={modifyEmail}
                    addParticipant={addParticipant}
                    removeParticipant={removeParticipant} />
            )
        }</>
    );
}

export default Participants;