@IsTest
private class CareLoopPriorityCalculatorTest {

    @IsTest
    static void testAllPriorities() {
        Date today = Date.today();

        System.assertEquals(
            'Completed',
            CareLoopPriorityCalculator.calculatePriority(
                today.addDays(-10), true
            )
        );

        System.assertEquals(
            'Not Scheduled',
            CareLoopPriorityCalculator.calculatePriority(
                null, false
            )
        );

        System.assertEquals(
            '1 - Critical',
            CareLoopPriorityCalculator.calculatePriority(
                today.addDays(-7), false
            )
        );

        System.assertEquals(
            '2 - High',
            CareLoopPriorityCalculator.calculatePriority(
                today.addDays(-3), false
            )
        );

        System.assertEquals(
            '3 - Due Today',
            CareLoopPriorityCalculator.calculatePriority(
                today, false
            )
        );

        System.assertEquals(
            '4 - Upcoming',
            CareLoopPriorityCalculator.calculatePriority(
                today.addDays(5), false
            )
        );
    }
}