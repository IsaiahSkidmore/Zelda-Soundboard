import triforcImg from '../assets/images/triforce.png';
import sound1 from '../assets/audio/chestOpening.mp3';

export default function Button() {

    function playSound(src) {
        const audio = new Audio(src);
        audio.play();
    }
    return (
        <div className="button-container">
            <button className="button" id="button1" onClick={() => playSound(sound1)}>
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