import { motion } from 'framer-motion';
import { anniversaryDay } from '../constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CalendarProps {
    currentDate: Date;
    daysUntilAnniversary: number;
}

export default function Calendar({ currentDate }: CalendarProps) {
    const renderCalendar = () => {
        const month = currentDate.toLocaleString('default', { month: 'long' });
        const year = currentDate.getFullYear();
        const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, currentDate.getMonth(), 1).getDay();

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const calendarDays = Array.from({ length: firstDayOfMonth + daysInMonth }, (_, index) => {
            if (index < firstDayOfMonth) {
                return <div key={`empty-${index}`} className="size-8 sm:size-10" />;
            }
            const day = index - firstDayOfMonth + 1;
            const isToday = day === currentDate.getDate();
            const isAnniversary = day === anniversaryDay;

            return (
                <motion.div
                    key={day}
                    className={cn(
                        'flex size-8 items-center justify-center rounded-full border sm:size-10',
                        isAnniversary
                            ? 'border-pink-400 bg-pink-200 text-pink-800'
                            : isToday
                              ? 'border-blue-400 bg-blue-200 text-blue-800'
                              : 'border',
                    )}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isAnniversary ? '❤️' : day}
                </motion.div>
            );
        });

        return (
            <Card>
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold text-pink-600">{`${month} ${year}`}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-7 gap-1 sm:gap-2">
                        {daysOfWeek.map((day) => (
                            <div
                                key={day}
                                className="text-center text-xs font-semibold text-muted-foreground sm:text-sm"
                            >
                                {day}
                            </div>
                        ))}
                        {calendarDays}
                    </div>
                </CardContent>
            </Card>
        );
    };

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
            {renderCalendar()}
        </motion.div>
    );
}
