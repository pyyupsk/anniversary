import { motion } from 'framer-motion';

interface CalendarProps {
    currentDate: Date;
    daysUntilAnniversary: number;
}

const Calendar = ({ currentDate }: CalendarProps) => {
    const renderCalendar = () => {
        const month = currentDate.toLocaleString('default', { month: 'long' });
        const year = currentDate.getFullYear();
        const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, currentDate.getMonth(), 1).getDay();

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const calendarDays = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="h-[52px]" />);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isToday = day === currentDate.getDate();
            const isAnniversary = day === 21;

            calendarDays.push(
                <motion.div
                    key={day}
                    className={`flex size-[52px] items-center justify-center rounded-full border border-gray-300 ${
                        isAnniversary
                            ? 'bg-pink-200 text-pink-800'
                            : isToday
                              ? 'bg-blue-200 text-blue-800'
                              : ''
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isAnniversary ? '❤️' : day}
                </motion.div>,
            );
        }

        return (
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="rounded-lg bg-white p-4 shadow-lg"
            >
                <h2 className="mb-2 text-center text-xl font-bold">{`${month} ${year}`}</h2>
                <div className="grid grid-cols-7 gap-2">
                    {daysOfWeek.map((day) => (
                        <div key={day} className="text-center text-sm font-semibold">
                            {day}
                        </div>
                    ))}
                    {calendarDays}
                </div>
            </motion.div>
        );
    };

    return <>{renderCalendar()}</>;
};

export default Calendar;
