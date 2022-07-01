import { LOGOUT, LogoutAction } from './logout.types';
import { put, takeLatest } from 'redux-saga/effects';
import { pushHistory } from '../../utils/customHistory';

export const logout = (): LogoutAction => ({ type: LOGOUT });

export function* watchLogout() {
  yield takeLatest(LOGOUT, handleLogout);
}

function* handleLogout(
  action: LogoutAction
) {
  try {
    yield localStorage.removeItem('token')
    yield localStorage.removeItem('refresh_token')
    yield localStorage.removeItem('user')
    pushHistory('/login');

  } catch (e:any) {
    console.error('Could not logout', e);
  }
}
