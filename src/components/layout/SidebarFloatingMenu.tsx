import { NavLink } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';
import { SidebarGroup } from '../../types/components';

interface FloatingMenuProps {
  subitems?: SidebarGroup[];
}

export default function SidebarFloatingMenu({ subitems }: FloatingMenuProps) {
  return (
    <Stack className={'floatingMenu'}>
      {subitems
        ? subitems.map((item, index) => (
            <NavLink className={'sidebarLink'} to={item.path} key={index}>
              {item.name}
            </NavLink>
          ))
        : null}
    </Stack>
  );
}
