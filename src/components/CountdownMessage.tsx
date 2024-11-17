import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { calculateAnniversaryYearsAndMonths, isAnniversaryToday } from '../helper/calculate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CountdownMessageProps {
    currentDate: Date;
    daysUntilAnniversary: number;
}

export default function CountdownMessage({
    currentDate,
    daysUntilAnniversary,
}: CountdownMessageProps) {
    const { years, months } = calculateAnniversaryYearsAndMonths(currentDate);
    const isTodayAnniversary = isAnniversaryToday(currentDate);
    const daysText = daysUntilAnniversary === 1 ? 'day' : 'days';
    const message = isTodayAnniversary
        ? 'Happy Anniversary! 🎉'
        : `${daysUntilAnniversary} ${daysText} until our special day!`;

    return (
        <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-pink-400 to-pink-600">
                <CardTitle className="text-center text-2xl font-bold text-background">
                    Anniversary Countdown
                </CardTitle>
            </CardHeader>
            <CardContent className="relative -mt-8 space-y-6 px-4 py-6 text-center">
                <motion.div
                    className="relative mx-auto size-32 rounded-full bg-background p-2 shadow-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                    <Heart className="h-full w-full text-pink-500" />
                </motion.div>
                <motion.p
                    className="text-2xl font-semibold text-pink-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {message}
                </motion.p>
                <motion.p
                    className="text-xl font-medium text-pink-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    We've been together for {years} years and {months} months! 🎉
                </motion.p>
            </CardContent>
        </Card>
    );
}
