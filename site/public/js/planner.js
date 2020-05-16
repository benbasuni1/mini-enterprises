document.addEventListener('DOMContentLoaded', () => {
	let events = [];
	new FullCalendar.Calendar(document.getElementById('calendar'), {
		plugins: [ 'bootstrap', 'timeGrid', 'dayGrid', 'list', 'interaction' ],
		editable: true,
		droppable: true,
		selectable: true,
		weekNumbers: true,
		weekNumbersWithinDays: true,
		listDayFormat: false,
		fixedWeekCount: false,
		showNonCurrentDates: false,
		aspectRatio: 1.75,
		defaultView: 'dayGridMonth',
		themeSystem: 'bootstrap',
		events: events,
		header: { center: 'home listWeek dayGridMonth' },
		customButtons: {
			home: {
				text: 'home',
				click: () => (window.location.href = '/')
			}
		},
		select: (info) => {
			let title = prompt('title:');
			if (title) {
				events.push({
					title: title,
					start: info.startStr
				});
			}
		}
	}).render();

	new FullCalendarInteraction.Draggable(document.getElementById('external-events'), {
		itemSelector: '.fc-event',
		eventData: (eventEl) => {
			return {
				title: eventEl.innerText
			};
		}
	});
});
