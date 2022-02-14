import React from 'react';
import { ListItem, ListItemText, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    text: {
        color: "#ddd",
        fontSize: "1.5rem",
        fontWeight: "600",
        marginLeft: "1rem",
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }
  }));

const Item = ({ name, details }) => {
    const classes = useStyles();

    return(
        <ListItem>
            <ListItemText
                className={classes.container}
                classes={{
                    secondary: classes.text,
                }}
                primary={name}
                secondary={details}
            />
        </ListItem>
    )
}

export default Item;
