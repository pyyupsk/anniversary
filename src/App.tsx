import { useState, useEffect } from 'react';
import CountdownMessage from './components/CountdownMessage';
import Calendar from './components/Calendar';
import { calculateDaysUntilAnniversary, isAnniversaryToday } from './helper/calculate';
import Confetti from 'react-confetti';

function App() {
    const [daysUntilAnniversary, setDaysUntilAnniversary] = useState(0);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentTime, setCurrentTime] = useState(currentDate.toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            const newDate = new Date();
            setCurrentDate(newDate);

            // Convert current time to Bangkok timezone (UTC +7)
            const bangkokTime = newDate.toLocaleTimeString('en-US', {
                timeZone: 'Asia/Bangkok', // Set Bangkok timezone
                hour12: true, // Use 12-hour format with AM/PM
            });
            setCurrentTime(bangkokTime);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const days = calculateDaysUntilAnniversary(currentDate);
        setDaysUntilAnniversary(days);
    }, [currentDate]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200 p-4">
            <div className="w-full max-w-md space-y-8">
                {isAnniversaryToday(currentDate) && <Confetti recycle={false} />}
                <CountdownMessage
                    currentDate={currentDate}
                    daysUntilAnniversary={daysUntilAnniversary}
                    currentTime={currentTime}
                />
                <Calendar currentDate={currentDate} daysUntilAnniversary={daysUntilAnniversary} />
            </div>
        </div>
    );
}

export default App;
