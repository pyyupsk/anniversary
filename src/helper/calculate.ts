import { anniversaryDay } from '../constants';

export const calculateDaysUntilAnniversary = (currentDate: Date): number => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    let anniversaryDate = new Date(currentYear, currentMonth, anniversaryDay);

    if (currentDate > anniversaryDate) {
        anniversaryDate = new Date(currentYear, currentMonth + 1, anniversaryDay);
    }

    return Math.ceil((anniversaryDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
};

export const calculateAnniversaryYearsAndMonths = (
    currentDate: Date,
): { years: number; months: number } => {
    const startYear = 2024;
    const startMonth = 2;

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    let years = currentYear - startYear;
    let months = currentMonth - startMonth;

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months };
};

export const isAnniversaryToday = (currentDate: Date): boolean => {
    const today = currentDate.getDate();
    return today === anniversaryDay;
};
