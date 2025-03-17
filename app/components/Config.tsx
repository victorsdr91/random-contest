'use client';
import { useState, useCallback, FC } from "react";
import { Participant } from "./Participants";

export type ConfigType = {
    templateId: string,
    serviceId: string,
    publicKey: string,
}

interface InputGroupProps {
    config: ConfigType,
    setConfig: (config: ConfigType) => void;
}

const Config: FC<InputGroupProps> = ({
    config,
    setConfig
}) => {

    const onChangeTemplateId = (evt: any) => {
        const configCopy = Object.assign({}, config);
        configCopy.templateId = evt.target.value;
        setConfig(configCopy);
    }

    const onChangeServiceId = (evt: any) => {
        const configCopy = Object.assign({}, config);
        configCopy.serviceId = evt.target.value;
        setConfig(configCopy);
    }

    const onChangePublicKey = (evt: any) => {
        const configCopy = Object.assign({}, config);
        configCopy.publicKey = evt.target.value;
        setConfig(configCopy);
    }


    return (
        <div className="flex items-center">
            <h1 className="text-l font-bold">EmailJS Config</h1>
            <div className="mr-4">
                <label htmlFor="name">Template ID</label>
                <input className="ml-2 border rounded-sm p-1"type="text" name="name" value={config.templateId} onChange={onChangeTemplateId}/>
            </div>
            <div className="mr-4">
                <label htmlFor="email">Service ID</label>
                <input className="ml-2 border rounded-sm p-1" type="email" name="email" value={config.serviceId} onChange={onChangeServiceId}/>
            </div>
            <div className="mr-4">
                <label htmlFor="email">Public Key</label>
                <input className="ml-2 border rounded-sm p-1" type="email" name="email" value={config.publicKey} onChange={onChangePublicKey}/>
            </div>
        </div>
    );
}

export default Config;