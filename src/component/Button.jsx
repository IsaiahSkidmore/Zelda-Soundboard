import { useRef, useState } from 'react';
import sound1 from '../assets/audio/chestOpening.mp3';

export default function Button() {
    const audioRef = useRef(null);
    const [playingId, setPlayingId] = useState(null);

    function handleButtonClick(id, src) {
        // If the same button is clicked and audio is playing, stop it
        if (playingId === id && audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setPlayingId(null);
        } else {
            // Stop any currently playing audio
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
            // Play new audio
            const audio = new Audio(src);
            audioRef.current = audio;
            audio.play();
            setPlayingId(id);
        }
    }


    return (
        <div className="button-container">
            <button className="button" id="button1" onClick={() => handleButtonClick(1, sound1)}>
            </button>

            <button className="button" id="button2">
            </button>

            <button className="button" id="button3"></button>

            <button className="button" id="button4"></button>

            <button className="button" id="button5"></button>

            <button className="button" id="button6"></button>

            <button className="button" id="button7"></button>

            <button className="button" id="button8"></button>

            <button className="button" id="button9"></button>
        </div>

    );
}