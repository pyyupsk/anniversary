import { useState, useEffect } from 'react';
import CountdownMessage from './components/CountdownMessage';
import Calendar from './components/Calendar';

function App() {
    const [daysUntilAnniversary, setDaysUntilAnniversary] = useState(0);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const calculateCountdown = () => {
            const anniversaryDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 21);
            if (currentDate > anniversaryDate) {
                anniversaryDate.setMonth(anniversaryDate.getMonth() + 1);
            }
            const timeDiff = anniversaryDate.getTime() - currentDate.getTime();
            const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
            setDaysUntilAnniversary(daysLeft);
        };

        calculateCountdown();
    }, [currentDate]);

    return (
        <div className="flex min-h-svh items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200 p-4">
            <div className="w-full max-w-md space-y-8">
                <CountdownMessage daysUntilAnniversary={daysUntilAnniversary} />
                <Calendar currentDate={currentDate} daysUntilAnniversary={daysUntilAnniversary} />
            </div>
        </div>
    );
}

export default App;
