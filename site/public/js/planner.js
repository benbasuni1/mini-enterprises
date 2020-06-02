document.addEventListener('DOMContentLoaded', () => {
	let calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
		plugins: [ 'bootstrap', 'timeGrid', 'dayGrid', 'list', 'interaction' ],
		weekNumbers: true,
		weekNumbersWithinDays: true,
		listDayFormat: false,
		fixedWeekCount: false,
		showNonCurrentDates: false,
		aspectRatio: 1.75,
		defaultView: 'dayGridMonth',
		themeSystem: 'bootstrap',
		events: data,
		eventTextColor: '#353035',
		firstDay: 1,
		header: { center: 'home listWeek dayGridMonth' },
		customButtons: {
			home: {
				text: 'home',
				click: () => (window.location.href = '/')
			}
		},
		eventRender: (event) => {
			let show = true;
			if (event.event._def.extendedProps.excludedDates) {
				let excludedDates = event.event._def.extendedProps.excludedDates;

				excludedDates.forEach((excluded) => {
					let theDate = new Date(event.event.start);
					let excludedTomorrrow = new Date(excluded);

					if (
						(theDate >= excludedTomorrrow &&
							theDate < excludedTomorrrow.setDate(excludedTomorrrow.getDate() + 1)) ||
						theDate <= new Date()
					) {
						show = false;
					}
				});
			}

			return show;
		}
	}).render();
});
