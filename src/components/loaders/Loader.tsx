import { Ring } from '@uiball/loaders';
import { motion } from 'framer-motion';

type Props = {
    message: string;
}

const Loader: React.FC<Props> = ({message}) => {
    return (
        <motion.div 
            className='absolute top-0 left-0 h-full w-full flex justify-center items-center bg-transparent backdrop-blur-md z-[5] overflow-hidden'
            exit={{opacity: 0}}
        >
            <div  className='flex w-full justify-center items-center h-full gap-5 '>
                <div className='text-xl uppercase tracking-widest font-thunder translate-y-[2px] font-bold text-black'>
                    {message} 
                </div>
                <Ring 
                    size={26}
                    lineWeight={5}
                    speed={1} 
                    color="black" 
                />
            </div>
        </motion.div>
    )
}

export default Loader;