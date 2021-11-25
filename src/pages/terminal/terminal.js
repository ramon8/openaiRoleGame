/* eslint-disable react-hooks/exhaustive-deps */
/** @jsxImportSource @emotion/react */
import { useState, useRef, useEffect } from 'react';

import { openai } from './openAi';

export const container = {
    width: '100%',
    height: '100%',
    background: 'black',
    fontFamily: "'Courier New', monospace",
    input: {
        position: 'fixed',
        top: '-100%',
    },
}


const pre = {
    width: '100vw',
    whiteSpace: 'break-spaces',
    margin: 0,
    color: 'white',
};

const containerInput = {
    color: 'white',
    display: 'grid',
    gridAutoFlow: 'column',
    width: 'fit-content',
    placeItems: 'end',
    margin: 0,
}

const cursor = {
    background: 'white',
    width: '.6rem',
    height: '3px'
}

export const Terminal = () => {

    const ref = useRef();
    const [input, setInput] = useState('');
    const [log, setLog] = useState([
        'The gamemaster will be who acts as an organizer, officiant for regarding rules, arbitrator, and moderator for a multiplayer role-playing game.',
        'There is 1 player: Ramon.',
        'The gamemaster introduces the escenario.',
    ]);

    const userName = 'Ramon';
    const initialText = `${userName}>`;

    const focusInput = () => ref.current.focus();

    const onChange = (e) => setInput(e.target.value);


    useEffect(() => {
        const prompt = `${log.join('\n')}`;
        (async () => {
            const { data } = await openai.complete({
                engine: 'davinci',
                prompt: prompt + '\nGamemaster:',
                maxTokens: 100,
                temperature: 0.9,
                topP: 1,
                presencePenalty: 0,
                frequencyPenalty: 0,
                bestOf: 1,
                n: 1,
                stream: false,
                stop: ['\n']
            });
            console.log([prompt, ...data?.choices?.map(({ text }) => text).join(''), '\n']);
            setLog([prompt, `Gamemaster:'${data?.choices[0].text}`, '\n']);
        })()
        // .then(({ data }) => {
        //     console.log([input, ...data?.choices?.map(({ text }) => text)]);
        //     setLog([input, ...data?.choices?.map(({ text }) => text), '\n']);
        // });
    }, [])

    const onKeyDown = (e) => {
        // const prompt = `${log.join('\n')}\nGamemaster:`;
        const prompt = `${log.join('\n')}\nPlayer:${input}\nGamemaster:`;
        if (e.key === 'Enter') {
            setLog([...log, `Player:${input}`]);
            setInput('');
            ref.current.value = '';
            openai.complete({
                engine: 'davinci',
                prompt: prompt,
                maxTokens: 100,
                temperature: 0.9,
                topP: 1,
                presencePenalty: 0,
                frequencyPenalty: 0,
                bestOf: 1,
                n: 1,
                stream: false,
                stop: ['\n', '.']
            }).then(({ data }) => {
                console.log([...log, `Player:${input}`, `Gamemaster:${data?.choices[0].text}`]);
                setLog([...log, `Player:${input}`, `Gamemaster:${data?.choices[0].text}`]);
            });
        }
    }

    const Cursor = () => <div css={cursor}></div>

    return <div css={container}>
        <input
            ref={ref}
            autoFocus
            type="text"
            placeholder="type here"
            onBlur={focusInput}
            onChange={onChange}
            onKeyDown={onKeyDown}
        ></input>
        <pre css={pre}>
            {log.map((value, key) => `${value}\n`)}
        </pre>
        <pre css={containerInput}>{initialText}{input}<Cursor /></pre>
    </div>
}