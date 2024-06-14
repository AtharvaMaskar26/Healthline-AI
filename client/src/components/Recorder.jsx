import React from 'react'

// Importing Framer motion 
import { render } from "react-dom";
import { motion } from "framer-motion";

// Importing Speech to text
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const circles = [
    { id: 1, scale: [1, 1.2, 1], opacity: 1, radius: 50 },
    { id: 2, scale: [1, 1.2, 1], opacity: 0.8, radius: 60 },
    { id: 3, scale: [1, 1.2, 1], opacity: 0.6, radius: 70 },
    { id: 4, scale: [1, 1.2, 1], opacity: 0.4, radius: 80 },
    { id: 5, scale: [1, 1.2, 1], opacity: 0.2, radius: 90 },
];



const Recorder = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    const stopListening = () => {
        SpeechRecognition.stopListening();
        // Send the transcript to the backend
        console.log(transcript);
        resetTranscript()
    }

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    }


    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }


    return (
        <div className='h-[100vh] flex flex-col items-center'>
            {
                listening ?
                    <>
                        {
                            circles.map((circle) => (
                                <motion.div
                                    key={circle.id}
                                    style={{
                                        width: circle.radius * 2,
                                        height: circle.radius * 2,
                                        borderRadius: '50%',
                                        backgroundColor: '#005C78',
                                        opacity: circle.opacity,
                                        position: 'absolute',
                                    }}
                                    animate={{ scale: circle.scale }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        repeatType: 'loop',
                                    }}
                                    className='mt-[10vh] block'
                                />
                            ))
                        }
                        <button
                            onClick={stopListening}
                            className='mt-[42vh] bg-[#F3F7EC] font-semibold text-[#005C78] hover:bg-[#005C78] hover:text-[#F3F7EC] py-2 px-4 rounded-xl'>
                            Stop Speaking
                        </button>
                    </>
                    :
                    <>
                        {
                            circles.map((circle) => (
                                <motion.button
                                    key={circle.id}
                                    style={{
                                        padding: '13vh 13vh',
                                        borderRadius: '50%',
                                        border: 'none',
                                        cursor: 'pointer',
                                        backgroundColor: '#005C78',
                                        color: '#F3F7EC',
                                        position: 'absolute',
                                        opacity: circle.opacity
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    onClick={startListening}
                                    className='mt-[10vh]'
                                >
                                    <h1 className='font-semibold text-lg'>Speak</h1>
                                </motion.button>
                            ))
                        }
                    </>
            }


            <p>{transcript}</p>
        </div>
    )
}

export default Recorder