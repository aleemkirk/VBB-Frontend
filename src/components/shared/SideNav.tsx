import { Avatar, Box, ListItemText, MenuItem, MenuList } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

interface IMenuItem {
  label: string;
  url: string;
}

interface SideNavProps {
  menuItems?: IMenuItem[];
}

const testPath = (url: string, path: string) =>
  url.lastIndexOf('/') === 0 ? url === path : path.startsWith(url);

const SideNav = ({ menuItems }: SideNavProps) => {

  const { pathname } = useLocation();
  
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" justifyContent="center">
        <Avatar sx={{ width: 72, height: 72 }} src="https://i.pravatar.cc/72" />
      </Box>
      <MenuList>
        {menuItems?.map((item) => (
          // @ts-expect-error
          <MenuItem
            key={item.url}
            value={item.url}
            component={Link}
            selected={testPath(item.url, pathname)}
            to={item.url}
          >
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  );
};

export default SideNav;
