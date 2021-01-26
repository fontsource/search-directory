import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: indentation => ({
    paddingLeft: theme.spacing(indentation * 2),
  }),
}));

export default function NavItem({
  Icon,
  indentation,
  onClick,
  path,
  primaryText,
  secondaryText,
}) {
  const classes = useStyles(indentation);

  return (
    <ListItem
      classes={{ root: classes.root }}
      button
      onClick={onClick}
      {...(path ? { component: Link, to: path } : {})}
    >
      {Icon ? (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      ) : (
        ''
      )}
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  );
}
