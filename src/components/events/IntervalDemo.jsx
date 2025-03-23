import { useRef, useState } from "react"

export function IntervalDemo(){

    const [toggleButton, setToggleButton] = useState('d-block');
    const [toggleProgress, setToggleProgress] = useState('d-none');
    const [toggleImage, setToggleImage] = useState('d-none');
    const [pValue, setPvalue] = useState(1);
    const [status, setStatus] = useState('');

    let thread = useRef(null);
    let progressValue = useRef(pValue);  

    function StartProgress(){
        progressValue.current += 1;  
        setPvalue(progressValue.current);  
        if(progressValue.current === 100) {
            clearInterval(thread.current);
            setToggleProgress('d-none');
            setToggleImage('d-block');
        }
    }

    function LoadImageClick(){
        setToggleButton('d-none');
        setToggleProgress('d-block');
        thread.current = setInterval(StartProgress, 100);
    }

    function PauseClick(){
        clearInterval(thread.current);
        setStatus('Paused');
    }

    function PlayClick(){
        if(progressValue.current < 100) {
            thread.current = setInterval(StartProgress, 100);
            setStatus('');
        }
    }

    return(
        <div className="container-fluid d-flex text-center justify-content-center align-items-center" style={{height:'100vh'}}>
            <div>
                <div className={toggleButton}>
                    <button onClick={LoadImageClick} className="btn btn-primary">Load Image</button>
                </div>
                <div className={toggleProgress}>
                    <progress min={1} max={100} value={progressValue.current} style={{width:'300px', height:'30px'}} ></progress>
                    <div className="my-2">
                        <button onClick={PlayClick} className="btn btn-primary bi bi-play mx-2"></button>
                        <button onClick={PauseClick} className="btn btn-danger bi bi-pause"></button>
                    </div>
                    <div>
                        {pValue} % Completed {status}
                    </div>
                </div>
                <div className={toggleImage}>
                    <img src="iphone-green.jpg" width="300" height="400" />
                </div>
            </div>
        </div>
    )
}
