document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    const currentDay = now.getDay();  // Sunday - Saturday : 0 - 6
    const currentHour = now.getHours();
    const timelineItems = document.querySelectorAll('.qt-timeline-item');
    let currentItem = null;

    // Highlight and show current playing item only
    timelineItems.forEach(item => {
        const day = parseInt(item.getAttribute('data-day'));
        const timeRange = item.querySelector('.qt-timeline-time').textContent.split(' - ');
        const startHour = parseInt(timeRange[0].split(':')[0]);
        const endHour = parseInt(timeRange[1].split(':')[0]);
        
        if (day === currentDay && currentHour >= startHour && currentHour < endHour) {
            item.classList.add('highlight');
            item.classList.remove('qt-hidden');
            currentItem = item;
        } else {
            item.classList.add('qt-hidden');
        }
    });

    // Ensure the current item is shown, even if no current playing item
    if (!currentItem && currentDay !== 0) {
        const todayItems = document.querySelectorAll(`.qt-timeline-item[data-day="${currentDay}"]`);
        if (todayItems.length > 0) {
            todayItems[0].classList.remove('qt-hidden');
        }
    }
});

function toggleFullSchedule() {
    const scheduleItems = document.querySelectorAll('.qt-timeline-item');
    const toggleButton = document.getElementById('qt-schedule-button');

    scheduleItems.forEach(item => {
        if (!item.classList.contains('highlight')) {
            if (item.classList.contains('qt-hidden')) {
                item.classList.remove('qt-hidden');
            } else {
                item.classList.add('qt-hidden');
            }
        }
    });
}