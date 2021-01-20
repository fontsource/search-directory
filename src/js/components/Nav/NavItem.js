import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: props => ({
    paddingLeft: theme.spacing(props.indentation * 2),
  }),
}));

export default function NavItem(props) {
  const classes = useStyles(props);

  return (
    <ListItem classes={{ root: classes.root }} button onClick={props.onClick}>
      {props.icon ? (
        <ListItemIcon>
          <props.icon />
        </ListItemIcon>
      ) : (
        ''
      )}
      <ListItemText
        primary={props.primaryText}
        secondary={props.secondaryText}
      />
    </ListItem>
  );
}
