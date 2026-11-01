public with sharing class CareLoopPriorityCalculator {

    public static String calculatePriority(
        Date dueDate,
        Boolean isCompleted
    ) {
        if (isCompleted == true) {
            return 'Completed';
        }

        if (dueDate == null) {
            return 'Not Scheduled';
        }

        Integer daysOverdue = dueDate.daysBetween(Date.today());

        if (daysOverdue >= 7) {
            return '1 - Critical';
        } else if (daysOverdue >= 1) {
            return '2 - High';
        } else if (daysOverdue == 0) {
            return '3 - Due Today';
        } else {
            return '4 - Upcoming';
        }
    }
}