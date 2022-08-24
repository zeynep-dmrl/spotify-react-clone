import React, { useEffect, useMemo, useRef } from 'react'
import { Icon } from '../../icons/Icons'
import { useSelector, useDispatch } from 'react-redux'
import { useAudio } from 'react-use';
import {useFullscreen, useToggle} from 'react-use';
import { secondToTime } from './Utils';
import CustomRange from '../CustomRange/CustomRange';
import { setControls , setSidebar, setPlaying} from '../../store/Player';
import FullScreenPlayerComponent from './FullScreenPlayerComponent';

function PlayerComponent() {

    const fsRef = useRef();                                                          // Display an element full-screen, 
    const [show, toggle] = useToggle(false);                                         // optional fallback for fullscreen 
    const isFullscreen = useFullscreen(fsRef, show, {onClose: () => toggle(false)}); //video on iOS

    const dispatch = useDispatch();
    const { current, sidebar } = useSelector((state) => state.player);

    const [audio, state, controls, ref] = useAudio({
        src: current?.src,
    });
    //state = time(kaçıncı saniye), duration(toplam kaç saniye), paused(boolean), muted(boolean), volume(ses yüksekliği), playing(boolean)

    useEffect(() => {
        controls.play()
    }, [current]);

    useEffect(() => {
        dispatch(setPlaying(state.playing))
    }, [state.playing]);

    useEffect(() => {
        dispatch(setControls(controls))
    }, []);

    //useMemo will only recompute the memoized value when one of the deps has changed.
    const volumeIcon = useMemo(() => {
        if (state.volume === 0 || state.muted) {
            return 'volMuted'
        } else if (state.volume > 0 && state.volume < 0.33) {
            return 'volLow'
        } else if (state.volume >= 0.33 && state.volume < 0.66) {
            return 'volNormal'
        } else {
            return 'volFull'
        }

    }, [state.volume, state.muted])

    return (
        <div className='flex justify-between items-center h-full px-4'>
            <div className='min-w-[11.25rem] w-[30%]'>
                {current && (
                    <div className='flex items-center'>
                        <div className='flex items-center mr-3'>
                            {!sidebar && (
                                <div className='w-14 h-14 mr-3 flex-shrink-0 relative group'>
                                    <img src={current?.image} alt={current?.title} />
                                    <button 
                                    onClick={() => dispatch(setSidebar(true))}
                                    className='absolute top-1 right-1 w-6 h-6 bg-black opacity-0 group-hover:opacity-60 flex items-center justify-center rotate-90 rounded-full hover:!opacity-100 hover:scale-[1.06]'>
                                        <Icon name={"arrow"} size={16} />
                                    </button>
                                </div>
                            )}

                            <div className='flex flex-col items-center'>
                                <h6 className='text-sm line-clamp-1'>{current?.title}</h6>
                                <p className='text-[0.688rem] text-white text-opacity-70'>Artist</p>
                            </div>
                        </div>
                        <button className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                            <Icon name={"heart"} size={16} />
                        </button>
                        <button className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                            <Icon name={"pictureInpicture"} size={16} />
                        </button>
                    </div>
                )}
            </div>

            <div className='max-w-[45.125rem] w-[40%] flex flex-col items-center px-4'>
                <div className='flex items-center gap-x-2'>
                    <button className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon name={"shuffle"} size={16} />
                    </button>
                    <button className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon name={"playerPrev"} size={16} />
                    </button>
                    <button
                        className='h-8 w-8 flex items-center justify-center bg-white rounded-full text-black hover:scale-[1.06]'
                        onClick={controls[state?.playing ? 'pause' : 'play']}>
                        <Icon name={state?.playing ? "pause" : "play"} size={16} />
                    </button>
                    <button className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon name={"playerNext"} size={16} />
                    </button>
                    <button className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon name={"repeat"} size={16} />
                    </button>
                </div>
                <div className='w-full flex items-center gap-x-2'>
                    {audio}
                    <div className='text-[0.688rem] text-white text-opacity-70'>
                        {secondToTime(state?.time)}
                    </div>
                    <CustomRange
                        value={state?.time}
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        onChange={(value) => controls.seek(value)}
                    />
                    <div className='text-[0.688rem] text-white text-opacity-70'>
                        {secondToTime(state?.duration)}
                    </div>
                </div>
            </div>

            <div className='min-w-[11.25rem] w-[30%] flex items-center justify-end'>
                <button className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name={"lyrics"} size={16} />
                </button>
                <button className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name={"queue"} size={16} />
                </button>
                <button className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name={"device"} size={16} />
                </button>
                <button className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'
                    onClick={controls[state.muted ? 'unmute' : 'mute']}>
                    <Icon name={volumeIcon} size={16} />
                </button>
                <div className='w-[5.813rem] max-w-full'>
                    <CustomRange
                        value={state.muted ? 0 : state?.volume}
                        step={0.01} //0-100 kadar volume 
                        min={0}
                        max={1}
                        onChange={(value) => {
                            controls.unmute()
                            controls.volume(value)
                        }}
                    />
                </div>
                <button 
                    className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'
                    onClick={() => toggle()}>
                    <Icon name={"fullScreen"} size={16} />
                </button>
            </div>
            <div ref={fsRef}>
                {isFullscreen && (
                    <FullScreenPlayerComponent toggle={toggle} state={state} controls={controls} volumeIcon={volumeIcon}/>
                )}
            </div>
        </div>
    )
}

export default PlayerComponent  