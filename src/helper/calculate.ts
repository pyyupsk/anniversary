import { anniversaryDay } from '../constants';

// Helper function to calculate the number of days until the anniversary
export const calculateDaysUntilAnniversary = (currentDate: Date): number => {
    const anniversaryDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        anniversaryDay,
    );
    if (currentDate > anniversaryDate) {
        anniversaryDate.setMonth(anniversaryDate.getMonth() + 1); // Move to the next month if past anniversary
    }
    const timeDiff = anniversaryDate.getTime() - currentDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
};

// Helper function to calculate the years and months together
export const calculateAnniversaryYearsAndMonths = (
    currentDate: Date,
): { years: number; months: number } => {
    const startYear = 2024; // Start year of relationship
    const startMonth = 2; // Start month of relationship (0-indexed, so 2 = March)

    let years = currentDate.getFullYear() - startYear;
    let months = currentDate.getMonth() - startMonth;

    if (months < 0) {
        years--;
        months += 12; // Adjust months to be positive
    }

    return { years, months };
};

// Helper function to calculate the current day is anniversary day, or not
export const isAnniversaryToday = (currentDate: Date): boolean => {
    return currentDate.getDate() === anniversaryDay;
};
