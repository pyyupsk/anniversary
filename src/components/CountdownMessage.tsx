import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface CountdownMessageProps {
    daysUntilAnniversary: number;
}

const CountdownMessage = ({ daysUntilAnniversary }: CountdownMessageProps) => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="rounded-lg bg-white p-8 text-center shadow-lg"
        >
            <h1 className="mb-6 text-3xl font-bold text-pink-600">Anniversary Countdown</h1>
            <motion.div
                className="relative mx-auto mb-6 h-48 w-48"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
                <Heart className="h-full w-full text-pink-500" />
            </motion.div>
            <p className="mb-4 text-xl">
                {daysUntilAnniversary === 0
                    ? 'Happy Anniversary! 🎉'
                    : `${daysUntilAnniversary} ${daysUntilAnniversary === 1 ? 'day' : 'days'} until our special day!`}
            </p>
        </motion.div>
    );
};

export default CountdownMessage;
