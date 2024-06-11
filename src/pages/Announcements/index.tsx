import * as React from 'react';
import {
  Grid,
  Typography,
  Box,
  Button,
  Pagination,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Menu,
  MenuItem,
  FormControl,
  FormLabel,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AppState } from '../../redux/rootReducer';
import {
  PageLayout,
  MainCardLayoutWithSideMenu,
} from '../../components/layout/Page';
import scss_variables from '../../styles/_variables.scss';
import { useDispatch, useSelector } from 'react-redux';
import { paginate } from '../../utils/api';
import moment from 'moment';
import {
  getLibraryAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from '../../redux/library/library.actions';
import { FaDesktop, FaEllipsisV } from 'react-icons/fa';
import { BasicModal } from '../../components/Modals';

const defaultForm = {
  text: '',
  notes: '',
  displayStart: '',
  displayEnd: '',
};

const Announcements = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const appState = useSelector((store: AppState) => store.appState);
  const user = useSelector((store: AppState) => store.user);
  const announcementsState = useSelector(
    (store: AppState) => store.library.announcements
  );
  const [activePaginationIndex, set_activePaginationIndex] = React.useState(1);
  const [numOfItems, set_numOfItems] = React.useState(10);
  const [announcements, set_announcements] = React.useState<any>(null);

  const [addAnnouncementModalOpen, set_addAnnouncementModalOpen] =
    React.useState(false);
  const [editAnnouncementModalOpen, set_editAnnouncementModalOpen] =
    React.useState(false);
  const [
    deleteAnnouncementConfirmModalOpen,
    set_deleteAnnouncementConfirmModalOpen,
  ] = React.useState(false);
  const [activeAnnouncementToDelete, set_activeAnnouncementToDelete] =
    React.useState<any>(null);
  const [activeAnnouncementForm, set_activeAnnouncementForm] =
    React.useState<any>(defaultForm);
  const [activeAnnouncement, set_activeAnnouncement] =
    React.useState<any>(null);
  const [filterText, set_filterText] = React.useState<any>('');
  const [libID, set_libID] = React.useState<any>('');

  React.useEffect(() => {
    if (announcementsState !== undefined && announcementsState !== null) {
      let announcementSort: any = [...announcementsState];
      let newSort = announcementSort.sort(function (a: any, b: any) {
        return (
          new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf()
        );
      });
      set_announcements(newSort);
    }
  }, [announcementsState]);

  React.useEffect(() => {
    if (user && user.role === 1 && user.studentProfile) {
      if (user.studentProfile.assignedLibrary) {
        var libraryID = user.studentProfile?.assignedLibrary.uniqueID;
        set_libID(libraryID);
        dispatch(getLibraryAnnouncements(libraryID));
      }
    } else if (user && user.role === 2 && user.mentorProfile) {
      if (user.mentorProfile.assignedLibrary) {
        var libraryID2 = user.mentorProfile.assignedLibrary.uniqueID;
        set_libID(libraryID2);
        dispatch(getLibraryAnnouncements(libraryID2));
      }
    } else if (user && user.role === 3 && user.advisorProfile) {
      if (user.advisorProfile.library) {
        var libraryID3 = user.advisorProfile.library.uniqueID;
        set_libID(libraryID3);
        dispatch(getLibraryAnnouncements(libraryID3));
      }
    } else if (user && user.role === 4 && user.librarianProfile) {
      if (user.librarianProfile.library) {
        var libraryID4 = user.librarianProfile.library.uniqueID;
        set_libID(libraryID4);
        dispatch(getLibraryAnnouncements(libraryID4));
      }
    }
  }, [user]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    set_activePaginationIndex(value);
  };

  const handleToggleActiveAnnouncementView = (announcement: any) => {
    if (editAnnouncementModalOpen) {
      set_activeAnnouncement(null);
      set_editAnnouncementModalOpen(false);
      set_activeAnnouncementForm(defaultForm);
    } else {
      set_activeAnnouncement(announcement);
      set_editAnnouncementModalOpen(true);
      set_activeAnnouncementForm(announcement);
    }
  };

  const handleToggleDeleteAnnouncementConfirm = (announcement: any) => {
    if (deleteAnnouncementConfirmModalOpen) {
      set_activeAnnouncementToDelete(null);
      set_deleteAnnouncementConfirmModalOpen(false);
    } else {
      set_activeAnnouncementToDelete(announcement);
      set_deleteAnnouncementConfirmModalOpen(true);
    }
  };

  const handleAddAnnouncement = (announcement: any) => {
    console.log(announcement);
    let obj = { ...announcement, library: libID };
    obj.displayStart = new Date().toISOString();
    dispatch(createAnnouncement(obj));
  };

  const handleEditAnnouncement = (announcement: any) => {
    console.log(announcement);
    dispatch(updateAnnouncement(announcement));
  };

  const handleDeleteAnnouncement = (announcement: any) => {
    console.log(announcement);
    dispatch(deleteAnnouncement(announcement));
  };

  const AnnouncementRow = ({ announcement }: { announcement: any }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <TableRow
        key={announcement.uniqueID}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="column">
          <b>{announcement.text}</b>
          <br />
          Notes: {announcement.notes}
        </TableCell>
        <TableCell>
          {moment(announcement.createdAt).format('MM/DD/YY HH:MM A') || '-'}
        </TableCell>
        <TableCell>
          {moment(announcement.display_end).format('MM/DD/YY HH:MM A') || '-'}
        </TableCell>
        <TableCell align="right">
          <Button
            id="positioned-button"
            aria-controls={open ? 'positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <FaEllipsisV />
          </Button>
          <Menu
            id="positioned-menu"
            aria-labelledby="positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem
              onClick={() => handleToggleActiveAnnouncementView(announcement)}
            >
              View/Edit...
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleToggleDeleteAnnouncementConfirm(announcement)
              }
            >
              <div style={{ color: 'red' }}>Remove...</div>
            </MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
    );
  };

  const renderAnnouncements = (announcements: any[], filterTxt: string) => {
    if (announcements.length === 0) {
      return null;
    }
    let renderList = [];
    let filteredList = [];
    if (filterTxt === '') {
      filteredList = [...announcements];
    } else {
      filteredList = announcements.filter(
        (item: any) =>
          item.text && item.text.toLowerCase().includes(filterTxt.toLowerCase())
      );
    }
    renderList = filteredList.map((announcement) => {
      return <AnnouncementRow announcement={announcement} />;
    });
    return renderList;
  };

  const calculateEndDate = (days: string) => {
    if (!days) {
      return null;
    }
    var dayAmts = parseInt(days);
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + dayAmts);
    return newDate;
  };

  function handleEditEndDate(e: any) {
    const { value } = e.currentTarget;
    let newEndDate = calculateEndDate(value);
    if (newEndDate) {
      set_activeAnnouncementForm({
        ...activeAnnouncementForm,
        displayEnd: newEndDate.toISOString(),
      });
    }
  }

  const returnDateValue = (date: string) => {
    if (!date) {
      return '';
    }
    const dateValue = new Date(date).toISOString().slice(0, 10);
    return dateValue;
  };

  return (
    <>
      <BasicModal
        open={deleteAnnouncementConfirmModalOpen}
        onClose={() => set_deleteAnnouncementConfirmModalOpen(false)}
        title={'Delete Announcement?'}
      >
        <Box
          display={'flex'}
          flexWrap={'wrap'}
          width={'100%'}
          flexDirection={'column'}
          justifyContent={'flex-start'}
        >
          <Typography
            mt={1}
            mb={1}
            variant="body1"
            alignSelf="flex-start"
            color={scss_variables.primary_color}
          >
            Are you sure you want to delete this announcement? It will no longer
            be viewable by library users.
          </Typography>
          <Typography
            mt={1}
            mb={1}
            variant="body1"
            alignSelf="flex-start"
            color={scss_variables.primary_color}
          >
            Announcement:{' '}
            <b>
              {activeAnnouncementToDelete
                ? `${activeAnnouncementToDelete.text}`
                : `No announcement details...`}
            </b>
          </Typography>

          <Button
            onClick={() => handleDeleteAnnouncement(activeAnnouncementToDelete)}
            variant="contained"
            color="info"
            sx={{ mt: 2 }}
          >
            {appState.loading ? (
              <CircularProgress />
            ) : (
              `Yes, delete this announcement.`
            )}
          </Button>
          <Button
            onClick={() =>
              handleToggleDeleteAnnouncementConfirm(activeAnnouncementToDelete)
            }
            variant="contained"
            color="error"
            sx={{ mt: 2 }}
          >
            No, cancel.
          </Button>
        </Box>
      </BasicModal>
      <BasicModal
        open={editAnnouncementModalOpen}
        onClose={() => set_editAnnouncementModalOpen(false)}
        title={'Edit Announcement'}
      >
        <Box
          mt={2}
          display={'flex'}
          flexWrap={'wrap'}
          width={'100%'}
          flexDirection={'column'}
          justifyContent={'flex-start'}
        >
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <FormLabel>Announcement Message</FormLabel>
                  <TextField
                    id="standard-basic"
                    value={activeAnnouncementForm.text}
                    multiline
                    rows={3}
                    onChange={(e) =>
                      set_activeAnnouncementForm({
                        ...activeAnnouncementForm,
                        text: e.target.value,
                      })
                    }
                    variant="standard"
                    required
                  />
                </FormControl>
                <br />
                <br />
                <FormControl fullWidth>
                  <FormLabel>Notes</FormLabel>
                  <TextField
                    id="standard-basic"
                    value={activeAnnouncementForm.notes}
                    onChange={(e) =>
                      set_activeAnnouncementForm({
                        ...activeAnnouncementForm,
                        notes: e.target.value,
                      })
                    }
                    multiline
                    rows={3}
                    variant="standard"
                    required
                  />
                </FormControl>
                <br />
                <br />
                <FormLabel>Select End Date</FormLabel>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <RadioGroup
                    row
                    aria-labelledby="radio-buttons-group-label"
                    defaultValue="1"
                    name="radio-buttons-group"
                    onChange={handleEditEndDate}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="1 Week"
                    />
                    <FormControlLabel
                      value="30"
                      control={<Radio />}
                      label="1 Month"
                    />
                    <FormControlLabel
                      value="90"
                      control={<Radio />}
                      label="3 Months"
                    />
                  </RadioGroup>
                </Box>
                <br />
                <FormLabel>OR</FormLabel>
                <br />
                <br />
                <FormControl fullWidth>
                  <FormLabel>Custom Date</FormLabel>
                  <TextField
                    id="date"
                    type="date"
                    onChange={(e) =>
                      set_activeAnnouncementForm({
                        ...activeAnnouncementForm,
                        displayEnd: e.target.value,
                      })
                    }
                    value={returnDateValue(activeAnnouncementForm.displayEnd)}
                    variant="standard"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="body1"
                  alignSelf="flex-start"
                  color={scss_variables.primary_color}
                >
                  Created By:
                </Typography>
                <br />
                <br />
                <Typography
                  variant="body1"
                  alignSelf="flex-start"
                  color={scss_variables.primary_color}
                >
                  Created At: <br />
                  <b>
                    {activeAnnouncement &&
                      moment(activeAnnouncement.createdAt).format(
                        'MM/DD/YY HH:MM A'
                      )}
                  </b>
                </Typography>
                <br />
                <br />
                <Typography
                  variant="body1"
                  alignSelf="flex-start"
                  color={scss_variables.primary_color}
                >
                  Announcement Actions
                </Typography>
                <Button
                  onClick={() =>
                    handleToggleActiveAnnouncementView(activeAnnouncement)
                  }
                  variant="contained"
                  color="error"
                  sx={{ mt: 2 }}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
            <Box display="flex" flexDirection="row" justifyContent="flex-end">
              <Button
                onClick={() =>
                  handleToggleActiveAnnouncementView(activeAnnouncement)
                }
                variant="contained"
                color="error"
                sx={{ mt: 2 }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={() => handleEditAnnouncement(activeAnnouncementForm)}
                variant="contained"
                color="info"
                sx={{ mt: 2, ml: 2 }}
              >
                {appState.loading ? <CircularProgress /> : `Save`}
              </Button>
            </Box>
          </>
        </Box>
      </BasicModal>
      <BasicModal
        open={addAnnouncementModalOpen}
        onClose={() => set_addAnnouncementModalOpen(false)}
        title={'Add Announcement'}
      >
        <Box
          mt={2}
          display={'flex'}
          flexWrap={'wrap'}
          width={'100%'}
          flexDirection={'column'}
          justifyContent={'flex-start'}
        >
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <FormLabel>Announcement Message</FormLabel>
                  <TextField
                    id="standard-basic"
                    value={activeAnnouncementForm.text}
                    multiline
                    rows={3}
                    onChange={(e) =>
                      set_activeAnnouncementForm({
                        ...activeAnnouncementForm,
                        text: e.target.value,
                      })
                    }
                    variant="standard"
                    required
                  />
                </FormControl>
                <br />
                <br />
                <FormControl fullWidth>
                  <FormLabel>Notes</FormLabel>
                  <TextField
                    id="standard-basic"
                    value={activeAnnouncementForm.notes}
                    onChange={(e) =>
                      set_activeAnnouncementForm({
                        ...activeAnnouncementForm,
                        notes: e.target.value,
                      })
                    }
                    multiline
                    rows={3}
                    variant="standard"
                    required
                  />
                </FormControl>
                <br />
                <br />
                <FormLabel>Select End Date</FormLabel>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <RadioGroup
                    row
                    aria-labelledby="radio-buttons-group-label"
                    defaultValue="1"
                    name="radio-buttons-group"
                    onChange={handleEditEndDate}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="1 Week"
                    />
                    <FormControlLabel
                      value="30"
                      control={<Radio />}
                      label="1 Month"
                    />
                    <FormControlLabel
                      value="90"
                      control={<Radio />}
                      label="3 Months"
                    />
                  </RadioGroup>
                </Box>
                <br />
                <FormLabel>OR</FormLabel>
                <br />
                <br />
                <FormControl fullWidth>
                  <FormLabel>Custom Date</FormLabel>
                  <TextField
                    id="date"
                    type="date"
                    onChange={(e) =>
                      set_activeAnnouncementForm({
                        ...activeAnnouncementForm,
                        displayEnd: e.target.value,
                      })
                    }
                    value={returnDateValue(activeAnnouncementForm.displayEnd)}
                    variant="standard"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Box display="flex" flexDirection="row" justifyContent="flex-end">
              <Button
                onClick={(e) => set_addAnnouncementModalOpen(false)}
                variant="contained"
                color="error"
                sx={{ mt: 2 }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={() => handleAddAnnouncement(activeAnnouncementForm)}
                variant="contained"
                color="info"
                sx={{ mt: 2, ml: 2 }}
              >
                {appState.loading ? <CircularProgress /> : `Save`}
              </Button>
            </Box>
          </>
        </Box>
      </BasicModal>
      <PageLayout>
        <MainCardLayoutWithSideMenu>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className="card-container">
                <div className="card-header">
                  <Typography
                    variant="h6"
                    alignSelf="flex-start"
                    color={scss_variables.primary_color}
                  >
                    Announcements
                  </Typography>
                </div>
                <div className="card-body">
                  <Box
                    display="flex"
                    flexWrap="wrap"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    flex={1}
                    width="100%"
                  >
                    <FormControl>
                      <TextField
                        id="standard-basic"
                        value={filterText}
                        label="Search..."
                        onChange={(e) => set_filterText(e.target.value)}
                        variant="standard"
                      />
                    </FormControl>
                    <Button
                      onClick={() => set_addAnnouncementModalOpen(true)}
                      variant="contained"
                      color="info"
                      sx={{ mt: 2, ml: 2 }}
                    >
                      {appState.loading ? (
                        <CircularProgress />
                      ) : (
                        `+ Add Announcements`
                      )}
                    </Button>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    width="100%"
                    mt={2}
                  >
                    <TableContainer>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Announcement</TableCell>
                            <TableCell align="right">
                              Announcement Date
                            </TableCell>
                            <TableCell align="right">End Date</TableCell>
                            <TableCell align="right">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {announcements ? (
                            <>
                              {announcements.length > 0 ? (
                                <>
                                  {renderAnnouncements(
                                    paginate(
                                      announcements,
                                      activePaginationIndex,
                                      numOfItems
                                    ).data,
                                    filterText
                                  )}
                                </>
                              ) : (
                                <TableRow
                                  key={0}
                                  sx={{
                                    '&:last-child td, &:last-child th': {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    No announcements...
                                  </TableCell>
                                  <TableCell align="right">-</TableCell>
                                  <TableCell align="right">-</TableCell>
                                  <TableCell align="right">-</TableCell>
                                </TableRow>
                              )}
                            </>
                          ) : (
                            <CircularProgress />
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                  {announcements && (
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Pagination
                        shape="rounded"
                        count={
                          paginate(
                            announcements,
                            activePaginationIndex,
                            numOfItems
                          ).totalPages
                        }
                        page={activePaginationIndex}
                        onChange={handlePageChange}
                      />
                    </Box>
                  )}
                </div>
              </div>
            </Grid>
          </Grid>
        </MainCardLayoutWithSideMenu>
      </PageLayout>
    </>
  );
};
export default Announcements;
