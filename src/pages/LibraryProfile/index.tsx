import * as React from 'react';
import { Grid, Typography, Box, Button, FormControl, FormControlLabel, Checkbox, RadioGroup, CircularProgress, TextField, Tooltip} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AppState } from '../../redux/rootReducer'
import { PageLayout, MainCardLayoutWithSideMenu} from '../../components/layout/Page';
import scss_variables from '../../styles/_variables.scss';
import { useDispatch, useSelector } from 'react-redux';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import moment from 'moment';
import { getUserComputerReservationSlots, getLibraryComputerSlots, createUserPreferenceSlot, getUserPreferenceSlots, deleteUserPreferenceSlot, getLibraryStudentPreferenceSlots, createComputerReservationSlot } from '../../redux/bookings/bookings.actions';
import { createLibraryTimeSlot, updateLibraryTimeSlot, deleteLibraryTimeSlot, setLibraryTimeSlots, setActiveLibraryTimeSlot } from '../../redux/library/library.actions';
import { selectLibrarySlots } from '../../redux/bookings/bookings.selectors';
import { BasicModal } from '../../components/Modals';
import MentorBookingModal from '../../components/mentor/MentorBookingModal';

const CURRENT_DATE = moment().toDate();

const LibraryProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const appState = useSelector((store: AppState) => store.appState);
    const user = useSelector((store: AppState) => store.user);
    const bookings = useSelector((store: AppState) => store.bookings);
    const lib_slots = useSelector((store: AppState) => store.bookings.library_slots);
    const student_preference_slots = useSelector((store: AppState) => store.bookings.student_preference_slots);
    const user_reservation_slots = useSelector((store: AppState) => store.bookings.user_reservation_slots);

    const calendarRef = React.createRef<any>()

    const [sessions, setSessions] = React.useState([]);
    const [rescheduleActive, setRescheduleActive] = React.useState(false);
    const [isMobile, set_isMobile] = React.useState(false);

    const [rescheduleData, set_rescheduleData] = React.useState({revert:null});

    const [activeReschedule, set_activeReschedule] = React.useState({id:"", start_time:"", end_time:""});
    const [prevReschedule, set_prevReschedule] = React.useState({id:"", start_time:"", end_time:""});
    const [activeBooking, set_activeBooking] = React.useState({uniqueID:"", start_time:"", end_time:""});
    const [newBooking, set_newBooking] = React.useState({uniqueID:"", start:"", end:"", startRecur: "", endRecur:"", is_recurring:false});
    const [activeBookingToDelete, set_activeBookingToDelete] = React.useState({uniqueID:"", start:"", end:"", startRecur: "", endRecur:"", event:null, is_recurring:false});

    const [events, setEvents] = React.useState<any[]>([]);
    const [scheduleEvents, set_scheduleEvents] = React.useState<any[]>([]);
    const [activeLibrarySlot, setActiveLibrarySlot] = React.useState<any>(null);
    const [selectedOpenReservation, setSelectedOpenReservation] = React.useState<any>(null);
    const [activeLibrary, setActiveLibrary] = React.useState<any>(null);


    const today = moment();
    const nextWeekDate = new Date();
    nextWeekDate.setDate(nextWeekDate.getDate() + 6);

    const [createLibraryHourSlotModalOpen, set_createLibraryHourSlotModalOpen] = React.useState(false);
    const [deleteSlotConfirmModalOpen, set_deleteSlotConfirmModalOpen] = React.useState(false);
    const [slotReservationModalOpen, setSlotReservationModalOpen] = React.useState(false);

    const [selectedConferenceType, set_selectedConferenceType] = React.useState('GoogleMeet');
    const [selectedOpenReservationNotes, set_selectedOpenReservationNotes] = React.useState('');


    React.useEffect(() => {
      if (user && user.studentProfile && user.studentProfile !== null ) {
        if (user.studentProfile.assignedLibrary) {
          var libraryID = user.studentProfile?.assignedLibrary.uniqueID
          dispatch(getLibraryComputerSlots(libraryID))
          dispatch(getUserPreferenceSlots())
          setActiveLibrary(user.studentProfile.assignedLibrary)
          dispatch(getUserComputerReservationSlots())
        }
      }else if (user && user.mentorProfile && user.mentorProfile !== null) {
        if (user.mentorProfile.assignedLibrary) {
          var libraryID2 = user.mentorProfile.assignedLibrary.uniqueID
          dispatch(getLibraryComputerSlots(libraryID2))
          dispatch(getLibraryStudentPreferenceSlots(libraryID2))
          setActiveLibrary(user.mentorProfile.assignedLibrary)
          dispatch(getUserComputerReservationSlots())
        }
      }
    }, [user]);


    React.useEffect(() => {
      if (user && user.role === 1 && user.studentProfile) {
        if (user.studentProfile.assignedLibrary) {
          var libraryID = user.studentProfile?.assignedLibrary.uniqueID
          dispatch(getLibraryComputerSlots(libraryID))
          dispatch(getUserPreferenceSlots())
          setActiveLibrary(user.studentProfile.assignedLibrary)
          dispatch(getUserComputerReservationSlots())
        }
      }else if (user && user.role === 2 && user.mentorProfile ) {
        if (user.mentorProfile.assignedLibrary) {
          var libraryID2 = user.mentorProfile.assignedLibrary.uniqueID
          dispatch(getLibraryComputerSlots(libraryID2))
          dispatch(getLibraryStudentPreferenceSlots(libraryID2))
          setActiveLibrary(user.mentorProfile.assignedLibrary)
          dispatch(getUserComputerReservationSlots())
        }
      }else if (user && user.role === 3 && user.advisorProfile) {
        if (user.advisorProfile.library) {
          var libraryID3 = user.advisorProfile.library.uniqueID
          dispatch(getLibraryComputerSlots(libraryID3))
          setActiveLibrary(user.advisorProfile.library)
          //dispatch(getUserComputerReservationSlots())

        }
      }else if (user && user.role === 4 && user.librarianProfile) {
        if (user.librarianProfile.library) {
          var libraryID4 = user.librarianProfile.library.uniqueID
          dispatch(getLibraryComputerSlots(libraryID4))
          //dispatch(getLibraryStudentPreferenceSlots(libraryID2))
          setActiveLibrary(user.mentorProfile.assignedLibrary)
          //dispatch(getUserComputerReservationSlots())

        }
      }
    }, [user]);



    React.useEffect(() => {
    }, []);


    // React.useEffect(() => {
    //   if (user && user.studentProfile) {
    //     var libraryID = user.studentProfile?.assignedLibrary?.uniqueID
    //     dispatch(getLibraryComputerSlots(libraryID))
    //     dispatch(getUserPreferenceSlots())
    //   }
    //   if (user && user.mentorProfile) {
    //     var libraryID = user.mentorProfile?.assignedLibrary?.uniqueID
    //     dispatch(getLibraryComputerSlots(libraryID))
    //     dispatch(getUserPreferenceSlots())
    //   }
    // }, [user]);

    React.useEffect(() => {
      if (lib_slots !== undefined && lib_slots !== null) {
        const generateSlots = async () => {
          var slots:any = []
          lib_slots.forEach(slot => {
            var newSlot = {}
            if (slot.startRecurring && slot.endRecurring && slot.startRecurring !==null && slot.endRecurring !== null) {
              let start = moment(slot.startTime); // some random moment in time (in ms)
              let end = moment(slot.endTime); // some random moment after start (in ms)
              let startTime = moment.utc(start).format("HH:mm");
              let endTime = moment.utc(end).format("HH:mm");
              newSlot = {
                    title  : 'Open Library Slot',
                    start  : slot.startTime,
                    end  : slot.endTime,
                    startTime  : startTime,
                    endTime  : endTime,
                    startRecur  : slot.startRecurring,
                    endRecur  : slot.endRecurring,
                    daysOfWeek:[slot.day],
                    display: 'background',
                    groupId:'openSlots',
                    extendedProps:{
                      uniqueID:slot.uniqueID
                    },
                    allDay : false // will make the time show
              }
            }else{
             newSlot = {
                    title  : 'Open Library Slot',
                    start  : slot.startTime,
                    end  : slot.endTime,
                    display: 'background',
                    groupId:'openSlots',
                    extendedProps:{
                      uniqueID:slot.uniqueID
                    },
                    allDay : false // will make the time show
              }
            }
            slots.push(newSlot)
          });
          let tempArr = [...slots, ...scheduleEvents]
          set_scheduleEvents(tempArr)
          if (calendarRef.current) {
            const api = calendarRef.current.getApi();
            api.refetchEvents()
          }
        };
        generateSlots();
      }
    }, [lib_slots]);


    function renderInnerContent( innerProps:any ) {
      let splitTag = innerProps.event.groupId.split(":")
      let id = splitTag[0]

      return (
          <div className='fc-event-main-frame'>

              { innerProps.event.groupId !== "alreadyBooked" && rescheduleActive === true &&
              <div style={{position:"absolute",bottom:0,right:0, zIndex:99}} ><button type='button' onClick={(e)=> handleLibSlotRemove(innerProps.event)} style={{padding:1}} id='btnDeleteEvent'>X</button></div>
              }
              { innerProps.timeText &&
              <div className='fc-event-time'>{ innerProps.timeText }</div>
              }
              <div className='fc-event-title-container'>
                {  innerProps.event.groupId === "" || id === "myBooks" || innerProps.event.groupId === "alreadyBooked" ?
                  (
                    <div className='fc-event-title fc-sticky'>
                        { innerProps.event.title || <>&nbsp;</> }
                    </div>
                  )
                : (
                  <div style={{fontSize:"14px", color:"#fff", padding:5, borderRadius:7}} className='fc-event-title fc-sticky'>
                      { innerProps.event.title || <>&nbsp;</> }
                      { id === "myBooks" &&
                        <div className='fc-event-time'>-</div>
                      }
                  </div>
                )
                }
              </div>
          </div>
      );
    }

    function getNextWeekDay (startDate:any, dayOfWeek:any){
        var dayOffset = dayOfWeek > startDate.getDay()
            ? dayOfWeek - startDate.getDay()
            : dayOfWeek - startDate.getDay() + 7;
        startDate.setDate(startDate.getDate() + dayOffset);
        return startDate;
    }

    const onEventRemove = (event:any) => {
      const api = calendarRef.current.getApi();
      var calevents = api.getEvents();
      const id = event
      const { defId } = event;
      const calEventsToDelete = calevents.filter((eve:any, index:number) => eve._def.defId === event._def.defId);
      const calendarID = calEventsToDelete[0].id
      const eventToDelete = api.getEventById(calEventsToDelete[0].id)
      set_newBooking({uniqueID:"", start:"", end:"", startRecur: "", endRecur:"", is_recurring:false})
      event.remove()
    };

    const handleLibSlotRemove = (event:any) => {
      //console.log(event)
      const { defId, extendedProps } = event._def;
      const { start, end } = event;
      //console.log(extendedProps.uniqueID)
      let eventObj: any = {start:start, end:end, uniqueID:extendedProps.uniqueID, event:event}
      set_activeBookingToDelete(eventObj)
      set_deleteSlotConfirmModalOpen(true)
    };

    const handleDeleteLibraryHourSlot = (bookingToDelete:any) => {
      console.log(bookingToDelete)
      dispatch(deleteLibraryTimeSlot(bookingToDelete.uniqueID))
    };

    const handleCancelDeleteLibraryHourSlot = () => {
      set_activeBookingToDelete({start:'', end:'', uniqueID:'', startRecur: "", endRecur:"", is_recurring:false, event:null})
      set_deleteSlotConfirmModalOpen(false)
    };

    const handleCancelReserveOpenSlot = () => {
      setSelectedOpenReservation({start:'', end:'', startRecur: "", endRecur:"", uniqueID:'', event:null})
      setSlotReservationModalOpen(false)
    };

    const onEventAdded = (event:any) => {
      const api = calendarRef.current.getApi();
      //const apiEvent = api.addEvent(event);
      //setEventsForCheckout(eventsForCheckout => [...eventsForCheckout,event] );
      var calevents = api.getEvents();
      var allowed_area:any = [];

      console.log(event)
      const { start, end } = event;

      // console.log(apiEvent._def.defId)
      //const { defId } = apiEvent._def;
      // const { extendedProps, defId } = evt._def;
      //
      // console.log(extendedProps.uniqueID)
      // //console.log(event)
      let eventObj: any = {start:start, end:end, eventId:'', defId:'', is_recurring:false, startRecur: "", endRecur:""}
      set_newBooking(eventObj)
      set_createLibraryHourSlotModalOpen(true)


    };

    const allowedSelection = (event:any) => {
      const api = calendarRef.current.getApi();
      var calevents = api.getEvents();
      var allowed_area:any = [];
      console.log(event)

      // calevents.forEach(function(evt:any) {
      //     console.log(evt)
      //
      //     if (evt.groupId !== 'openSlots') {
      //       allowed_area.push(evt)
      //
      //     }
      // });

      //console.log(allowed_area)

      return true
    };

    const allowedDrop = (event:any) => {
      const api = calendarRef.current.getApi();
      var calevents = api.getEvents();
      var allowed_area:any = [];

      calevents.forEach(function(evt:any) {
          if (evt.groupId === 'openSlots') {
            allowed_area.push(evt)

          }
      });

      console.log(allowed_area)

      return allowed_area.length > 0;
    };

    const selectOverlap = (event:any) => {
      let splitTag = event.groupId.split(":")
      let id = splitTag[0]
      console.log(event)
      return event.groupId !== 'openSlots'
    };

    const eventOverlap = (event:any) => {
      let splitTag = event.groupId.split(":")
      let id = splitTag[0]
      console.log(id)
      return event.groupId === 'openSlots';
    };

    const handleCreateLibraryHourSlot = (event:any) => {
      //console.log(event)
      var endDte = event.endRecur.split('-');

      let newDate = moment(event.start)
      const day = newDate.day();

      //console.log(endDte)
      var endDateRecurr = new Date(endDte[0], endDte[1] - 1, endDte[2]);
      let payloadObj = {}
      if (event.startRecur && event.endRecur && event.startRecur !== "" && event.endRecur !== "" ) {
        payloadObj = {startTime:event.start, endTime:event.end, start_recurring:event.start, end_recurring:endDateRecurr, library:activeLibrary.uniqueID, day:day}
      }else{
        payloadObj = {startTime:event.start, endTime:event.end, library:activeLibrary.uniqueID, day:day}
      }
      console.log(payloadObj)
      dispatch(createLibraryTimeSlot(payloadObj))
    };


    return(<>
    <BasicModal open={createLibraryHourSlotModalOpen} onClose={()=>set_createLibraryHourSlotModalOpen(false)} title={'Create Library Time Slot'}>
      <Box display={'flex'} flexWrap={'wrap'} width={"100%"} flexDirection={'column'} justifyContent={'flex-start'}>
      <Typography mt={1} mb={1} variant="body1" alignSelf="flex-start" color={scss_variables.primary_color}>
        Are you sure you want to create this open slot? These are designated open hours for students and mentors
      </Typography>
      <Typography mt={1} mb={1} variant="body1" alignSelf="flex-start" color={scss_variables.primary_color}>
        Timeslot Details: <b>{newBooking ? `${newBooking.start} - ${newBooking.end}`:`No timeslot details...`}</b>
      </Typography>

      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value={newBooking.is_recurring} control={<Checkbox onChange={(e)=> set_newBooking({ ...newBooking, is_recurring: !newBooking.is_recurring })}/>} label="Make this timeslot reccurring weekly." />
        </RadioGroup>
      </FormControl>
      {newBooking.is_recurring
      ? (
        <FormControl>
          <TextField
            id="date"
            label="Recurring End Date"
            type="date"
            sx={{ width: 220 }}
            inputProps={{ min: nextWeekDate.toISOString().split('T')[0] }}
            onChange={(e)=> set_newBooking({ ...newBooking, startRecur:newBooking.start, endRecur: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      )
      : null
      }

      <Typography mt={1} mb={1} variant="body1" alignSelf="flex-start" color={scss_variables.primary_color}>
        You confirm that you will be commited to the given timeslot each week for the forseeable future, and use the computer hours even if no mentor is assigned yet.
      </Typography>

      <Typography mt={1} mb={1} variant="body1" alignSelf="flex-start" color={scss_variables.primary_color}>
        You can lose your reservation spot if you do not show up to your session consistently.
      </Typography>


      <Button onClick={()=>handleCreateLibraryHourSlot(newBooking)} variant="contained" color="info" sx={{mt:2}} >
        {appState.loading
        ? (<CircularProgress />)
        : (`Create Timeslot`)
        }

      </Button>
      </Box>
    </BasicModal>

    <BasicModal open={deleteSlotConfirmModalOpen} onClose={()=>set_deleteSlotConfirmModalOpen(false)} title={'Delete Open Slot'}>
      <Box display={'flex'} flexWrap={'wrap'} width={"100%"} flexDirection={'column'} justifyContent={'flex-start'}>
      <Typography mt={1} mb={1} variant="body1" alignSelf="flex-start" color={scss_variables.primary_color}>
        Are you sure you want to delete this open slot? No students or mentors will be able to book a session/reserve computers during this time.
      </Typography>
      <Typography mt={1} mb={1} variant="body1" alignSelf="flex-start" color={scss_variables.primary_color}>
        Timeslot Details: <b>{activeBookingToDelete ? `${activeBookingToDelete.start} - ${activeBookingToDelete.end}`:`No timeslot details...`}</b>
      </Typography>

      <Button onClick={()=>handleDeleteLibraryHourSlot(activeBookingToDelete)} variant="contained" color="info" sx={{mt:2}} >
        {appState.loading
        ? (<CircularProgress />)
        : (`Yes, delete this slot.`)
        }
      </Button>
      <Button onClick={()=>handleCancelDeleteLibraryHourSlot()} variant="contained" color="error" sx={{mt:2}} >
        No, cancel.
      </Button>
      </Box>
    </BasicModal>

    <PageLayout>
      <MainCardLayoutWithSideMenu>
          <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={9} lg={9}>
                <div className="card-container">
                  <div className="card-header">
                  <Typography variant="h6" alignSelf="flex-start" color={scss_variables.primary_color}>
                    Your Library
                  </Typography>
                  </div>
                  <div className="card-body">
                  <Box display={'flex'} width={"100%"} flexDirection={'column'} justifyContent={'flex-start'}>
                    {activeLibrary !== null
                      ? (
                        <>
                        <Typography variant="body1" alignSelf="flex-start" color={scss_variables.primary_color}>
                          Library: <b>{activeLibrary.name ? activeLibrary.name : 'No library assigned...'}</b><br/>
                        </Typography>
                        </>
                      )
                      : (
                        <>
                        <Typography variant="body1" alignSelf="flex-start" color={scss_variables.primary_color}>
                          Library: <b>{'No library assigned...'}</b><br/>
                        </Typography>
                        </>
                      )
                    }
                  </Box>

                  </div>
                </div>
              </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <div className="card-container">
                <div className="card-header">
                <Typography variant="h6" alignSelf="flex-start" color={scss_variables.primary_color}>
                  Library Calendar
                </Typography>
                </div>
                <div className="card-body">
                  <Grid container spacing={1} mb={3}>
                      <Grid item xs={9}>
                        <Typography variant="body1" alignSelf="center" >
                          View open library hours, modify your open time slots for mentoring/computer reservation, or remove a slot.
                        </Typography>
                      </Grid>

                      <Grid item xs={3}>
                        <Button onClick={()=>setRescheduleActive(!rescheduleActive)} variant="contained" color={rescheduleActive ? `error`: `info`} >
                          {rescheduleActive ? `Cancel`: `Modify Actve Library Slots`}
                        </Button>
                      </Grid>

                  </Grid>
                <Box display={'flex'} width={"100%"} justifyContent={'center'}>

                {user && user && scheduleEvents
                  ?  (
                    <FullCalendar
                      plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin]}
                      ref={calendarRef}
                      initialView= {isMobile ? 'timeGridDay' : 'timeGridWeek'}
                      selectable={rescheduleActive ? true : false}
                      aspectRatio={1}
                      contentHeight={'auto'}
                      slotDuration={'00:60:00'}
                      headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'timeGridWeek,timeGridDay'
                      }}
                      titleFormat= {isMobile ? {month: 'short', year: '2-digit', day: 'numeric', weekday: 'short'} : {month: 'long', year: 'numeric', day: 'numeric', weekday: 'long'}}
                      events={scheduleEvents}
                      select={onEventAdded}
                      selectOverlap={selectOverlap}
                      selectAllow={allowedSelection}
                      eventContent={renderInnerContent}
                      eventOverlap={eventOverlap}
                      validRange={{
                          start: Date.now()
                       }}

                    />
                  )
                  :<CircularProgress/>
                }

                </Box>

                </div>
              </div>
            </Grid>
          </Grid>
      </MainCardLayoutWithSideMenu>
    </PageLayout>
    </>
  );
}
export default LibraryProfile;
