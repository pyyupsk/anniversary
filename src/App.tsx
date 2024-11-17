'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import CountdownMessage from './components/CountdownMessage';
import Calendar from './components/Calendar';
import { calculateDaysUntilAnniversary, isAnniversaryToday } from './helper/calculate';
import Confetti from 'react-confetti';

export default function App() {
    const [daysUntilAnniversary, setDaysUntilAnniversary] = useState(0);
    const currentDate = useMemo(() => new Date(), []);

    useEffect(() => {
        const days = calculateDaysUntilAnniversary(currentDate);
        setDaysUntilAnniversary(days);
    }, [currentDate]);

    return (
        <div className="grid min-h-screen place-items-center bg-gradient-to-br from-pink-100 via-purple-200 to-blue-100">
            {isAnniversaryToday(currentDate) && <Confetti recycle={false} />}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto max-w-md space-y-8"
            >
                <CountdownMessage
                    currentDate={currentDate}
                    daysUntilAnniversary={daysUntilAnniversary}
                />
                <Calendar currentDate={currentDate} daysUntilAnniversary={daysUntilAnniversary} />
            </motion.div>
        </div>
    );
}
