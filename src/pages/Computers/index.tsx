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
  getLibraryComputers,
  createLibraryComputer,
  updateLibraryComputer,
  deleteLibraryComputer,
} from '../../redux/library/library.actions';
import { FaDesktop, FaEllipsisV } from 'react-icons/fa';
import { BasicModal } from '../../components/Modals';

const defaultForm = {
  name: '',
  key: '',
  ipAddress: '',
  email: '',
  notes: '',
};

const Computers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const appState = useSelector((store: AppState) => store.appState);
  const user = useSelector((store: AppState) => store.user);
  const computersState = useSelector(
    (store: AppState) => store.library.computers
  );
  const [activePaginationIndex, set_activePaginationIndex] = React.useState(1);
  const [numOfItems, set_numOfItems] = React.useState(10);
  const [computers, set_computers] = React.useState<any>(null);

  const [addComputerModalOpen, set_addComputerModalOpen] =
    React.useState(false);
  const [editComputerModalOpen, set_editComputerModalOpen] =
    React.useState(false);
  const [deleteComputerConfirmModalOpen, set_deleteComputerConfirmModalOpen] =
    React.useState(false);
  const [activeComputerToDelete, set_activeComputerToDelete] =
    React.useState<any>(null);
  const [activeComputerForm, set_activeComputerForm] =
    React.useState<any>(defaultForm);
  const [activeComputer, set_activeComputer] = React.useState<any>(null);
  const [libID, set_libID] = React.useState<any>('');
  const [filterText, set_filterText] = React.useState<any>('');

  React.useEffect(() => {
    if (computersState !== undefined && computersState !== null) {
      let computerSort: any = [...computersState];
      let newSort = computerSort.sort(function (a: any, b: any) {
        return (
          new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf()
        );
      });
      set_computers(newSort);
    }
  }, [computersState]);

  React.useEffect(() => {
    if (user && user.role === 1 && user.studentProfile) {
      if (user.studentProfile.assignedLibrary) {
        var libraryID = user.studentProfile?.assignedLibrary.uniqueID;
        set_libID(user.studentProfile?.assignedLibrary.id);
        dispatch(getLibraryComputers(libraryID));
      }
    } else if (user && user.role === 2 && user.mentorProfile) {
      if (user.mentorProfile.assignedLibrary) {
        var libraryID2 = user.mentorProfile.assignedLibrary.uniqueID;
        set_libID(user.mentorProfile.assignedLibrary.id);

        dispatch(getLibraryComputers(libraryID2));
      }
    } else if (user && user.role === 3 && user.advisorProfile) {
      if (user.advisorProfile.library) {
        var libraryID3 = user.advisorProfile.library.uniqueID;
        set_libID(user.advisorProfile.library.id);
        dispatch(getLibraryComputers(libraryID3));
      }
    } else if (user && user.role === 4 && user.librarianProfile) {
      if (user.librarianProfile.library) {
        var libraryID4 = user.librarianProfile.library.uniqueID;
        set_libID(libraryID4);
        dispatch(getLibraryComputers(libraryID4));
      }
    }
  }, [user]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    set_activePaginationIndex(value);
  };

  const handleToggleActiveComputerView = (computer: any) => {
    if (editComputerModalOpen) {
      set_activeComputer(null);
      set_editComputerModalOpen(false);
      set_activeComputerForm(defaultForm);
    } else {
      set_activeComputer(computer);
      set_editComputerModalOpen(true);
      set_activeComputerForm(computer);
    }
  };

  const handleToggleDeleteComputerConfirm = (computer: any) => {
    if (deleteComputerConfirmModalOpen) {
      set_activeComputerToDelete(null);
      set_deleteComputerConfirmModalOpen(false);
    } else {
      set_activeComputerToDelete(computer);
      set_deleteComputerConfirmModalOpen(true);
    }
  };

  const handleAddComputer = (computer: any) => {
    console.log(computer);

    let obj = { ...computer, library: libID };
    delete obj.uniqueID;
    dispatch(createLibraryComputer(obj));
  };

  const handleEditComputer = (computer: any) => {
    console.log(computer);
    dispatch(updateLibraryComputer(computer, computer.uniqueID));
  };

  const handleDeleteComputer = (computer: any) => {
    dispatch(deleteLibraryComputer(computer.uniqueID));
  };

  const ComputerRow = ({ computer }: { computer: any }) => {
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
        key={computer.uniqueID}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="column">
          <b>{computer.name}</b>
          <br />
          Notes: {computer.notes}
        </TableCell>
        <TableCell>{computer.key || '-'}</TableCell>
        <TableCell>
          {moment(computer.createdAt).format('MM/DD/YY HH:MM A') || '-'}
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
            <MenuItem onClick={() => handleToggleActiveComputerView(computer)}>
              View/Edit...
            </MenuItem>
            <MenuItem
              onClick={() => handleToggleDeleteComputerConfirm(computer)}
            >
              <div style={{ color: 'red' }}>Remove...</div>
            </MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
    );
  };

  const renderComputers = (computers: any[], filterTxt: string) => {
    if (computers.length === 0) {
      return null;
    }
    let renderList = [];
    let filteredList = [];
    if (filterTxt === '') {
      filteredList = [...computers];
    } else {
      filteredList = computers.filter(
        (item: any) =>
          item.name && item.name.toLowerCase().includes(filterTxt.toLowerCase())
      );
    }
    renderList = filteredList.map((computer) => {
      return <ComputerRow computer={computer} />;
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
      set_activeComputerForm({
        ...activeComputerForm,
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
        open={deleteComputerConfirmModalOpen}
        onClose={() => set_deleteComputerConfirmModalOpen(false)}
        title={'Delete Computer?'}
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
            Are you sure you want to delete this computer? It will no longer be
            usable by library users.
          </Typography>
          <Typography
            mt={1}
            mb={1}
            variant="body1"
            alignSelf="flex-start"
            color={scss_variables.primary_color}
          >
            Computer:{' '}
            <b>
              {activeComputerToDelete
                ? `${activeComputerToDelete.name}`
                : `No computer details...`}
            </b>
          </Typography>
          <Typography
            mb={1}
            variant="body1"
            alignSelf="flex-start"
            color={scss_variables.primary_color}
          >
            Email:{' '}
            <b>
              {activeComputerToDelete
                ? `${activeComputerToDelete.email}`
                : `No email assigned...`}
            </b>
          </Typography>
          <Typography
            mb={1}
            variant="body1"
            alignSelf="flex-start"
            color={scss_variables.primary_color}
          >
            Key:{' '}
            <b>
              {activeComputerToDelete
                ? `${activeComputerToDelete.key}`
                : `No id...`}
            </b>
          </Typography>
          <Typography
            mb={1}
            variant="body1"
            alignSelf="flex-start"
            color={scss_variables.primary_color}
          >
            Unique ID:{' '}
            <b>
              {activeComputerToDelete
                ? `${activeComputerToDelete.uniqueID}`
                : `No unique id...`}
            </b>
          </Typography>

          <Button
            onClick={() => handleDeleteComputer(activeComputerToDelete)}
            variant="contained"
            color="info"
            sx={{ mt: 2 }}
          >
            {appState.loading ? (
              <CircularProgress />
            ) : (
              `Yes, delete this computer.`
            )}
          </Button>
          <Button
            onClick={() =>
              handleToggleDeleteComputerConfirm(activeComputerToDelete)
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
        open={editComputerModalOpen}
        onClose={() => set_deleteComputerConfirmModalOpen(false)}
        title={'Edit Computer'}
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
                  <FormLabel>Computer Name</FormLabel>
                  <TextField
                    id="standard-basic"
                    value={activeComputerForm.name}
                    multiline
                    rows={3}
                    onChange={(e) =>
                      set_activeComputerForm({
                        ...activeComputerForm,
                        name: e.target.value,
                      })
                    }
                    variant="standard"
                    required
                  />
                </FormControl>
                <br />
                <br />
                <FormControl fullWidth>
                  <FormLabel>Email</FormLabel>
                  <TextField
                    id="standard-basic"
                    value={activeComputerForm.email}
                    onChange={(e) =>
                      set_activeComputerForm({
                        ...activeComputerForm,
                        email: e.target.value,
                      })
                    }
                    variant="standard"
                  />
                </FormControl>
                <br />
                <br />
                <FormControl fullWidth>
                  <FormLabel>Identifier</FormLabel>
                  <TextField
                    id="standard-basic"
                    value={activeComputerForm.key}
                    onChange={(e) =>
                      set_activeComputerForm({
                        ...activeComputerForm,
                        key: e.target.value,
                      })
                    }
                    variant="standard"
                  />
                </FormControl>
                <br />
                <br />
                <FormControl fullWidth>
                  <FormLabel>IP - Address</FormLabel>
                  <TextField
                    id="standard-basic"
                    value={activeComputerForm.ipAddress}
                    onChange={(e) =>
                      set_activeComputerForm({
                        ...activeComputerForm,
                        ipAddress: e.target.value,
                      })
                    }
                    variant="standard"
                  />
                </FormControl>
                <br />
                <br />
                <FormControl fullWidth>
                  <FormLabel>Notes</FormLabel>
                  <TextField
                    id="standard-basic"
                    value={activeComputerForm.notes}
                    onChange={(e) =>
                      set_activeComputerForm({
                        ...activeComputerForm,
                        notes: e.target.value,
                      })
                    }
                    multiline
                    rows={3}
                    variant="standard"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="body1"
                  alignSelf="flex-start"
                  color={scss_variables.primary_color}
                >
                  Status:{' '}
                  <b>
                    {activeComputer && activeComputer.isDown
                      ? 'Down for Maintainence'
                      : 'Open for Reservations'}
                  </b>
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
                    {activeComputer &&
                      moment(activeComputer.createdAt).format(
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
                  Computer Actions
                </Typography>
                <Button
                  onClick={() =>
                    handleToggleDeleteComputerConfirm(activeComputer)
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
                onClick={() => handleToggleActiveComputerView(activeComputer)}
                variant="contained"
                color="error"
                sx={{ mt: 2 }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={() => handleEditComputer(activeComputerForm)}
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
        open={addComputerModalOpen}
        onClose={() => set_addComputerModalOpen(false)}
        title={'Add Computer'}
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
                  <FormLabel>Computer Name</FormLabel>
                  <TextField
                    id="standard-basic"
                    value={activeComputerForm.name}
                    onChange={(e) =>
                      set_activeComputerForm({
                        ...activeComputerForm,
                        name: e.target.value,
                      })
                    }
                    variant="standard"
                    required
                  />
                </FormControl>
                <br />
                <br />
                <FormControl fullWidth>
                  <FormLabel>Email</FormLabel>
                  <TextField
                    id="standard-basic"
                    value={activeComputerForm.email}
                    onChange={(e) =>
                      set_activeComputerForm({
                        ...activeComputerForm,
                        email: e.target.value,
                      })
                    }
                    variant="standard"
                  />
                </FormControl>
                <br />
                <br />
                <FormControl fullWidth>
                  <FormLabel>Identifier</FormLabel>
                  <TextField
                    id="standard-basic"
                    value={activeComputerForm.key}
                    onChange={(e) =>
                      set_activeComputerForm({
                        ...activeComputerForm,
                        key: e.target.value,
                      })
                    }
                    variant="standard"
                  />
                </FormControl>
                <br />
                <br />
                <FormControl fullWidth>
                  <FormLabel>IP - Address</FormLabel>
                  <TextField
                    id="standard-basic"
                    value={activeComputerForm.ipAddress}
                    onChange={(e) =>
                      set_activeComputerForm({
                        ...activeComputerForm,
                        ipAddress: e.target.value,
                      })
                    }
                    variant="standard"
                  />
                </FormControl>
                <br />
                <br />
                <FormControl fullWidth>
                  <FormLabel>Notes</FormLabel>
                  <TextField
                    id="standard-basic"
                    value={activeComputerForm.notes}
                    onChange={(e) =>
                      set_activeComputerForm({
                        ...activeComputerForm,
                        notes: e.target.value,
                      })
                    }
                    multiline
                    rows={3}
                    variant="standard"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}></Grid>
            </Grid>
            <Box display="flex" flexDirection="row" justifyContent="flex-end">
              <Button
                onClick={() => set_addComputerModalOpen(false)}
                variant="contained"
                color="error"
                sx={{ mt: 2 }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={() => handleAddComputer(activeComputerForm)}
                variant="contained"
                color="info"
                sx={{ mt: 2, ml: 2 }}
              >
                {appState.loading ? <CircularProgress /> : `Add`}
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
                    Computers
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
                      onClick={() => set_addComputerModalOpen(true)}
                      variant="contained"
                      color="info"
                      sx={{ mt: 2, ml: 2 }}
                    >
                      {appState.loading ? (
                        <CircularProgress />
                      ) : (
                        `+ Add Computers`
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
                            <TableCell>Computer Name</TableCell>
                            <TableCell>Identifier</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell align="right">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {computers ? (
                            <>
                              {computers.length > 0 ? (
                                <>
                                  {renderComputers(
                                    paginate(
                                      computers,
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
                                    No computers...
                                  </TableCell>
                                  <TableCell>-</TableCell>
                                  <TableCell>-</TableCell>
                                  <TableCell>-</TableCell>
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
                  {computers && (
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Pagination
                        shape="rounded"
                        count={
                          paginate(computers, activePaginationIndex, numOfItems)
                            .totalPages
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
export default Computers;
