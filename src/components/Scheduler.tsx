import { Calendar, Views, luxonLocalizer } from 'react-big-calendar';
import { DateTime } from 'luxon';
import { Grid } from '@mui/material';

const localizer = luxonLocalizer(DateTime);

const Scheduler = () => {
  return (
    <Grid container maxWidth={1024} mx="auto" mt={6}>
      <Grid item xs={12}>
        <Calendar
          localizer={localizer}
          defaultView={Views.WEEK}
          views={[Views.WEEK, Views.DAY, Views.AGENDA]}
          events={[
            {
              id: 0,
              title: 'Test Event',
              start: DateTime.now().set({ minute: 0 }).toJSDate(),
              end: DateTime.now()
                .set({ minute: 0 })
                .plus({ hour: 1 })
                .toJSDate(),
            },
          ]}
          onDoubleClickEvent={console.log}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 1000 }}
        />
      </Grid>
    </Grid>
  );
};

export default Scheduler;
