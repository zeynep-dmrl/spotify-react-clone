import React from 'react'
import { useSelector } from 'react-redux'
import { Icon } from '../../icons/Icons'
import CustomRange from '../CustomRange/CustomRange';
import { secondToTime } from './Utils';

function FullScreenPlayerComponent({ toggle, state, controls, volumeIcon }) {

    const { current } = useSelector((state) => state.player);

    return (
        <div className='h-full relative' onClick={controls[state?.playing ? 'pause' : 'play']}>
            <div className='absolute inset-0 bg-center bg-no-repeat bg-cover blur-md opacity-25' style={{ backgroundImage: `url(${current.image})` }}></div>
            <div className='absolute left-8 top-10 flex items-center text-white opacity-70 gap-x-4'>
                <Icon name={"logo"} size={34} />
                <div>
                    <p className='uppercase text-xs'>Playing From playlist</p>
                    <p className='text-sm font-semibold !opacity-100 mt-0.5'>{current.title}</p>
                </div>
            </div>
            <div className='absolute left-8 bottom-40 flex items-center gap-x-5'>
                <img src={current.image} className="w-24 h-24 object-cover" alt='' />
                <div className='self-end'>
                    <h2 className='text-3xl font-bold'>{current.title}</h2>
                    <p className='text-sm font-semibold opacity-50'>Artitst</p>
                </div>
            </div>
            <div className='w-full absolute bottom-4 flex flex-col items-center px-4'
                onClick={e => {
                    e.stopPropagation()
                }}>
                <div className='w-full flex items-center gap-x-2 mb-4'>

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
                <div className='flex items-center justify-between w-full mb-3'>
                    <div className='flex-none w-[12%]'>&nbsp;</div>
                    <div className='flex items-center gap-x-5'>
                        <button className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                            <Icon name={"shuffle"} size={24} />
                        </button>
                        <button className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                            <Icon name={"playerPrev"} size={24} />
                        </button>
                        <button
                            className='h-16 w-16 flex items-center justify-center bg-white rounded-full text-black hover:scale-[1.06]'
                            onClick={controls[state?.playing ? 'pause' : 'play']}>
                            <Icon name={state?.playing ? "pause" : "play"} size={24} />
                        </button>
                        <button className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                            <Icon name={"playerNext"} size={24} />
                        </button>
                        <button className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                            <Icon name={"repeat"} size={24} />
                        </button>
                    </div>
                    <div className='flex items-center justify-end gap-x-2 mr-2'>
                        <button className='h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'
                            onClick={controls[state.muted ? 'unmute' : 'mute']}>
                            <Icon name={volumeIcon} size={24} />
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
                            <Icon name={"fullScreenOff"} size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenPlayerComponent